import React from 'react'
import '../AuthComponents/Signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <>
            <div className="container">
                <div id='container1'>
                    <div className='main'>
                        <h5 id='text-1'>Signup <Link to='/' class="fa fa-times" aria-hidden="true"></Link></h5>
                        <input type="text" id='fname' placeholder='Full Name' /><br />
                        <input type="text" id='email' placeholder='Email' /><br />
                        <input type="checkbox" id='check' /> <span id='agree'>I agree to Zomato's <span><Link to='/terms-of-services' id='ts'>Terms of Service</Link></span>,<span> <Link to='/privacy-policy' id='ts'>Privacy Policy</Link></span> and <span><Link to='/polices' id='ts'>Content Policies</Link></span></span><br />
                        <button id='cre-acc'>Create account</button>
                        <p id='or'>_______________________________or_________________________________</p>
                        <button id='btn2' > <i class="fa fa-google" aria-hidden="true"></i> Continue with Google</button><br />
                        <h4 id='h4'>Already have an account? <Link to='/login' id='signup-acc'> Login</Link></h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
