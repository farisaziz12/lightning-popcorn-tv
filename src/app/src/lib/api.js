const _baseUrl = 'http://192.168.1.172:4000'; //'https://api.themoviedb.org/3/';
const _headers = {
    'Content-Type': 'application/json'
};
const _tmdbBaseUrl = 'https://api.themoviedb.org/3'
const _params = {
    'api_key': '66683917a94e703e14ca150023f4ea7c',
};

const _executeRequest = (config, retryCounter = 0) => {
    const {url, target, body, headers = {}, exceptions = {}, method, timeout} = config;
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.timeout = timeout || 10000;

        for(let key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }

        xhr.onload = () => {
            if(xhr.status !== 200 && exceptions[xhr.status]) {
                resolve(xhr);
            }
            else if(xhr.status !== 200) {
                reject(target);
            }
            else {
                resolve(JSON.parse(xhr.response));
            }
        }

        xhr.onerror = () => {
            if(xhr.status !== 200 && exceptions[xhr.status]) {
                resolve(xhr);
            }
            else {
                reject(target);
            }
        }

        xhr.ontimeout = () => {
            if(retryCounter === 3) {
                reject(target);
            }
            else {
                retryCounter++;
                resolve(_executeRequest(config, retryCounter))
            }
        }
        xhr.send(body);
    })
}

const _request = ({url, target, params = {}, body = {}, headers = {}, exceptions = {}, method, timeout}) => {
    headers = {..._headers, ...headers};
    params = {..._params, ...params};
    url = url || _baseUrl + target;

    if(method !== 'GET') {
        body = JSON.stringify(body);
    }
    if(method === 'GET' && params) {
        url += `?${qsify(params)}`;
    }
    return _executeRequest({url, target, body, headers, exceptions, method, timeout})
}

const qsify = obj => {
    const ec = v=>encodeURIComponent(v);
    return Object.keys(obj).map((key) => {
        return `${ec(key)}=${ec(obj[key])}`;
    }).join("&");
};

//public functions
export const getRequest = (obj) => {
    return _request({...obj, method: 'GET'});
};

export const generateRequestIterable = (obj, amount) => {
    return new Array(amount).fill("").map(() => _request({...obj, method: 'GET'}));
}

export const postRequest = (obj) => {
    return _request({...obj, method: 'POST'});
};


const groupByGenre = (list) => {
    return list.reduce((acc, cur) => {
        if(!acc[cur.genres[0]]) {
            acc[cur.genres[0]] = [];
        }
        acc[cur.genres[0]].push(cur);
        return acc;
    }, {})
}


const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const _fetchPageData = (queryTemplate, itemParams = {}) => {
    const [query] = queryTemplate

    return postRequest({
        url: `${_baseUrl}/graphql`,
        body: {query}
    }).then(({data}) => {
        const { moviesList } = data
        const groupedMovies = groupByGenre(moviesList);
        const movies = Object.keys(groupedMovies).map(key => ({
            title: capitalize(key),
            media_type: 'movie',
            items: groupedMovies[key]
        }));

        return movies.sort((a, b) =>  b.items.length - a.items.length)
    })
}

export const getSearchResults = (query) => {
    console.log(query.trim().toLowerCase())

    const gqlQuery = `
        query {
            moviesSearch(arguments: { keyword: "${query.trim().toLowerCase()}" }) {
                id
                title
                description
                genres
                rating
                year
                images {
                    bannerUrl
                    posterUrl
                    fanartUrl
                }
            }
        }
        `;

    return postRequest({url: `${_baseUrl}/graphql`, body: {query: gqlQuery}})
            .then(({data}) => {
                const { moviesSearch: results } = data
                return results
            })
}

export const getHomePage = () => {
    return _fetchPageData`
    query {
        moviesList {
            id
            title
            description
            genres
            rating
            year
            images {
                bannerUrl
                posterUrl
                fanartUrl
            }
        }
    }
    `
}

