import React from 'react';
import ProductItem from './ProductItem';
import products from '../data/products';
import './style.css'



function ProductList({ addToCart }) {
    return (
        <div className='ProductList'>
            {products.map(product => (
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default ProductList