import React, { useState } from 'react';
import './otp.css';

function Otp() {
    const [email, setEmail] = useState('');
    const [resetMethod, setResetMethod] = useState('email-otp');
    const [otp, setOtp] = useState('');
    const [otpVisible, setOtpVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    const handleGetOTP = (e) => {
        if (e) {
            e.preventDefault();
        }
        // Your logic to get OTP here
        console.log("Get OTP logic goes here");
    };

    return (
        <>
            <div className="login-page ">
                <div className="login-form">
                    <h2>OTP Login</h2>
                    <form>
                        {resetMethod === 'email-otp' && (
                            <>
                                <div className="form-group">
                                    <label htmlFor="email" className="label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="input"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="button"
                                        className="continue-btn"
                                        onClick={() => {
                                            handleGetOTP();
                                            setOtpVisible(true); // Set state to show OTP input field
                                        }}
                                    >
                                        Get OTP
                                    </button>
                                </div>
                                {otpVisible && ( // Conditionally render OTP input field
                                    <div className="form-group">
                                        <label htmlFor="otp" className="label">OTP</label>
                                        <input
                                            type="text"
                                            id="otp"
                                            name="otp"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            className="input"
                                            required
                                        />
                                    </div>
                                )}
                            </>
                        )}
                    </form>
                    <a href='/homepage'>
                        <button type="login" className='continue-btn'>Login</button></a><br /><br />
                    <div className="separator">
                        <span>Or</span>
                        <hr />
                    </div>
                    <div className="footer">
                        <a href="/login">
                            <button type="otp" className='continue-btn'>Login With Password</button></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Otp;