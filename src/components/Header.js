import React from 'react';
// import logo from './assets/LittleLemon1.png'

function Header() {
  return (
    <header className="header" role="banner">
      <img 
        src="/assets/LittleLemon1.png" 
        alt="Little Lemon Logo - Mediterranean Restaurant" 
        className="logo"
      />
    </header>
  );
}

export default Header;