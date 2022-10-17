import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Shop from '../components/shop/Shop';
import Orders from "../components/Orders/Orders";
import Inventory from "../components/inventory/Inventory";
import About from "../components/About/About";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import { addToOrders } from "../components/loaders/addToOrders";
import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                loader : ()=> fetch ('products.json'),
                element : <Shop></Shop>
            },
            {
                path : 'shop',
                loader : ()=> fetch ('products.json'),
                element : <Shop></Shop>
            },
            {
                path : 'order',
                loader : addToOrders ,
                element : <Orders></Orders>
            },
            {
                path : 'inventory',
                element : <Inventory></Inventory>
            },
            {
                path : 'about',
                element : <About></About>
            },
            {
                path : '/login',
                element : <LogIn></LogIn>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            }
        ]
    }
])