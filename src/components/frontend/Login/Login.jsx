import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="div1">
      <div className="div2">
        
        

        <h2 className="l_head">Login</h2>
        <form>
          <div className="d_email">
            <label className="l_email">Email </label>
            <input type="email" className="i_email" />
          </div>
          <div className="d_pass">
            <label className="l_pass">Password  </label>
            <input type="password" className="i_pass" />
          </div>
          <button type="submit" className="submitbutton">
            Login
          </button>
          <div className="log_link">
            <Link to="/" className="skip-button">⏮️ Skip</Link>
           <Link to="/forgot-password">Forgot password?</Link>         </div>

        </form>

        <p className="sign">
          Don't have an account? <Link to="/signup">Sign up for Totto</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
