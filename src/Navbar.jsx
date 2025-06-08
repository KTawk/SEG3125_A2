// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs2.css'; // if you have custom styles

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">RIDEZ</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/book-appointment">Book Appointment</Link></li>
        <li><Link to="#contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}
