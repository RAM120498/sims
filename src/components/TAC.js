import "./TAC.css"
import React from 'react'
import { Link } from "react-router-dom"

function TAC() {
    const flexed = {
        display:"flex",
        justifyContent:"center",
        gap: 10,
        padding: 15
    }
  return (
    <div className="body">
         <div class="container">
            <h1>Terms and Conditions</h1>
                <h2>Introduction</h2>
                    <p>Welcome to the Sustainable Infrastructure Management System (SIMS). 
                        These Terms and Conditions outline the rules and regulations for the use of our system. 
                        By accessing this system, you accept these terms and conditions in full. 
                        If you do not agree with these terms and conditions, please do not use the SIMS.</p>

            <h2>1. Definitions</h2>
                <ul>
                    <li><strong>SIMS</strong>: Sustainable Infrastructure Management System.</li>
                    <li><strong>User</strong>: Any individual or entity using the SIMS.</li>
                    <li><strong>Data</strong>: All information collected, processed, and stored by the SIMS.</li>
                </ul>

            <h2>2. User Responsibilities</h2>
                <h3>2.1 Account Security</h3>
                    <ul>
                        <li>Users are responsible for maintaining the confidentiality of their account information and passwords.</li>
                        <li>Users must notify the SIMS administrators immediately of any unauthorized use of their account.</li>
                    </ul>
                <h3>2.2 Acceptable Use</h3>
                    <ul>
                        <li>Users agree to use the SIMS only for lawful purposes.</li>
                        <li>Users must not use the SIMS in any way that may cause damage to the system or impair the availability or accessibility of the SIMS.</li>
                        <li>Users must not use the SIMS to copy, store, host, transmit, send, use, publish, or distribute any material that consists of (or is linked to) any spyware, computer virus, or other malicious software.</li>
                    </ul>

            <h2>3. Data Usage and Privacy</h2>
                <h3>3.1 Data Collection</h3>
                    <p>The SIMS collects data from various sources to monitor, analyze, and manage infrastructure projects. Data collected includes, but is not limited to, sensor data, user inputs, and system logs.</p>
                <h3>3.2 Data Privacy</h3>
                    <p>The SIMS is committed to ensuring the privacy and security of user data. User data will not be shared with third parties without user consent, except as required by law.</p>
                <h3>3.3 Data Usage</h3>
                    <p>Data collected by the SIMS will be used solely for the purpose of monitoring and managing infrastructure projects. Users agree to the use of their data for system improvements, research, and analysis.</p>

             <h2>4. Intellectual Property</h2>
                <h3>4.1 Ownership</h3>
                    <p>All content and materials available on the SIMS, including but not limited to text, graphics, logos, and software, are the intellectual property of the SIMS and are protected by applicable copyright and trademark laws.</p>
                <h3>4.2 Limited License</h3>
                    <p>Users are granted a limited license to access and use the SIMS for personal or organizational use. Users may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the SIMS without prior written consent.</p>

            <h2>5. Limitation of Liability</h2>
                <h3>5.1 Disclaimer</h3>
                    <p>The SIMS is provided "as is" without any warranties, express or implied. The SIMS makes no representations or warranties in relation to the accuracy or completeness of the information provided on the system.</p>
                <h3>5.2 Limitation of Liability</h3>
                    <p>The SIMS will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use or inability to use the system.</p>

            <h2>6. Termination</h2>
                <h3>6.1 Termination of Access</h3>
                    <p>The SIMS reserves the right to terminate or suspend access to the system immediately, without prior notice or liability, for any reason, including breach of these Terms and Conditions.</p>
                <h3>6.2 Effect of Termination</h3>
                    <p>Upon termination, the user's right to use the SIMS will cease immediately. All provisions of these Terms and Conditions which by their nature should survive termination shall survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>

            <h2>7. Changes to Terms and Conditions</h2>
                <p>The SIMS reserves the right to modify these Terms and Conditions at any time. Users will be notified of any changes through the system. Continued use of the SIMS after any such changes shall constitute acceptance of the new Terms and Conditions.</p>

            <h2>8. Governing Law</h2>
                <p>These Terms and Conditions shall be governed and construed in accordance with the laws of Uganda, without regard to its conflict of law provisions. Any disputes arising out of or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of Uganda.</p>

            <h2>9. Contact Information</h2>
                <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
            
            <div class="contact-info">
                <ul>
                    <li><strong>Email</strong>: support@sims.com</li>
                    <li><strong>Phone</strong>: +256 765 049 196</li>
                    <li><strong>Address</strong>: Makerere University, CoCIS, Block B</li>
                </ul>
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

export default TAC;