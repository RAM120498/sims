import React from 'react';
import { Link } from 'react-router-dom';
import './PP.css';

function PP() {

    const flexed = {
        display:"flex",
        justifyContent:"center",
        gap: 10,
        padding: 15
    }
    return (
        <div className='body'>
            <div className="container">
                <h1>Privacy Policy</h1>
                    <p>Effective date: June 28, 2024</p>

                <h2>1. Introduction</h2>
                    <p>Welcome to SIMS. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at support@sims.com.</p>

                <h2>2. Information We Collect</h2>
                    <p>We collect personal information that you voluntarily provide to us when registering at the website, expressing an interest in obtaining information about us or our products and services, when participating in activities on the website (such as posting messages in our online forums or entering competitions, contests or giveaways) or otherwise contacting us.</p>

                <h2>3. How We Use Your Information</h2>
                    <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>

                <h2>4. Will Your Information Be Shared With Anyone?</h2>
                    <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>

                <h2>5. How Long Do We Keep Your Information?</h2>
                    <p>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</p>

                <h2>6. How Do We Keep Your Information Safe?</h2>
                    <p>We aim to protect your personal information through a system of organizational and technical security measures.</p>

                <h2>7. Your Privacy Rights</h2>
                    <p>In some regions (like the European Economic Area), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>

                <h2>8. Updates to This Policy</h2>
                    <p>We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons.</p>

                <h2>9. Contact Us</h2>
                    <p>If you have questions or comments about this policy, you may contact us at: support@sims.com or call +256 765 049 196.</p>
            </div>

            <div style={flexed} className='links'>
                <Link to={"/terms-and-conditions"}>Terms & conditons</Link>
                <Link to={"/privacy-policy"}>Privacy Policy</Link>
                <Link to={"/faqs"}>FAQs</Link>
            </div>
        </div>
    );
}

export default PP;
