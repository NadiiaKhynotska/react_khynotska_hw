import { createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout";

let router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children:[

        ]
    }
])

export {router}