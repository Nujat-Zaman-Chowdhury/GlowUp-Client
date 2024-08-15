import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Main from "../MainLayout/Main";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";

export const router = createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorPage/>,
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            }
        ]
    }
])