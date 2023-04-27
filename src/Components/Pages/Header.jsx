import React from 'react'
import '../Pages/Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <header>
                <ul>
                    <li><Link to="/getapp" className='getapp fa fa-thumbs-o-up' > Get the App</Link></li>
                    <li><Link to="/inv-rel" className='header_a'>Investor Relations</Link></li>
                    <li><Link to="/add-res" className='header_a'>Add resturant</Link></li>
                    <li><Link to="login" className='header_a'>Log in</Link></li>
                    <li><Link to="signup" className='header_a'>Sign up</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header
