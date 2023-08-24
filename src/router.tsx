import {createBrowserRouter, Navigate} from "react-router-dom";

import {CarDetailsPage, CarsPage, LoginPage, RegisterPage} from "./pages";
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
            },
            {
                path: 'login',
                element:<LoginPage/>
            },
            {
                path:'register',
                element:<RegisterPage/>
            }

        ]
    }
])


export {router}