import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const teamMembers = [
    {
        name: 'MUGUME ANDREW ROLAND',
        number: '1800722830',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnox7mebqE524yB1wzrOjMOfMiWw39Awa4bg&s',
    },
    {
        name: 'ARONDA DARLIN TASHOBYA',
        number: '2300706502',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnox7mebqE524yB1wzrOjMOfMiWw39Awa4bg&s',
    },
    {
        name: 'SSEKAMALIRA DAUDA',
        number: '2300717457',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnox7mebqE524yB1wzrOjMOfMiWw39Awa4bg&s',
    },
    {
        name: 'WAFULA DAGLUS MAIGA',
        number: '2300718409',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnox7mebqE524yB1wzrOjMOfMiWw39Awa4bg&s',
    },
    {
      name: 'MUTYABA RODGERS',
      number: '2100711830',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnox7mebqE524yB1wzrOjMOfMiWw39Awa4bg&s',
    },
    {
      name: 'NASASIRA TIMOTHY  ',
      number: '1800722830',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnox7mebqE524yB1wzrOjMOfMiWw39Awa4bg&s',
    },
    {
      name: 'NAMULI EVELYN',
      number: '1100705667',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnox7mebqE524yB1wzrOjMOfMiWw39Awa4bg&s',
    },
];

const flexed = {
    display:"flex",
    justifyContent:"center",
    gap: 10,
    padding: 15
}
function About() {
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
                <h1>About Us</h1>
                <div className="mission-statement">
                    <h2>Mission Statement</h2>
                    <p>
                        Our mission at SIMS is to create sustainable infrastructure solutions that improve the quality 
                        of life and promote environmental stewardship. We are committed to innovation, excellence, and 
                        integrity in everything we do.
                    </p>
                </div>
                <div className="history">
                    <h2>Our History</h2>
                    <p>
                        Founded in 2024, SIMS has quickly become a leader in sustainable infrastructure management. 
                        Our journey began with a small team of passionate BIST students and environmentalists who shared 
                        a vision of a greener future.
                    </p>
                </div>
                <div className="team">
                    <h2>Our Team</h2>
                    <div className="team-members">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-member">
                                <img src={member.imageUrl} alt={member.name} />
                                <h3>{member.name}</h3>
                                <p>{member.number}</p>
                            </div>
                        ))}
                    </div>
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

export default About;
