import React from 'react';
import picture from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={picture} alt="" />
            <div>
                <a href="./shop">Shop</a>
                <a href="./order">Order</a>
                <a href="./inventory">Inventory</a>
                <a href="./about">About</a>
            </div>
        </nav>
    );
};

export default Header;