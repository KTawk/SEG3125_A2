// src/AppointmentPage.jsx
import React, { useState } from 'react';
import './AppointmentPage.css';
import Navbar from './components/Navbar.js';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer.js';

export default function AppointmentPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    description: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  // Proceed with submission if valid
  console.log('Booking request:', form);
  navigate('/appointment-confirmation', {
   state: {
     firstName: form.firstName,
     lastName:  form.lastName,
     serviceType: form.serviceType,
     date: form.date,
     time: form.time
   }
 });

};

  return (
    <div className="appointment-page-wrapper">
      <Navbar />
      <div className="appointment-page">
      <h1>Book an Appointment</h1>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="field-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <label>Service Type</label>
          <select
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>-- choose one --</option>
            <option value="Tune-Up">Standard Tune-Up</option>
            <option value="Brake & Gear">Brake & Gear Service</option>
            <option value="Flat Tire">Flat Tire & Wheel Service</option>
          </select>
        </div>
        <div className="field-group">
          <label>Service Description</label>
          <textarea
            name="description"
            rows="4"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe any specific issues or requests"
          />
        </div>

        <div className="field-group-inline">
          <div>
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-cancel" onClick={() => window.history.back()}>
            Cancel
          </button>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </div>
      </form>
      </div>
      <Footer />
    </div>
  );
}
