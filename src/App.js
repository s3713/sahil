import React from 'react';
import Login from './Login/login';
import Otp from './OtpLogin/otp';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Homepage from './HomePage/homepage';
// import NavBar from './NavBar/navbar';

function App() {
  return (
    <>
    <Router>
         <Routes>
          <Route path = "/" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path = "/login" element={<Login />} />
          <Route path = "/homepage" element={<Homepage />} />
        </Routes> 
      
    </Router>
    </>
  );
}

export default App;
