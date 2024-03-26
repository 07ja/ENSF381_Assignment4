/*==========================================================================
Name        : Header.js
Assignment  : Assignment 4
Author(s)   : Jaimal Sahota (30126909), Xicheng(Justin) Wang (30191121)
Submission  : Mar 25, 2024
===========================================================================*/

import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="title">
                <div className="logo">
                    <img src="/images/logo.png" alt="Logo" />
                </div>
                <div className="company-name">Company Name</div>
            </div>
            <nav>
                <ul className = "nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/login">Login</Link>
                </ul>
            </nav>
        </header>
    );
};
export default Header;


