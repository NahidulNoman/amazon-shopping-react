import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Shop from '../components/shop/Shop';
import Orders from "../components/Orders/Orders";
import Inventory from "../components/inventory/Inventory";
import About from "../components/About/About";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import { addToOrders } from "../components/loaders/addToOrders";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
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
            }
        ]
    }
])