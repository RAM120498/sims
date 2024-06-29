import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    const handleSearch = () => {
        // Implement search functionality here
        alert('Search functionality coming soon!');
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
                        <h1>Welcome to SIMS</h1>
                        <h2>Sustainable Infrastructure Management System</h2>
                        <div className="search-container">
                            <input type="text" placeholder="Search the website..." />
                            <button onClick={handleSearch}>Search</button>
                        </div>
                        <div className="overview">
                            <h2>About SIMS</h2>
                            <p>
                                SIMS is a comprehensive platform designed to monitor, analyze, and manage infrastructure projects to ensure 
                                sustainability and efficiency. Our goal is to provide tools and insights that help in building and maintaining 
                                infrastructure that is not only efficient but also sustainable for future generations.
                            </p>
                            <p>
                                Explore our latest blogs, learn more about our mission, or get in touch with us for any queries or support.
                            </p>
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

export default Home;
