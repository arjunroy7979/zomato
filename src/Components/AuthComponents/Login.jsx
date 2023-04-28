import React from 'react'
import '../AuthComponents/Login.css'
import { Link } from 'react-router-dom'

const Login = ({toogle}) => {
    return (
        <>
            <div className="container">
                <div id='container1'>
                    <div className='main'>
                        <h4 id='text-1'>Login <Link to='' onClick={toogle} class="fa fa-times" aria-hidden="true"></Link></h4>
                        <div>
                            <select id='select'>
                                <option value="india">+91</option>
                                <option value="afganistan">+93</option>
                                <option value="albania">+355</option>
                                <option value="usa">+33</option>
                                <option value="austrlia">+43</option>
                            </select>
                            <input type="text" id='input' placeholder='Enter Your Mobile Number' /><br />
                            <button id='btn'>Send One Time Password</button>
                            <p>_________________________________or________________________________</p>
                            <br />
                            <button id='btn1' ><i class="fa fa-envelope-o" aria-hidden="true"></i> Continue with Email</button>
                            <button id='btn2' > <i class="fa fa-google" aria-hidden="true"></i> Continue with Google</button>
                            <h4 id='h4'>New to Zomato? <Link to='/signup' id='signup-acc'> Create account</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