export const getMoviesPage = () => {
    const currentDate = new Date();
    const futureDate = _futureDate(currentDate);
    const pastDate = _pastDate(currentDate);
    return _fetchPageData([
        {path: 'discover/movie', title: 'Most Popular'},
        {path: 'discover/movie', params: {sort_by: 'vote_count.desc'}, title: 'Top Rated'},
        {path: 'discover/movie', params: {with_watch_monetization_types: 'free'}, title: 'Free to Watch'},
        {path: 'discover/movie', params: {'release_date.gte': futureDate.gte, 'release_date.lte': futureDate.lte, 'with_release_type': 3}, title: 'Upcoming'},
        {path: 'discover/movie', params: {'release_date.gte': pastDate.gte, 'release_date.lte': pastDate.lte, 'with_release_type': 3}, title: 'In Theaters'},
    ], {media_type: 'movie'});
}

export const getSeriesPage = () => {
    const currentDate = new Date();
    const formatCurrentDate = `${_nomalizeDatePart(currentDate.getDay())}-${_nomalizeDatePart(currentDate.getMonth() + 1)}-${currentDate.getFullYear()}`;
    return _fetchPageData([
        {path: 'discover/tv', title: 'Most Popular'},
        {path: 'discover/tv', params: {sort_by: 'vote_count.desc'}, title: 'Top Rated'},
        {path: 'discover/tv', params: {'release_date.gte': formatCurrentDate, 'release_date.lte': formatCurrentDate}, title: 'Airing Today'}
    ], {media_type: 'tv'});
}

export const getBackdropUrl = (imdbId) => {
    return getRequest({url: `${_tmdbBaseUrl}/find/${imdbId}`, params: {..._params, external_source: 'imdb_id'}})
        .then(({movie_results}) => {
            const [movie] = movie_results;
            return `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
        })
}

export const getDetailPage = (mediaType, mediaId) => {

    const query = `
    query {
        movieById(id: "${mediaId}") {
            id
            title
            runtime
            description
            originalLanguage
            genres
            rating
            year
            images {
                bannerUrl
                posterUrl
                fanartUrl
            }
            torrents {
                quality
            }
        }
    }
    `

    return postRequest({url: `${_baseUrl}/graphql`, body: {query}})
        .then(({data}) => {
            const { movieById: movie } = data
            return {media_type: mediaType, ...movie};
        })
}

export const getVideo = (mediaType, mediaId) => {

    const query = `
    query {
        getMovieFile(id: "${mediaId}") {
            id
            title
            filePath
        }
    }
    `

    return postRequest({url: `${_baseUrl}/graphql`, body: {query}})
        .then(({data}) => {
            const { getMovieFile: video } = data
            return {media_type: mediaType, videoUrl: video?.filePath ? `${_baseUrl}/files${video.filePath}` : null, title: video?.title, id: video?.id};
        })
}

export const destroyMovieTorrent = (movieId) => {
    const query = `
    query {
        destroyMovieTorrent(id: "${movieId}", quality: FHD) {
            isDestroyed
        }
    }
    `

    return postRequest({url: `${_baseUrl}/graphql`, body: {query}})
        .then(({data}) => {
            const { destroyMovieTorrent: { isDestroyed } } = data
            return { id: movieId, isDestroyed };
        })
}

const _futureDate = (date) => {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentDay = date.getDay();

    let futureMonth = currentMonth + 1;
    let futureYear = currentYear;
    if(futureMonth > 11) {
        futureMonth = 0;
        futureYear = currentYear + 1;
    }
    return {
        gte: `${_nomalizeDatePart(currentYear)}-${_nomalizeDatePart(currentMonth + 1)}-${currentDay < 22 ? 22 : currentDay}`,
        lte: `${_nomalizeDatePart(futureYear)}-${_nomalizeDatePart(futureMonth + 1)}-14`
    }
}

const _pastDate = (date) => {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentDay = date.getDay();

    let pastMonth = currentMonth - 1;
    let pastYear = currentYear;
    const pastDay = Math.min(28, currentDay);

    if(pastMonth < 0) {
        pastMonth = 11;
        pastYear = currentYear - 1;
    }
    return {
        lte: `${_nomalizeDatePart(currentYear)}-${_nomalizeDatePart(currentMonth)}-${currentDay}`,
        gte: `${_nomalizeDatePart(pastYear)}-${_nomalizeDatePart(pastMonth)}-${pastDay}`
    }
}

const _nomalizeDatePart = (num) => {
    if((num + '').length === 1) {
        return '0' + num;
    }
    return num;
}