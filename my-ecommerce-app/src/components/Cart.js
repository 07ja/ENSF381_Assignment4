import React from 'react';
import CartItem from './CartItem';
import './style.css';
const Cart = ({ cartItems, removeFromCart}) => {
    console.log('Cart items in Cart component:', cartItems);

    const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

    return (
    <div className="cart">
        {cartItems.map(item => (
            <CartItem key={item.product.id} item={item} removeFromCart={removeFromCart} />
        ))}

        <div className='cart-total'>Total (in cart): ${totalPrice.toFixed(2)}</div>
    </div>
    );
};
export default Cart;