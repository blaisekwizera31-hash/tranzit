import React from 'react';
import './UseCase.css';

const UseCase = () => {
  return (
    <section className="section use-case">
      <h2 className="section-title">Real-World Impact</h2>
      <p className="section-subtitle">
        See how Tranzit transforms global trade
      </p>
      
      <div className="use-case-container">
        <div className="use-case-header">
          <h3>Rwandan Coffee Export to Europe</h3>
          <span className="use-case-badge">Success Story</span>
        </div>
        
        <div className="use-case-content">
          <div className="use-case-scenario">
            <h4>Scenario</h4>
            <p>
              A coffee cooperative in Rwanda exports premium beans to a European buyer.
              Traditional methods would involve weeks of paperwork, payment delays, and
              trust issues between parties who've never met.
            </p>
          </div>
          
          <div className="use-case-flow">
            <div className="flow-step">
              <div className="flow-text">
                <strong>1. Smart Contract Created</strong>
                <p>Terms agreed: 500kg coffee, $5,000, delivery by March 15</p>
              </div>
            </div>
            
            <div className="flow-step">
              <div className="flow-text">
                <strong>2. Payment Locked</strong>
                <p>European buyer locks $5,000 in smart contract</p>
              </div>
            </div>
            
            <div className="flow-step">
              <div className="flow-text">
                <strong>3. Logistics Confirms</strong>
                <p>Shipping partner verifies delivery to European port</p>
              </div>
            </div>
            
            <div className="flow-step">
              <div className="flow-text">
                <strong>4. Automatic Payment</strong>
                <p>Funds instantly released to Rwandan cooperative</p>
              </div>
            </div>
            
            <div className="flow-step">
              <div className="flow-text">
                <strong>5. Compliance Verified</strong>
                <p>Regulators monitor transaction for trade compliance</p>
              </div>
            </div>
          </div>
          
          <div className="use-case-outcome">
            <h4>Outcome</h4>
            <div className="outcome-grid">
              <div className="outcome-item">
                <div className="outcome-label">Payment Time</div>
                <div className="outcome-value">Instant vs 30+ days</div>
              </div>
              <div className="outcome-item">
                <div className="outcome-label">Trust Level</div>
                <div className="outcome-value">100% Guaranteed</div>
              </div>
              <div className="outcome-item">
                <div className="outcome-label">Fair Trade</div>
                <div className="outcome-value">Full Price Received</div>
              </div>
              <div className="outcome-item">
                <div className="outcome-label">Global Access</div>
                <div className="outcome-value">New Markets Opened</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
