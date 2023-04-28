import React from 'react'
import '../Pages/Collection.css'
import { Link } from 'react-router-dom'
const Collection = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <Link to='/order-online' className='card'>
                    <div className='imgc'></div>
                    <h2 className='od'>Order Online</h2>
                    <p className='p'>Stay home and order to your doorstep</p>
                </Link>
                <Link to='/dining' className='card'>
                    <div className='imgc1'></div>
                    <h2 className='od'>Dining</h2>
                    <p className='p'>View the city's favourite dining veneus</p>
                </Link>
                <Link to='/night-life' className='card'>
                    <div className='imgc2'></div>
                    <h2 className='od'>Night life and clubs</h2>
                    <p className='p'>Explore the city's top nightlife outlets</p>
                </Link>
            </div>

            <div id='collection'>
                <h1 id='col1'>Collections</h1>
                <p className='col2'>Explore curated lists of top restaurants, cafes, pubs, and bars in Bihar & Jharkhand, based on trends <Link to="/all-collection" id='all-cat'>All collections in Bihar & Jharkhand</Link> <i class="fa fa-arrow-right" aria-hidden="true"></i></p>
            </div>
            
            <div style={{ display: 'flex' }}>
                <Link to='/' className='card'>
                    <div className='imgcol1'></div>
                </Link>
                <Link to='/' className='card'>
                    <div className='imgcol1'></div>
                   
                </Link>
                <Link to='/' className='card'>
                    <div className='imgcol1'></div>
                </Link>
            </div>
        </>
    )
}

export default Collection
