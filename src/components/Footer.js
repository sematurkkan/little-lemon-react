// Footer.js
import React from 'react';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img 
              src="/assets/LL1.png" 
              alt="Little Lemon Logo" 
              className="footer-logo"
            />
          </div>
  
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              {/* <li><a href="#order">Order</a></li> */}
              {/* <li><a href="#login">Login</a></li> */}
            </ul>
          </div>
  
          <div className="footer-section">
            <h3>Contact</h3>
            <p>2395 Maidove Way.</p>
            <p>Chicago, Illinois</p>
            <p>(629)-243-6827</p>
            <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
          </div>
  
          <div className="footer-section">
            <h3>Connect</h3>
            <ul>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#join">Join us!</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;