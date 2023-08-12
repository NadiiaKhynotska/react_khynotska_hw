import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./loyauts";
import {CharactersPage, EpisodesPage, NotFoundPage} from "./pages";

const router = createBrowserRouter([
    {
        path:'',
        element: <MainLayout/>,
        children:[
            {
                index:true,
                element: <Navigate to={'episodes'}/>
            },
            {
                path: 'episodes',
                element: <EpisodesPage/>
            },
            {
                path: 'characters',
                element: <CharactersPage/>
            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }
])

export {router}