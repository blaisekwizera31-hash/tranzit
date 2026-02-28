import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/logo.png" alt="Tranzit Logo" className="logo-icon" />
          <span className="logo-text">Tranzit</span>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)}>How It Works</a>
          <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#features">Learn More</a>
        </div>
        
        <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
