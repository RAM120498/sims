import React, { useState } from 'react';
import './Checkout.css';

function Checkout() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle checkout form submission logic
        console.log('Checkout form data submitted:', formData);
    };

    return (
        <div className='body'>
            <div className="container">
                <h1>Checkout</h1>
                <div className="checkout-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                        <label htmlFor="address">Address:</label>
                        <input 
                            type="text" 
                            id="address" 
                            name="address" 
                            value={formData.address} 
                            onChange={handleChange} 
                            required 
                        />
                        <label htmlFor="cardNumber">Card Number:</label>
                        <input 
                            type="text" 
                            id="cardNumber" 
                            name="cardNumber" 
                            value={formData.cardNumber} 
                            onChange={handleChange} 
                            required 
                        />
                        <label htmlFor="expiryDate">Expiry Date:</label>
                        <input 
                            type="text" 
                            id="expiryDate" 
                            name="expiryDate" 
                            value={formData.expiryDate} 
                            onChange={handleChange} 
                            required 
                        />
                        <label htmlFor="cvv">CVV:</label>
                        <input 
                            type="text" 
                            id="cvv" 
                            name="cvv" 
                            value={formData.cvv} 
                            onChange={handleChange} 
                            required 
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Checkout;