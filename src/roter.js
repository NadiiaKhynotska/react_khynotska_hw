import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./loyaut";
import {HomePage, MovieCardPage, MovieListPage, NotFoundPage, UserPage} from "./pages";


let router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'topRated'}/>
            },
            {
                path:'topRated',
                element:<HomePage/>
            },
            {
                path: 'movie',
                element: <MovieListPage/>
            },
            {
                path: 'user',
                element: <UserPage/>
            },
            {
                path: 'movie/:movieId',
                element: <MovieCardPage/>
            },
            {
                path: '*',
                element: <NotFoundPage/>
            }

        ]
    }

])

export {router}