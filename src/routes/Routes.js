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
import Shipping from "../components/shipping/Shipping";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Shop></Shop>
            },
            {
                path : 'shop',
                element : <Shop></Shop>
            },
            {
                path : 'order',
                loader : addToOrders ,
                element : <Orders></Orders>
            },
            {
                path : 'inventory',
                element : <PrivateRouter><Inventory></Inventory></PrivateRouter>
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
            },
            {
                path : '/shipping',
                element : <PrivateRouter><Shipping></Shipping></PrivateRouter>
            }
        ]
    }
])