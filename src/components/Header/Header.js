import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className = "header">
            <img src = {logo} alt= "Logo" className = "logo"/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Enventory</a>
            </nav>
        </div>
    );
};

export default Header;