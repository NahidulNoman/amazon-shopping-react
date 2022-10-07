import React from 'react';
import { NavLink } from 'react-router-dom';
import picture from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={picture} alt="" />
            <div>
                <NavLink className=
                {({isActive})=> isActive ? 'active' : undefined} to="./shop">Shop</NavLink>
                <NavLink to="./order">Order</NavLink>
                <NavLink to="./inventory">Inventory</NavLink>
                <NavLink to="./about">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;