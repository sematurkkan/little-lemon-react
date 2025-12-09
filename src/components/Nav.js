// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <ul className="nav-list">
        <li><Link to="/" aria-label="Go to Home page">Home</Link></li>
        <li><Link to="/about" aria-label="Go to About page">About</Link></li>
        <li><Link to="/menu" aria-label="Go to Menu page">Menu</Link></li>
        <li><Link to="/booking" aria-label="Go to Booking page">Booking</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;