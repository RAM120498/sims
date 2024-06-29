import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    const flexed = {
        display:"flex",
        justifyContent:"center",
        gap: 10,
        padding: 15
    }

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
                <h1>Contact Us</h1>
                <div className="contact-info">
                    <h2>Our Contact Information</h2>
                    <p>Phone: +256 765 049 196</p>
                    <p>Email: support@sims.com</p>
                    <p>Address: Makerere University, CoCIS, Block B</p>
                </div>
                <div className="contact-form">
                    <h2>Contact Form</h2>
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
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                        <label htmlFor="message">Message:</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="5" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            <div style={flexed} className='links'>
                        <Link to={"/terms-and-conditions"}>Terms & conditons</Link>
                        <Link to={"/privacy-policy"}>Privacy Policy</Link>
                        <Link to={"/faqs"}>FAQs</Link>
                    </div>
        </div>
    );
}

export default Contact;