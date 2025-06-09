import React, { useState } from 'react';
import './AppointmentConfirmation.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';  // Added import for Link

export default function AppointmentConfirmation() {

    const { state } = useLocation();
    const { firstName, serviceType, date, time } = state || {};

  return (
    <div className="confirm-page">
      <div className="confirm-card">
        <h1>Thank you{firstName ? `, ${firstName}` : ''}!</h1>
        <p>Your appointment has been booked successfully.</p>

        <div className="confirm-details">
          <p><strong>Service:</strong> {serviceType}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
        </div>

        <div className="confirm-action">
          <Link to="/" className="btn-back">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}