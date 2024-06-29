import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const posts = [
    {
        title: 'The Importance of Sustainable Infrastructure',
        date: 'June 15, 2024',
        summary: 'Discover why sustainable infrastructure is crucial for the future of our cities and the planet.',
        content: 'Full content of the blog post goes here...',
        url: 'https://a.com'
    },
    {
        title: 'How SIMS is Transforming Infrastructure Management',
        date: 'June 20, 2024',
        summary: 'Learn how SIMS is using technology to revolutionize the management of infrastructure projects.',
        content: 'Full content of the blog post goes here...',
        url: 'https://x.com'
    },
    {
        title: 'Top 5 Trends in Sustainable Development',
        date: 'June 25, 2024',
        summary: 'Stay ahead with the latest trends in sustainable development and infrastructure.',
        content: 'Full content of the blog post goes here...',
        url: 'https://ramandmore.com'
    }
];

function Blog() {
    //   const flexed = {
    //     display:"flex",
    //     alignItems:"center",
    //     gap: 10
    // }
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
            <div className='parent'>
              <div className='notifications'>
                  <h2>Our Blog Posts</h2>
                  <div className='not'>
    
                          <div className='child'>
                                {posts.map((post, index) => (
                                <div key={index} className="blog-post">
                                    <h2>{post.title}</h2>
                                    <p><em>{post.date}</em></p>
                                    <p>{post.summary}</p>
                                    <Link to={post.url} className="read-more">Read more...</Link>
                                </div>
                            ))}
                          </div>
                  </div>
              </div>
            </div>
            <div style={flexed} className='links'>
                <Link to={"/terms-and-conditions"}>Terms & conditons</Link>
                <Link to={"/privacy-policy"}>Privacy Policy</Link>
                <Link to={"/faqs"}>FAQs</Link>
            </div>
        </div>
      )
    }
export default Blog;
