const fetch = require('cross-fetch')
const WebTorrent = require('webtorrent');
const { propOr, prop, path } = require('ramda')

const client = new WebTorrent();

const qualityPreferences = {
    "2160p": 4,
    "1080p": 3,
    "720p": 2,
    "480p": 1,
}

const formatMovie = (movie) => ({
    id: prop('_id', movie),
    imdbId: prop('imdb_id', movie),
    tmdbId: prop('tmdb_id', movie),
    title: prop('title', movie),
    year: prop('year', movie),
    originalLanguage: prop('original_language', movie),
    existingTranslations: propOr([], 'existing_translations', movie),
    description: prop('synopsis', movie),
    runtime: prop('runtime', movie),
    certification: prop('certification', movie),
    trailerUrl: prop('trailer', movie),
    genres: propOr([], 'genres', movie),
    images: {
        posterUrl: path(['images','poster'], movie),
        fanartUrl: path(['images','fanart'], movie),
        bannerUrl: path(['images','banner'], movie),
    },
    rating: path(['rating', 'percentage'], movie),
    torrents: () => {
        const torrents = propOr([], 'torrents', movie)

        const resolvedTorrents = Object.values(torrents).map(streams => {
            return Object.keys(streams).map(quality => ({
                magnetUrl: path([quality, 'url'], streams),
                quality,
                seeds: path([quality, 'seeds'], streams),
                peers: path([quality, 'peers'], streams),
                fileSize: path([quality, 'filesize'], streams),
            }))
        })

        const flattenedTorrents = resolvedTorrents.flat()

        const sortedTorrents = flattenedTorrents.sort((a, b) => {
            const aQuality = qualityPreferences[a.quality]
            const bQuality = qualityPreferences[b.quality]
            return bQuality - aQuality
        })

        return sortedTorrents
    }
})

const searchMovies = async (parent, { arguments }, context, info) => {
    const { keyword, sort = 'trending', genre = 'all', page = 1 } = arguments
    try {
        const moviesResp = await fetch(`${process.env.POPCORN_API_BASE_URL_ONE}/movies/${page}?sort=${sort.toLowerCase()}&order=-1&genre=${genre.toLowerCase()}&keywords=${encodeURI(keyword)}`)
        const moviesJson = await moviesResp.json();

        const formattedMovies = moviesJson.map(formatMovie)

        return formattedMovies
    } catch (error) {
        console.log(error)
        throw new Error(error.response.data);
    }
}

const getMoviesList = async (parent, { page = 1 }, context, info) => {
    try {
        const moviesResp = await fetch(`${process.env.POPCORN_API_BASE_URL_TWO}/list?sort=seeds&short=1&cb=&quality=720p,1080p&page=${page}`)
        const moviesJson = await moviesResp.json();

        const formattedMovies = propOr([], 'MovieList', moviesJson).map(movie => ({
            genres: propOr([], 'genres', movie),
            id: prop('imdb', movie),
            imdbId: prop('imdb', movie),
            description: prop('description', movie),
            images: {
                posterUrl: prop('poster_med', movie),
                bannerUrl: prop('poster_big', movie),
            },
            runtime: () => {
                const runtime = prop('runtime', movie)
                if (!runtime) return null
                return runtime * 10
            },
            rating: () => {
                const rating = prop('rating', movie)
                if (!rating) return null
                return rating * 10
            },
            title: prop('title', movie),
            year: prop('year', movie),
            torrents: [],
        }))

        return formattedMovies
    } catch (error) {
        console.log(error)
        throw new Error(error.response.data);
    }
}

const getMovie = async (parent, { id }, context, info) => {
    try {
        const movieResp = await fetch(`${process.env.POPCORN_API_BASE_URL_ONE}/movie/${id}`)
        const movieJson = await movieResp.json();

        if (movieJson?.message) {
            throw {response: {data: movieJson.message}}
        }

        const formattedMovie = formatMovie(movieJson)

        return formattedMovie
    } catch (error) {
        console.log(error)
        throw new Error(error.response.data);
    }
}


const getMovieFile = async (parent, { id, quality = "FHD" }, context, info) => {
    const qualityMappings = {
        "UHD": "2160p",
        "FHD": "1080p",
        "HD": "720p",
        "SD": "480p",
    }

    const selectedQuality = qualityMappings[quality]

    try {
        const movie = await getMovie(parent, { id }, context, info)

        const torrents = movie.torrents()

        const selectedTorrent = torrents.find(torrent => torrent.quality === selectedQuality)

        if (!selectedTorrent) {
            console.log(`No torrent found for quality ${quality}`)
            // throw {response: {data: "No torrent found for the selected quality"}}
            return
        }

        const getFilePath = (torrent) => {
            const file = torrent.files.find(file => file.name.endsWith('.mp4'))

            // TODO: handle finding mp4 if none found for selected quality
            if (!file) {
                // throw {response: {data: "No mp4 file found for the selected quality"}}
                return
            }

            return encodeURI(file.path.replace('/tmp/webtorrent', ''))
        }

        const existingTorrent = client.get(selectedTorrent.magnetUrl)

        if (existingTorrent) {
            return {
                filePath: getFilePath(existingTorrent),
            }
        }

        try {
            const filePath = await new Promise((resolve, reject) => {
                client.add(selectedTorrent.magnetUrl, (torrent) => {
                    resolve(getFilePath(torrent))
                })
            })

            return {
                id: movie.id,
                title: movie.title,
                quality: selectedQuality,
                filePath
            }
        } catch (error){
            // throw new Error(error.response.data);
        }
    } catch (error) {
        console.log(error)
        // throw new Error(error.response.data);
    }

}

const destroyMovieTorrent = async (parent, { id, quality = "FHD" }, context, info) => {
    const qualityMappings = {
        "UHD": "2160p",
        "FHD": "1080p",
        "HD": "720p",
        "SD": "480p",
    }

    const selectedQuality = qualityMappings[quality]

    try {
        const movie = await getMovie(parent, { id }, context, info)

        const torrents = movie.torrents()

        const selectedTorrent = torrents.find(torrent => torrent.quality === selectedQuality)

        if (!selectedTorrent) {
            throw {response: {data: "No torrent found for the selected quality"}}
        }

        const existingTorrent = client.get(selectedTorrent.magnetUrl)

        if (!existingTorrent) {
           throw {response: {data: "No torrent found or it has alredy been destroyed"}}
        }

        client.remove(selectedTorrent.magnetUrl, (error) => {
                if (error) throw {response: {data: error}}
        })

        const isDestroyed = !Boolean(client.get(selectedTorrent.magnetUrl))

        if (isDestroyed) console.log(movie.title + " Movie Torrent Destroyed")

        return {
            isDestroyed
        }
    } catch (error) {
        console.log(error)
        throw new Error(error.response.data);
    }

}



module.exports = {
    queries: {
        moviesSearch: searchMovies,
        moviesList: getMoviesList,
        movieById: getMovie,
        getMovieFile: getMovieFile,
        destroyMovieTorrent: destroyMovieTorrent
    }
}