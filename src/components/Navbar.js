import React from 'react';
import '../styles/Navbar.css';
import logos from '../assets/logos.jpg';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={logos} alt="Planetary Data API Logo" className="navbar-logo" />
        <h1>Interstellar Adventures Space Excrusions</h1>
      </div>
    </nav>
  );
};

export default Navbar;
