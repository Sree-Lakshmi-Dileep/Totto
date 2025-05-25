import React, { useState } from 'react';
import './forgotpass.css'; // Create this CSS file for styling
import { useNavigate } from 'react-router-dom';

function ForgotPass() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (
      step === 2 &&
      formData.newPassword !== formData.confirmNewPassword
    ) {
      alert("Passwords don't match!");
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset Data:', formData);

    
    navigate('/login');
  };

  return (
    <div className="forgot-container">
      <h2 className='forgot-head'>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <label className='forgot-label'>Enter your email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            /><br />
            <button type="button" className="next-btn" onClick={nextStep}>Next</button>
          </>
        )}

        {step === 2 && (
          <>
            <label className='forgot-label'>New Password:</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            /><br /><br />
            <label className='forgot-label'>Confirm New Password:</label>
            <input
              type="password"
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              required
            />
            <br />
            <button type="button" className="next-btn" onClick={nextStep}>Next</button>
          </>
        )}

        {step === 3 && (
          <>
            <p>Password has been reset successfully!</p>
            <button type="submit" className="submit-btn">Go to Login</button>
          </>
        )}
      </form>
    </div>
  );
}

export default ForgotPass;
