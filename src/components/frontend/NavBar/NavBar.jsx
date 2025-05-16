import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div className='navbar'>
      <div className="left">
        <div className="logo">
          <img src="/logo.png" className='logos' alt="logo" />
        </div>
        <div className="lefta">
          <div className="search">
            <input className='input' type="text" placeholder='what are rou looking for.....' />
         </div>
         <div className="nav-links">
             {/* <button className='button'>HOME</button>
             <button className='button'>ABOUT US</button>
              <button className='button'>TOYS</button>*/}
              <Link to="/">
        <button className="button">HOME</button>
      </Link>
      <Link to="/About">
        <button className="button">ABOUT US</button>
      </Link>
      <Link to="/toys">
        <button className="button">TOYS</button>
      </Link>
          </div>
        </div>
      </div>
      <div className="right"></div>
      
    </div>
  )
}

export default NavBar
