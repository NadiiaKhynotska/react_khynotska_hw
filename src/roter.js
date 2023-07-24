import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import {AlbumsPage, CommentsPage, NotFoundPage, PostPage, TodosPage} from "./pages";





let router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children:[
            {
                path: 'todos',
                element: <TodosPage/>
            },
            {
                path: 'albums',
                element: <AlbumsPage/>
            },
            {
                path: 'comments',
                element: <CommentsPage/>,
                children:[
                    {
                        path:'posts/:postId',
                        element: <PostPage/>
                    }
                ]
            }
        ]
    },
    {
        path:'*',
        element: <NotFoundPage/>
    }
])

export {router}