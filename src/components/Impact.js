import React from 'react';
import './Impact.css';

const Impact = () => {
  return (
    <section className="section impact">
      <h2 className="section-title">Global Impact</h2>
      <p className="section-subtitle">
        Building a more inclusive, transparent, and efficient global economy
      </p>
      
      <div className="impact-grid">
        <div className="impact-card card">
          <div className="impact-icon">🛡️</div>
          <h3>Trust</h3>
          <p>
            Blockchain-verified transactions eliminate fraud and build confidence
            between parties who've never met.
          </p>
        </div>
        
        <div className="impact-card card">
          <div className="impact-icon">⚡</div>
          <h3>Efficiency</h3>
          <p>
            Automated smart contracts reduce transaction time from weeks to minutes,
            cutting costs by up to 70%.
          </p>
        </div>
        
        <div className="impact-card card">
          <div className="impact-icon">🌍</div>
          <h3>Inclusivity</h3>
          <p>
            Small businesses in developing nations gain access to global markets
            with the same tools as large corporations.
          </p>
        </div>
        
        <div className="impact-card card">
          <div className="impact-icon">🔍</div>
          <h3>Reduced Corruption</h3>
          <p>
            Transparent, immutable records make it impossible to alter trade data
            or hide fraudulent activities.
          </p>
        </div>
        
        <div className="impact-card card">
          <div className="impact-icon">💰</div>
          <h3>Financial Empowerment</h3>
          <p>
            SMEs receive payments instantly upon delivery, improving cash flow
            and enabling business growth.
          </p>
        </div>
        
        <div className="impact-card card">
          <div className="impact-icon">🎯</div>
          <h3>UN SDG Alignment</h3>
          <p>
            Supporting SDG 8 (Economic Growth), SDG 9 (Innovation), and
            SDG 11 (Sustainable Cities).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
