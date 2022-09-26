import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Order from '../order/Order';
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

    useEffect( ()=> {
        const storage = getStoreCart();
        const saveCart = [];
        for(const id in storage){
            const added = products.find(product => product.id === id)
            if(added){
               const quantity = storage[id];
               added.quantity = quantity;
               saveCart.push(added)
            }
        }
        setCart(saveCart);
    },[products])

    const addToCart = (products) => {
        console.log(products)
        let newCart = [];
        const exists = cart.find(existProduct => existProduct.id === products.id);
        if(!exists){
            products.quantity = 1;
            newCart = [...cart , products]
        } 
        else{
            const rest = cart.filter(restProducts => restProducts.id !== products.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest , exists]
        }
       
        setCart(newCart);
        addToDb(products.id)
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
                <Order 
                cart={cart}
                ></Order>
            </div>
        </div>
    );
};

export default Shop;