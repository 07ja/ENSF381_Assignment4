import React from 'react';
import './style.css';
const CartItem = ({ item, removeFromCart }) => {
    return (
        <div className="cart-item">
        <img className="item-image" src={item.product.image} alt={item.product.name} />
        <p>{item.product.name}</p>
        <p>Price: ${`${item.product.price}`}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${item.product.price * item.quantity.toFixed(2)}</p>
        <button onClick={() => removeFromCart(item.product)}>Remove</button>
        </div>
    );
};
export default CartItem;