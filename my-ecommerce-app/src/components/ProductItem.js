import React, { useState } from 'react';
import product from '../data/products';

const ProductItem = ({ product, addToCart }) => {

    const [showDescription, setShowDescription] = useState(false);

    // State and other logic here
    
    return (
    <div className="product-item" onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
        <img className='product-img' src={product.image} alt={product.name} />
        <p className='product-name'>{product.name}</p>
        <p className='product-price'>Price: ${product.price}</p>
        <button className="product-button" onClick={() => addToCart(product)}>Add to Cart</button>
        {showDescription && <p className='product-description'>{product.description}</p>}
    </div>
    );
    };
    
    export default ProductItem;