import {createBrowserRouter, Navigate} from "react-router-dom";

import {CarDetailsPage, CarsPage} from "./pages";
import {MainLayout} from "./layouts";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'cars'}/>
            },
            {
                path: 'cars',
                element: <CarsPage/>,
                children: [
                    {
                        path: ':id',
                        element: <CarDetailsPage/>
                    }
                ]
            }

        ]
    }
])


export {router}