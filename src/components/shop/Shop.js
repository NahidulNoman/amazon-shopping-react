import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect( ()=> {
        fetch('products.json')
        .then(rest => rest.json())
        .then(data => setProducts(data))
    },[]);

    const addToCart = (products) => {
        console.log(products)
        const newCart = [...cart , products]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
                products.map(product => <Product 
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    ></Product>)
               }
            </div>
            <div className='order-container'>
                <h3>Order Summary</h3>
                <p>selected items : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;