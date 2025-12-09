// Footer.js
import React from 'react';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Site Footer">
      <div className="footer-content">
        <div className="footer-section">
          <img 
            src="/logo-white.png" 
            alt="Little Lemon Logo" 
            className="footer-logo"
          />
        </div>

        <nav className="footer-section" aria-label="Navigation Links">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/" aria-label="Go to Home page">Home</Link></li>
            <li><Link to="/about" aria-label="Go to About page">About</Link></li>
            <li><Link to="/menu" aria-label="Go to Menu page">Menu</Link></li>
            <li><Link to="/booking" aria-label="Go to Booking page">Booking</Link></li>
            <li><Link to="/order" aria-label="Go to Order page">Order</Link></li>
            <li><Link to="/login" aria-label="Go to Login page">Login</Link></li>
          </ul>
        </nav>

        <section className="footer-section" aria-label="Contact Information">
          <h3>Contact</h3>
          <address>
            <p>2395 Maidove Way.</p>
            <p>Chicago, Illinois</p>
            <p><a href="tel:+16292436827" aria-label="Call us at 629-243-6827">(629)-243-6827</a></p>
            <p><a href="mailto:info@littlelemon.com" aria-label="Email us at info@littlelemon.com">info@littlelemon.com</a></p>
          </address>
        </section>

        <section className="footer-section" aria-label="Social Media Links">
          <h3>Connect</h3>
          <ul>
            <li><a href="#facebook" aria-label="Visit our Facebook page">Facebook</a></li>
            <li><a href="#instagram" aria-label="Visit our Instagram page">Instagram</a></li>
            <li><a href="#twitter" aria-label="Visit our Twitter page">Twitter</a></li>
          </ul>
        </section>
      </div>

      <div className="footer-bottom" aria-label="Copyright information">
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;