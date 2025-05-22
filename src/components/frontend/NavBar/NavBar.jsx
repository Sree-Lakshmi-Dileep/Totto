import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to /toys with search query in URL params
    navigate(`/toys?search=${encodeURIComponent(inputValue)}`);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='navbar'>
      <div className="left">
        <div className="logo">
          <img src="/logo.png" className='logos' alt="logo" />
        </div>
        <div className="lefta">
          <div className="search">
            <input
              className='input'
              type="text"
              placeholder='what are you looking for.....'
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={onKeyDown}
            />
            <button onClick={handleSearch} className='s_icon'>Search</button>
          </div>
          <div className="nav-links">
            <Link to="/"><button className="button">HOME</button></Link>
            <Link to="/about"><button className="button">ABOUT US</button></Link>
            <Link to="/toys"><button className="button">TOYS</button></Link>
          </div>
        </div>
      </div>
      <div className="right">
  <div className="icon-container">
    <img
      src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
      className="cart"
      alt="Cart"
    />
    <span className="icon-label">Cart</span>
  </div>
  <div className="icon-container">
      <img
      src="https://cdn-icons-png.flaticon.com/512/1040/1040260.png"
      className="favour"
      alt="favourites"
    />
    <span className="icon-label">Favourites</span>
  </div>
  <div className="icon-container">
    <img
      src="https://cdn-icons-png.flaticon.com/512/13895/13895645.png"
      className="login"
      alt="login"
    />
    <span className="icon-label">Login</span>
    
 </div>
  
 
</div>

    </div>
  );
}

export default NavBar;
