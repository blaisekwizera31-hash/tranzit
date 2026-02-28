import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="section-inner">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <img src="/jj.png" alt="TradeLens Logo" className="logo-icon" />
              <span className="logo-text">TRADELENS | Trade Lens</span>
            </div>
            <p className="footer-tagline">
              Trusted local markets connected to transparent global commerce.
            </p>
       
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#about">Problem</a></li>
              <li><a href="#how-it-works">Flow</a></li>
              <li><a href="#features">Solution</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Core Pillars</h4>
            <ul>
              <li><a href="#features">Fraud Prevention</a></li>
              <li><a href="#features">Currency Stabilization</a></li>
              <li><a href="#features">Community Transparency</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <p className="footer-tagline">
              Start a direct conversation with the TradeLens team for partnership and pilot design.
            </p>
            <a href="#team" className="btn btn-secondary footer-cta">
              Connect With Team
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 TradeLens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
