import React from 'react';
import './Order.css'

const Order = (props) => {
    const {cart} =props;

    // console.log(cart)

    let total = 0;
    let shipping = 0;
    for(let carts of cart){
        total = total + carts.price;
        shipping = shipping + carts.shipping
    }

    let tax = +(total * 0.1).toFixed(2)
    // console.log(typeof tax)
    return (
        <div className='order'>
            <h2>Order Summary</h2>
                <div className='four-header'>
                <h4>Selected Items : {cart.length}</h4>
                <h4>Total Price : ${total}</h4>
                <h4>Total Shipping Charge : ${shipping}</h4>
                <h4>Tax : ${tax}</h4>
                </div>
                <h2>Grand Total : ${}</h2>
        </div>
    );
};

export default Order;