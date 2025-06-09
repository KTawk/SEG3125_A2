// src/aboutDesigners.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './aboutDesigners.css';

import bikeTerrainImage from './bike-on-terrain.jpg'; 

export default function AboutDesigners() {
  return (
    <>
      <Navbar />

      <main className="designers-page">
        <h1>Meet the Designers</h1>

        <div className="designer-cards">
          <div className="designer-card">
            <img src={bikeTerrainImage} alt="Kairly Tawk" />
            <h2>Kairly Tawk</h2>
            <p>Front-end specialist with a passion for pixel-perfect interfaces and accessibility. From color-contrast audits to responsive layouts, she ensures every user interaction feels intuitive and delightful. When she’s not crafting seamless UI in React, you’ll find her sketching wireframes or diving into the latest CSS Grid and ARIA best practices.</p>
          </div>

          <div className="designer-card">
            <img src={bikeTerrainImage} alt="Suhas Chimmapudi" />
            <h2>Suhas Chimmapudi</h2>
            <p>Computer Science student and back-end enthusiast, Suhas is passionate about building scalable, secure applications. He’s currently exploring Node.js, Express, and MongoDB to power robust APIs, and honing his skills in data structures and algorithms through open-source projects. When he’s not coding, he’s mentoring peers in study groups or competing in hackathons.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}