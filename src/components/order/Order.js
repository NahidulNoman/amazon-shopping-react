import React from 'react';
import './Order.css'

const Order = (props) => {
    return (
        <div className='order'>
            <h2>Order Summary</h2>
                <div className='four-header'>
                <h4>Selected Items : {props.cart.length}</h4>
                <h4>Total Price :    ${props.cart.length}</h4>
                <h4>Total Shopping Charge :    ${props.cart.length}</h4>
                <h4>Tax :    ${props.cart.length}</h4>
                </div>
                <h2>Grand Total :    ${props.cart.length}</h2>
        </div>
    );
};

export default Order;