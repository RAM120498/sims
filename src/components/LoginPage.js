import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import icon from './images/icon.png'

function LoginPage() {
    const [uname, setUname] = useState("");
    const [pword, setPword] = useState("");
    const [errors, setErrors] = useState(false);
    const err_msg = "Please enter both username and password";
    
    const handleLogin = (e) => {
        e.preventDefault();
        if(uname.length === 0 || pword.length === 0){
            setErrors(true);
            return
        }
        setErrors(false);
    }
    useEffect(() => {
        console.log(uname);
        console.log(pword);
    })

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
        
            <div className='LoginRegisterForms'>
                <form onSubmit={handleLogin}>
                    <img src={icon} alt='' />
                    <h1>Sign into SIMS</h1>
                    {errors && <p style={{color:"red"}}>{err_msg}</p>}
                    <div>
                        <label>Email or Username</label>
                        <input type='text' placeholder='Username' onChange={(e)=>setUname(e.target.value)} name='uname' />
                        <label>Password</label>
                        <input type='password' placeholder='Password' onChange={(e)=>setPword(e.target.value)} name='pword' />
                        <button>login</button>
                        <div className='FormInputs'>
                            <Link style={{color:"red"}}>Forgot your password ?</Link>
                        </div>
                    </div>
                    <div style={flexed} className='div-new'>
                        <p>New to SIMS</p>
                        <Link to={'/register'}>Create an Account</Link>
                    </div>
                    <hr />
                    <div style={flexed} className='links'>
                        <Link to={"/terms-and-conditions"}>Terms & conditons</Link>
                        <Link to={"/privacy-policy"}>Privacy Policy</Link>
                        <Link to={"/faqs"}>FAQs</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage