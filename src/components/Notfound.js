import React from 'react'
import icon from './images/error.svg'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className='bdy'> 

        <div className="not-found">
              <img className='error' src={icon} alt='error.svg'/>
              <img className='error' src={icon} alt='error.svg'/>
              <img className='error' src={icon} alt='error.svg'/>
              <h1> Oops: Error 404!</h1>
                <h2>Page not found</h2>
                    <p><br></br>
                      If you came upon this page by mistake, 
                      try checking the URL in your web browser.
                    </p>
                    <Link to={"/"}>Return Home.</Link>
        </div>
    </div>
  )
}
export default Notfound