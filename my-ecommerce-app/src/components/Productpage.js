/*==========================================================================
Name        : Productpage.js
Assignment  : Assignment 4
Author(s)   : Jaimal Sahota (30126909), Xicheng(Justin) Wang (30191121)
Submission  : Mar 25, 2024
===========================================================================*/
// import React from 'react';
// import Header from './Header';
// import ProductList from './ProductList';
// import Cart from './Cart';
// import Footer from './Footer';

// <div className="product-page">
//     <Header />
//     <table>
//         <tr>
//             <td><ProductList /></td>
//             <td style={{verticalAlign:'top'}}><Cart /></td>
//         </tr>
//     </table>
//     <Footer />
// </div>


import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import Cart from './Cart';

function ProductPage() {
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
    
    const addToCart = (product) => {
        setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.product.id === product.id);
        if (existingItem) {
            return prevItems.map(item =>
            item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...prevItems, { product, quantity: 1 }];
        }
        });
    };
    
    const removeFromCart = (product) => {
        setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.product.id === product.id);
        if (existingItem.quantity > 1) {
            return prevItems.map(item =>
            item.product.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
            );
        } else {
            return prevItems.filter(item => item.product.id !== product.id);
        }
        });
    };
    
    return (
        <div className="product-page">
            <Header />
            <table>
                <tr>
                <td><ProductList addToCart={addToCart} /></td>
                <td style={{verticalAlign:'top'}}>
                    <p className='cart-title'>Shopping Cart</p>
                    <Cart cartItems={cartItems} removeFromCart={removeFromCart} /></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
}

export default ProductPage;