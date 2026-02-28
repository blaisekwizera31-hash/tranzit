import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section id="contact" className="section cta">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Transform Your Trade?</h2>
        <p className="cta-subtitle">
          Join thousands of businesses building trust through transparency
        </p>
        
        <div className="cta-options">
          <div className="cta-option">
            <h3>Join as Exporter</h3>
            <p>Access global markets with secure, automated payments</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          
          <div className="cta-option">
            <h3>Partner as Buyer</h3>
            <p>Source products with confidence and transparency</p>
            <button className="btn btn-primary">Learn More</button>
          </div>
          
          <div className="cta-option">
            <h3>Government Collaboration</h3>
            <p>Enhance trade compliance and monitoring</p>
            <button className="btn btn-primary">Contact Us</button>
          </div>
          
          <div className="cta-option">
            <h3>Investor Inquiry</h3>
            <p>Be part of the future of global trade</p>
            <button className="btn btn-primary">View Deck</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
