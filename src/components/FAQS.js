import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQS.css';

function FAQS() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };
    const flexed = {
        display:"flex",
        justifyContent:"center",
        gap: 10,
        padding: 15
    }

    return (
        <div className='body'>
            <div className="container">
                <h1>Frequently Asked Questions</h1>
                <div className="faq-section">
                    <div className="faq-question" onClick={() => toggleQuestion(0)}>What is SIMS?</div>
                    <div className={`faq-answer ${openQuestion === 0 ? 'show' : ''}`}>
                        SIMS stands for Sustainable Infrastructure Management System. It is a platform designed to monitor, analyze, and manage infrastructure projects to ensure sustainability and efficiency.
                    </div>
                </div>
                <div className="faq-section">
                    <div className="faq-question" onClick={() => toggleQuestion(1)}>How do I create an account?</div>
                    <div className={`faq-answer ${openQuestion === 1 ? 'show' : ''}`}>
                        To create an account, click on the "Sign Up" button on the homepage and fill in the required details. You will receive a confirmation email to verify your account.
                    </div>
                </div>
                <div className="faq-section">
                    <div className="faq-question" onClick={() => toggleQuestion(2)}>How can I reset my password?</div>
                    <div className={`faq-answer ${openQuestion === 2 ? 'show' : ''}`}>
                        If you have forgotten your password, click on the "Forgot Password" link on the login page. Enter your email address, and you will receive instructions to reset your password.
                    </div>
                </div>
                <div className="faq-section">
                    <div className="faq-question" onClick={() => toggleQuestion(3)}>How do I report an issue with the system?</div>
                    <div className={`faq-answer ${openQuestion === 3 ? 'show' : ''}`}>
                        If you encounter any issues with the system, please contact our support team at support@sims.com or call +1 234 567 890. Provide detailed information about the issue so we can assist you promptly.
                    </div>
                </div>
                <div className="faq-section">
                    <div className="faq-question" onClick={() => toggleQuestion(4)}>What data does SIMS collect?</div>
                    <div className={`faq-answer ${openQuestion === 4 ? 'show' : ''}`}>
                        SIMS collects data from various sources, including sensor data, user inputs, and system logs, to monitor and manage infrastructure projects. We ensure the privacy and security of all collected data.
                    </div>
                </div>
                <div className="faq-section">
                    <div className="faq-question" onClick={() => toggleQuestion(5)}>How can I update my profile information?</div>
                    <div className={`faq-answer ${openQuestion === 5 ? 'show' : ''}`}>
                        To update your profile information, log in to your account, go to the "Profile" section, and make the necessary changes. Remember to save your updates before exiting.
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

export default FAQS;
