import { createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout";

import {NotFoundPage, NowPlaying, Popular, TopRated, Upcoming} from "./pages";


let router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout/>,
        children:[
            {
                path: 'movie/now_playing',
                element: <NowPlaying/>
            },
            {
                path: 'movie/popular',
                element: <Popular/>
            },
            {
                path: 'movie/top_rated',
                element: <TopRated/>
            },
            {
                path: 'movie/upcoming',
                element: <Upcoming/>
            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }
])

export {router}