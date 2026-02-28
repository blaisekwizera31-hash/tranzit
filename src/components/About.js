import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Tranzit</h2>
      <p className="section-subtitle">
        Revolutionizing global trade with blockchain transparency
      </p>
      
      <div className="about-grid">
        <div className="about-card">
          <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
          <h3>The Problem</h3>
          <p>
            Global trade suffers from fraud, payment delays, lack of transparency,
            and broken trust between parties. Small businesses are hit hardest,
            losing billions annually to trade disputes and payment failures.
          </p>
        </div>
        
        <div className="about-card">
          <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          <h3>The Solution</h3>
          <p>
            Tranzit uses blockchain technology and smart contracts to create
            tamper-proof trade records, automate payment releases, and ensure
            compliance. Every transaction is transparent, secure, and verifiable.
          </p>
        </div>
        
        <div className="about-card">
          <svg className="about-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <h3>Why It Matters</h3>
          <p>
            Transparency builds trust. Trust enables trade. By removing intermediaries
            and automating enforcement, we empower small businesses to compete globally
            while protecting all parties from fraud and disputes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
