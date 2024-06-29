import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import icon from './images/icon.png'

function RegisterPage() {
  const [errors] = useState(false);
    const err_msg = "please supply all fields";
    
    const handleRegister = (e) => {
        e.preventDefault();
    }
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
                <Link to="/register" className="signup">Sign Up</Link>
            </div>

          <div className='LoginRegisterForms'>
              <form onSubmit={handleRegister}>
                  <img src={icon} alt=''/>
                  <h1>Register Here</h1>
                  {errors && <p style={{color:"red"}}>{err_msg}</p>}
                  <div className='grouped'>
                    <input type='text' placeholder='Firstname' name='fname' />
                    <input type='text' placeholder='Lastname' name='lname' />
                  </div>
                  <input type='text' placeholder='Username' name='uname' />
                  <input type='email' placeholder='Email' name='email' />
                  <div className='grouped'>
                    <select name='gender'>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                    </select>
                    <input type='text' placeholder='Nationality' name='nationality' />
                  </div>
                  <input type='text' placeholder='ID number' name='student_no' />
                  <input type='file' name='pp' accept='image/*'/>
                  <div className='grouped'>
                    <input type='password' placeholder='Enter password' name='pword1' />
                    <input type='password' placeholder='Verify password' name='pword2' />
                  </div>
                  <button>Register</button>
                  <div style={flexed} className='div-new'>
                        <p>Already have an account?</p>
                        <Link to={'/login'}>Login Now</Link>
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

export default RegisterPage