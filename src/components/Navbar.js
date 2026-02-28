import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="nav-logo" href="#top" onClick={closeMenu}>
          <img src="/j.png" alt="TradeLens Logo" className="logo-icon"/>
          <span className="logo-text">Trade Lens</span>
        </a>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={closeMenu}>Problem</a>
          <a href="#how-it-works" onClick={closeMenu}>Flow</a>
          <a href="#features" onClick={closeMenu}>Solutions</a>
          <a href="#team" onClick={closeMenu}>Team</a>
          <a href="#team" >Connect Now</a>
        </div>

        <button
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
