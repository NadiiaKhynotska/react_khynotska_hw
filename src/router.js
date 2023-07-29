import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {NotFoundPage, MovieListPage, MovieListCardPage} from "./pages";


let router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout/>,
        children: [

            {
                path: '/movie/:filmId',
                element: <MovieListCardPage/>
            },
            {
                path: 'movie',
                element: <MovieListPage/>,

            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }
])

export {router}