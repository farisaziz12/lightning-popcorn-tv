import { Item } from "../components";
import { Main, Search, Splash, Detail, Player } from "../pages";
import { getDetailPage, getHomePage, getMoviesPage, getSearchResults, getSeriesPage, getVideo } from "./api.js";
import { applyItemModel, applyPlayerModel, createItemCollection, createPageComponents } from "./Factory.js";
const routes = [
    {
        path: 'home',
        component: Main,
        on: async (page) => {
            getHomePage()
                .then((response) => {
                    console.log({response})
                    page.addStrips(createPageComponents(response));
                    return true;
                })
        },
        widgets: ['menu', 'detail']
    },
    // {
    //     path: 'movies',
    //     component: Main,
    //     on: async (page) => {
    //         getMoviesPage()
    //             .then((response) => {
    //                 page.addStrips(createPageComponents(response));
    //                 return true;
    //             })
    //     },
    //     widgets: ['menu', 'detail']
    // },
    // {
    //     path: 'series',
    //     component: Main,
    //     on: async (page) => {
    //         getSeriesPage()
    //             .then((response) => {
    //                 page.addStrips(createPageComponents(response));
    //                 return true;
    //             })
    //     },
    //     widgets: ['menu', 'detail']
    // },
    {
        path: 'search',
        component: Search,
        widgets: ['inputfield'],
        on: async (page) => {
            page.tag('Content').itemType = Item;
            page.onSearch = async (input) => {
                return getSearchResults(input)
                    .then((response) => {
                        return createItemCollection(response, 'movie');
                    });
            }
            return true;
        },
        widgets: ['inputfield', 'detail']
    },
    {
        path: 'detail/:mediaType/:mediaId',
        component: Detail,
        before: async (page, {mediaType, mediaId}) => {
            getDetailPage(mediaType, mediaId)
                .then((response) => {
                    const dataItem = applyItemModel(response);
                    page.widgets.detail.show(dataItem);
                    page.widgets.detail.showMore(dataItem);
                    return true;
                });
        },
        widgets: ['detail']
    },
    {
        path: 'player/:mediaType/:mediaId',
        component: Player,
        before: async (page, {mediaType, mediaId}) => {
            getVideo(mediaType, mediaId)
                .then((response) => {
                    const dataItem = applyPlayerModel(response);
                    page.setData(dataItem);
                    return true;
                })
        },
        widgets: ['dialog']
    },
    {
        path: '$',
        component: Splash
    },
]

export default {
    root: routes[0].path,
    routes
}