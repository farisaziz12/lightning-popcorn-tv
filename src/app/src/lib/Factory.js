import { Strip, Item} from "@/components"

export const createPageComponents = (strips) => {
    return strips.map(({title, media_type, items}) => {
        return {type: Strip, itemType: Item, h: Item.height + 80, title, index: 0, items: createItemCollection(items, media_type)}
    });
}

export const createItemCollection = (items, media_type = 'tv') => {
    console.log({items})
    return items.map((item) => {
        return {item: applyItemModel({media_type, ...item})}
    })
};

export const applyItemModel = (item) => {
    const {id, title, name, media_type = 'tv', number_of_episodes, number_of_seasons, genres, runtime, description, images: { posterUrl, bannerUrl, fanartUrl }} = item;
    return {
        id,
        media_type,
        number_of_episodes,
        number_of_seasons,
        genres,
        runtime,
        title: media_type === 'tv' ? name : title,
        description,
        poster: posterUrl,
        large_poster: posterUrl,
        backdrop: bannerUrl
    }
}

export const applyPlayerModel = (item) => {
    return {
        ...item
    }
} 