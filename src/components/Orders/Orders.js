import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Order from '../order/Order';
import Review from '../review/Review';

const Orders = () => {
    const {initialCart} = useLoaderData();
    const [cart , setCart] = useState(initialCart);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const removeProduct = (id) => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='product-review'>
               {
                cart.map(product => <Review
                key={product._id}
                product={product}
                removeProduct={removeProduct}
                ></Review>)
               }
               {
                cart.length === 0 &&  
                    <h2>no review here please do some shop <Link to='/shop'>Shop Now</Link> </h2>
                
               }
            </div>
            <div className='order-container'>
                <Order 
                cart={cart}
                clearCart={clearCart}
                >
                    <Link to='/shipping'><button>Shipping</button></Link>
                </Order>
            </div>
        </div>
    );
};

export default Orders;