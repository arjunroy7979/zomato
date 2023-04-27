import React from 'react'
import '../Pages/Home.css'
import Header from './Header'
import Collection from './Collection'

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div>
          <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" className='logo-zom' alt="logo" />
          <h1 id='h-text'>Discover the best food & drinks in Bihar & Jharkhand</h1>
          <div>
            <input type="text" id='search-bar' className='no-outline' />
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <Collection/>
    </>
  )
}

export default Home
