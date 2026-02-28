import React from 'react';
import './Technology.css';

const Technology = () => {
  return (
    <section id="technology" className="section technology">
      <h2 className="section-title">Technology Architecture</h2>
      <p className="section-subtitle">
        Enterprise-grade infrastructure built for scale and security
      </p>
      
      <div className="tech-architecture">
        <div className="tech-layer">
          <div className="layer-title">Frontend Layer</div>
          <div className="layer-content">
            <div className="tech-item">
              <span>React Web Application</span>
            </div>
            <div className="tech-item">
              <span>React Native Mobile</span>
            </div>
          </div>
        </div>
        
        <div className="tech-arrow">↓</div>
        
        <div className="tech-layer">
          <div className="layer-title">Backend APIs</div>
          <div className="layer-content">
            <div className="tech-item">
              <span>Node.js / Django REST Framework</span>
            </div>
            <div className="tech-item">
              <span>Authentication & Authorization</span>
            </div>
          </div>
        </div>
        
        <div className="tech-arrow">↓</div>
        
        <div className="tech-layer highlight">
          <div className="layer-title">Blockchain Layer</div>
          <div className="layer-content">
            <div className="tech-item">
              <span>Ethereum / Hyperledger Fabric</span>
            </div>
            <div className="tech-item">
              <span>Smart Contract Engine</span>
            </div>
          </div>
        </div>
        
        <div className="tech-arrow">↓</div>
        
        <div className="tech-layer">
          <div className="layer-title">Data Layer</div>
          <div className="layer-content">
            <div className="tech-item">
              <span>PostgreSQL Database</span>
            </div>
            <div className="tech-item">
              <span>Analytics Engine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
