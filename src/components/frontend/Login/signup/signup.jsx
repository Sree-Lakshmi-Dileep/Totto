import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    dob: ''
  });

  const navigate = useNavigate(); // ✅ Hook to navigate after signup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step === 2 && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', formData);

    
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h2 className='signhead'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <label className='s_mail'>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            /> <br />
            <button type="button" className='next' onClick={nextStep}>Next</button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="sign2">
              <label className='s_pass'>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              /> <br /><br />
              <label className='s_pass'>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button type="button" className='next2' onClick={nextStep}>Next</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <label className='sign3'>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            /> <br />
            <button type="submit" className='sub3'>Sign Up</button>
          </>
        )}
      </form>
    </div>
  );
}

export default Signup;
