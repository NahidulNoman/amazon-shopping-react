import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Order from '../order/Order';
import Review from '../review/Review';

const Orders = () => {
    const {initialCart} = useLoaderData();
    const [cart , setCart] = useState(initialCart);

    const removeProduct = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='product-review'>
               {
                cart.map(product => <Review
                key={product.id}
                product={product}
                removeProduct={removeProduct}
                ></Review>)
               }
            </div>
            <div className='order-container'>
                <Order 
                cart={cart}
                ></Order>
            </div>
        </div>
    );
};

export default Orders;