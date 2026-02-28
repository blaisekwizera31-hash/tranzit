import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="section-inner hero-grid">
        <div className="hero-content reveal">
          <p className="hero-kicker">TradeLens</p>
          <h1 className="hero-title">
            A global trust ecosystem for local-to-international trade.
          </h1>
          <p className="hero-subtitle">
            TradeLens is designed to stop fraud, reduce corruption, stabilize
            payments, and connect rural producers directly with global buyers through
            AI risk intelligence and blockchain trust infrastructure.
          </p>
          <div className="hero-buttons">
            <a href="#how-it-works" className="btn btn-primary">Explore Full Flow</a>
            <a href="#team" className="btn btn-secondary">Connect With Team</a>
          </div>
          <div className="hero-metrics">
            <article className="metric-card card">
              <strong>4 Risk Layers</strong>
              <span>AI radar, corruption heatmap, smart contracts, trust receipts.</span>
            </article>
            <article className="metric-card card">
              <strong>Local + Global</strong>
              <span>Rural cooperatives, NGOs, SMEs, and international buyers in one network.</span>
            </article>
          </div>
        </div>
        <div className="hero-image reveal">
          <div className="hero-panel">
            <p className="hero-panel-label">Live Trust Transaction</p>
            <h3>Cooperative Coffee Lot #NEX-208 / Kampala to Hamburg</h3>
            <ul>
              <li>
                <span>AI risk scan</span>
                <strong>Low Risk</strong>
              </li>
              <li>
                <span>Currency stabilization</span>
                <strong>Protected</strong>
              </li>
              <li>
                <span>Trust receipt</span>
                <strong>Issued On-Chain</strong>
              </li>
            </ul>
            <img src="/im.png" alt="Trade intelligence dashboard preview" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
