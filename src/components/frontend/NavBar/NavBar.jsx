import React from 'react'

function NavBar() {
  return (
    <div className='navbar'>
      <div className="search">
        <input type="text" placeholder='search.....' />
      </div>
      <div className="nav-links">
<img src="https://cdn-icons-png.flaticon.com/512/4383/4383084.png" alt="Skincare Icon" />   
<span>skincare</span>
<img src="https://cdn-icons-png.flaticon.com/512/10084/10084943.png" alt="" /> 
<span>makeup</span>
<img src="https://cdn-icons-png.flaticon.com/512/3299/3299031.png" alt="" />
<span>haircare</span>
<img src="https://cdn-icons-png.flaticon.com/512/2047/2047460.png" alt="" />
<span>perfume</span>
      </div>
      
    </div>
  )
}

export default NavBar
