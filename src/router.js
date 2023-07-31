import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarsPage, CommentsPage, NotFoundPage, PostPage} from "./pages";


const router = createBrowserRouter([
    {
        path: '',
        element:<MainLayout/>,
        children:[
            {
                index: true,
                element: <Navigate to={'posts'}/>
            },
            {
                path: 'posts',
                element: <PostPage/>
            },
            {
                path: 'comments',
                element: <CommentsPage/>
            },
            {
                path: 'cars',
                element: <CarsPage/>
            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }
])

export {router}