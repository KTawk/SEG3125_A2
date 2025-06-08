import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import AboutUs2 from "./AboutUs2.js";
import AppointmentPage from './AppointmentPage.js';
import AppointmentConfirmation from './AppointmentConfirmation.js';
import AboutDesigners from './aboutDesigners.js';
import './App.css';

function App() {
  return (
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<AboutUs2 />} />
          <Route path="/appointment-page" element={<AppointmentPage />} />
           <Route path="/appointment-confirmation" element={<AppointmentConfirmation />} />
           <Route path="/about-designers" element={<AboutDesigners />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;