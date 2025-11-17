import React from 'react';
// import logo from './assets/LittleLemon1.png'

const Header = () => {
  return (
    <header clasname="header">
      {/* Add header content here */}
      <img 
        src={"/assets/LittleLemon1.png"} 
        alt="Little Lemon Logo"
        className="logo"
      />

    </header>
  );
};

export default Header;