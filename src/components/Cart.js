import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className='body'>
            <div className="container">
                <h1>Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.imageUrl} alt={item.name} />
                            <div>
                                <h2>{item.name}</h2>
                                <p className="price">${item.price}</p>
                            </div>
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </div>
                    ))
                )}
                <div className="total">Total: ${total.toFixed(2)}</div>
                {cart.length > 0 && <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>}
            </div>
        </div>
    );
}

export default Cart;
