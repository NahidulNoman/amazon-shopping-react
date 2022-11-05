import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoreCart } from '../../utilities/fakedb';
import Order from '../order/Order';
import Product from '../product/Product';
import './Shop.css'

// count : 
// perPage : size
// pages : count/perPage
// currentPage : page

const Shop = () => {
    // const [products , setProducts] = useState([]);
    // const {products,count} = useLoaderData();
    const [products , setProducts] = useState([]);
    const [count , setCount] = useState(0);
    const [cart , setCart] = useState([]); 
    const [page , setPage] = useState(0);
    const [size , setSize] = useState(10);
    const pages = Math.ceil(count/size);

    useEffect( () => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => {
            setCount(data.count)
            setProducts(data.products)
        })
    },[page,size])

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    // useEffect( ()=> {
    //     fetch('products.json')
    //     .then(rest => rest.json())
    //     .then(data => setProducts(data))
    // },[]);

    useEffect( ()=> {
        const storage = getStoreCart();
        const saveCart = [];
        for(const id in storage){
            const added = products.find(product => product._id === id)
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
        const exists = cart.find(existProduct => existProduct._id === products._id);
        if(!exists){
            products.quantity = 1;
            newCart = [...cart , products]
        } 
        else{
            const rest = cart.filter(restProducts => restProducts._id !== products._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest , exists]
        }
       
        setCart(newCart);
        addToDb(products._id)
    }

    return (
        <div>
          <div className='shop-container'>
            <div className='container'>
               {
                products.map(product => <Product 
                    key={product._id}
                    product={product}
                    addToCart={addToCart}
                    ></Product>)
               }
            </div>
            <div className='order-container'>
                <Order 
                cart={cart}
                clearCart={clearCart}
                >
                    <Link to='/order'>
                    <button>Review Order</button>
                    </Link>
                </Order>
            </div>
        </div>
        <div className='pagination'>
          <p>Currently selected page : {page} and size {size}</p>
              {
                [...Array(pages).keys()].map(number => <button
                key={number}
                className={page === number && 'selected'}
                onClick={()=> setPage(number)}
                >
                  {number}
                </button>)
              }
              <select onChange={(e)=>setSize(e.target.value)}>
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
              </select>
        </div>
        </div>
    );
};

export default Shop;