import React from "react";
import "./AboutUs2.css";
import bikeImage from './bike-image.png'; 
import repairImage from './repair-image.jpg';
import bikeTerrainImage from './bike-on-terrain.jpg'; 
import cycleImage from './cycle-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faCog, faBicycle } from '@fortawesome/free-solid-svg-icons';  

export default function AboutUs2() {
  return (
    <div className="aboutus-container">
      <section className="hero">
        <div className="hero-content">
          <img src={bikeImage} alt="Bike" className="hero-image" />
          <div className="hero-text">
            <h1>Ride with Confidence</h1>
            <p>
              Comprehensive tune-ups, expert repairs<br/>
              and rapid turnaround to keep you rolling.
            </p>
            <button className="orange-button">Book My Tune-Up</button>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Our Facilities & Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <FontAwesomeIcon icon={faWrench} size="3x"/>
            <h3>Standard Tune-Up</h3>
            <p>A complete safety check, drivetrain lube, brake adjustment and gear indexing to keep your bike running smoothly.</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon={faCog} size="3x"/>
            <h3>Brake & Gear Service</h3>
            <p>Pad/pad replacement, cable/hose adjustment or hydraulic bleed, plus precise derailleur alignment.</p>
          </div>
          <div className="feature-card">
            <FontAwesomeIcon icon={faBicycle} size="3x"/>
            <h3>Flat Tire & Wheel Service</h3>
            <p>Puncture repair or tire swap, plus wheel trueing and spoke-tension tuning for a straight, reliable ride.</p>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="story-image">
          <img src={cycleImage} alt="Mechanic" />
        </div>
        <div className="story-text">
          <h2>A Humble Beginning</h2>
  <p>In this crisp close-up, Kairly’s hands tighten the rear derailleur<br/> on a road bike clamped to
  a makeshift stand as Suhas holds the<br/> wheel steady. Sunlight through the garage window
  highlights the<br/> worn tool bench and scuffed frame as they fine-tune each gear<br/> together.
    With only a borrowed kitchen workbench, a screwdriver,<br/> and weekend afternoons, they
    perfected smooth shifting on twenty<br/> friends’ bikes by summer’s end. That collaborative
    moment—one<br/> precise screw turn at a time—sparked what would become BikeFixers.
  </p>
        </div>
      </section>

      <div className="contact-form-container">
      <h2>Get in Touch</h2>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your Name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your Email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="6" placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>

      <footer className="footer">
        <div className="footer-boxes">
          <div className="footer-box">
            <h4>More about the designers</h4>
            <a href="/aboutDesigners.js">
            <p>Kairly and Suhas</p>
            </a>
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
    </div>
  );
} 
