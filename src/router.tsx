import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./loyauts";
import {CarsDetailsPage, CarsPage} from "./pages";

const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Navigate to={'cars'}/>
            },
            {
                path:'cars',
                element: <CarsPage/>,
                children:[
                    {
                        path:':id',
                        element:<CarsDetailsPage/>
                    }
                ]
            }
        ]
    }
])

export {router}