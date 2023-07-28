import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {NotFoundPage, MovieListPage, MovieListCardPage, GenresPage} from "./pages";


let router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout/>,
        children: [

            {
                path: '/movie/:id',
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