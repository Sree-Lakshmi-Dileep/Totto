import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [inputValue, setInputValue] = useState('');
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const priceRanges = [
    'Under ₹250',
    '₹250 - ₹500',
    '₹500 - ₹750',
    '₹750 - ₹1000',
    'Above ₹1000'
  ];

  const handleSearch = () => {
    navigate(`/toys?search=${encodeURIComponent(inputValue)}`);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handlePriceSelect = (price) => {
    navigate(`/toys?price=${encodeURIComponent(price)}`);
    setShowPriceDropdown(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowPriceDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
              placeholder='What are you looking for...'
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={onKeyDown}
            />
            <button onClick={handleSearch} className='s_icon'>Search</button>

            
            
          </div>

          <div className="nav-links">
            <Link to="/home"><button className="button">HOME</button></Link>
            <Link to="/about"><button className="button">ABOUT US</button></Link>
            <Link to="/toys"><button className="button">TOYS</button></Link>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="icon-container">
<div className="favdiv">
  <Link to="/favourites">
    <img
      src="https://cdn-icons-png.flaticon.com/512/4340/4340223.png"
      className="favour"
      alt="Favourites"
    />
  </Link>
</div>


  <div className='cartdiv'>
    <Link to="/cart">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
        className="cart"
        alt="Cart"
      />
    </Link>
  </div>
</div>

        
        <div className="price-filter" ref={dropdownRef}>
              <button className="price-btn" onClick={() => setShowPriceDropdown(!showPriceDropdown)}>
                Search by Price
              </button>
              {showPriceDropdown && (
                <ul className="price-dropdown">
                  {priceRanges.map((price, index) => (
                    <li key={index} onClick={() => handlePriceSelect(price)} className="price-item">
                      {price}
                    </li>
                  ))}
                </ul>
              )}
            </div>
        <div className='login'>
          <Link to="/login"><button className="b_login">Login</button></Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
