import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Transparent Trade.<br />
            Trusted Transactions.<br />
            Automated Compliance.
          </h1>
          <p className="hero-subtitle">
            Secure, blockchain-powered global trade infrastructure that eliminates fraud,
            automates payments, and builds trust across borders.
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/bloc.png" 
            alt="Blockchain network"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
