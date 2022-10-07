import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Shop from '../components/shop/Shop';
import Orders from "../components/Orders/Orders";
import Inventory from "../components/inventory/Inventory";
import About from "../components/About/About";
import ErrorPage from "../components/ErrorPage/ErrorPage";

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