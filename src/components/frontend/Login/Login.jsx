import React from 'react'
import './Login.css'

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
        </form>

        <p className="sign">Don't have an account?Sign up for Totto</p>

      </div>
        
      
    </div>

  )
}

export default Login
