import React, { useState } from 'react'
import '../Pages/Header.css'
import { Link } from 'react-router-dom'
import Login from '../AuthComponents/Login';
import Signup from '../AuthComponents/Signup';
const Header = () => {
    let [logintoggle, setlogintoggle] = useState(false);
    let [signtoggle, setsigntoggle] = useState(false);


    let logintogglehandler = () => {
        setsigntoggle(false)
        if (logintoggle) {
            setlogintoggle(false)
        } else {
            setlogintoggle(true)
        }
    }

    let signtogglehandler = () => {
        setlogintoggle(false)
        if (signtoggle) {
            setsigntoggle(false)
        } else {
            setsigntoggle(true)
        }
    }
    return (
        <div>
            <header>
                <ul>
                    <li><Link to="/getapp" className='getapp fa fa-thumbs-o-up' > Get the App</Link></li>
                    <li><Link to="/inv-rel" className='header_a'>Investor Relations</Link></li>
                    <li><Link to="/add-res" className='header_a'>Add resturant</Link></li>
                    <li><Link to="" onClick={logintogglehandler} className='header_a'>Log in</Link></li>
                    <li><Link to="" onClick={signtogglehandler} className='header_a'>Sign up</Link></li>
                </ul>
            </header>
            <div>
                {
                    logintoggle ? <Login toogle={logintogglehandler} /> : null
                }
                {
                    signtoggle ? <Signup toogle1={signtogglehandler} /> : null
                }
            </div>
        </div>
    )
}

export default Header
