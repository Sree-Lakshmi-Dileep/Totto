import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    dob: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log('Signup Data:', formData);

    // Redirect to login
    navigate('/login');
  };

  return (
    <div className="scontainer1">
      <div className="scontainer2">
        <h2 className='signhead'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="sign_form">
            <input type="email"  name="email"  className='s_email'    placeholder='Email Address'
              value={formData.email}  onChange={handleChange}    required  />

            <input
              type="password"
              name="password"
              placeholder='Create Password'
              value={formData.password}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>


          <div className="sign_dob">
            <label className='sign3'>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              className='dob'
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className='sign_sub'>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
