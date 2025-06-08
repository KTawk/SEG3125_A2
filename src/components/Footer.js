// src/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../AboutUs2.css'; // if you have custom styles

export default function Navbar() {

  return (
    <footer className="footer">
        <div className="footer-boxes">
          <div className="footer-box">
            <h4>More about the designers</h4>
            <Link to="/about-designers"><p>Kairly and Suhas</p></Link>
          </div>
          <div className="footer-box">
            <h4>Call Us</h4>
            <p>666 - 880 - 33388</p>
          </div>
          <div className="footer-box">
            <h4>Location</h4>
            <p>145 Jackson Blvd, Ontario, F7G123</p>
          </div>
        </div>
        <p className="footer-bottom">© 2025 BikeFixers. All Rights Reserved.</p>
      </footer>
    
  );
}
