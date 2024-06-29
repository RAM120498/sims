//import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description of Product 1',
        price: 29.99,
        imageUrl: 'https://via.placeholder.com/250',
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description of Product 2',
        price: 39.99,
        imageUrl: 'https://via.placeholder.com/250',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description of Product 3',
        price: 49.99,
        imageUrl: 'https://via.placeholder.com/250',
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Description of Product 4',
        price: 59.99,
        imageUrl: 'https://via.placeholder.com/250',
    },
];
function Products({ addToCart }) {
    return (
        <div className='body'>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/blog">Blogs</Link>
                <Link to="/products">Our Products</Link>
                <Link to="/register" className="signup">Sign Up</Link>
            </div>
            <div className="container">
                <h1>Our Products</h1>
                <div className="product-list">
                    {products.map(product => (
                        <div key={product.id} className="product-item">
                            <img src={product.imageUrl} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p className="price">${product.price}</p>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Products;