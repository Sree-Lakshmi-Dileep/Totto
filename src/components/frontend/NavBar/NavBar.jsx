import React from 'react'
import './NavBar.css'

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
              <button className='button'>HOME</button>
             <button className='button'>ABOUT US</button>
              <button className='button'>TOYS</button>
          </div>
        </div>
      </div>
      <div className="right"></div>
      
    </div>
  )
}

export default NavBar
