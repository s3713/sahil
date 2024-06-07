import React, { useState } from 'react';
import './login.css';
import Footer from '../Footer/footer';

function Login() {
  const [email, setEmail] = useState('johnsondoe@nomail.com');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <div className="login-page ">
        <div className="login-form">
          <h4>WELCOME BACK</h4>
          <h2>Log In to your Account</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmailChange} />
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
            <div className="remember-forgot">
              <label>
                <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
          </form>
          <a href="/homepage">
            <button type="homepage" className="continue-btn">CONTINUE</button></a>
          <br /><br />
          <div className="separator">
            <span>Or</span>
            <hr />
          </div>
          <div className="footer">
            <a href="/otp">
              <button type="otp" className='continue-btn'>LOGIN WITH OTP</button></a><br /><br />
            <span>New User?</span>
            <a href="#" className="sign-up-link">SIGN UP HERE</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;

