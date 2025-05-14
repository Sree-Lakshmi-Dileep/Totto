import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
      <div className="left">
        <div className="logo">
          <img src="/logo.png" className='logos' alt="logo" />
        </div>
        <div className="leftb">
          <div className="search">
            <input type="text" placeholder='what are rou looking for.....' />
         </div>
      <div className="nav-links">
         <div className='item'>
           <span className='icon'> <img className='imgicon' src="https://cdn-icons-png.flaticon.com/512/4383/4383084.png" alt="Skincare Icon" />   
          </span>
          <span>skincare</span>
         </div>

         <div className='item'>
          <span className='icon'>
            <img className='imgicon' src="https://cdn-icons-png.flaticon.com/512/10084/10084943.png" alt="" /> 
         </span>
         <span>makeup</span>
         </div>

         <div className="item">
          <span className='icon'>
            <img className='imgicon' src="https://cdn-icons-png.flaticon.com/512/3299/3299031.png" alt="" />
          </span>
          <span>haircare</span>
         </div>

         <div className="item">
          <span className='icon'>
            <img className='imgicon' src="https://cdn-icons-png.flaticon.com/512/2047/2047460.png" alt="" />
          </span>
          <span>perfume</span>
         </div>
       </div>
        </div>
        
      </div>
      <div className="right"></div>
      
    </div>
  )
}

export default NavBar
