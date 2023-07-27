import { createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {NotFoundPage, MovieListPage, MovieListCardPage, GenresPage} from "./pages";


let router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout/>,
        children:[
            {
                path: 'genres',
                element: <GenresPage/>
            },
            {
                path: 'movie',
                element: <MovieListPage/>,
                children:[
                    {
                        path: '/movie/:id',
                        element: <MovieListCardPage/>
                    }
                ]
            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }
])

export {router}