import React from 'react';
import './Security.css';

const Security = () => {
  return (
    <section className="section security">
      <h2 className="section-title">Enterprise Security</h2>
      <p className="section-subtitle">
        Bank-grade security protecting every transaction
      </p>
      
      <div className="security-grid">
        <div className="security-card card">
          <div className="security-icon">🔐</div>
          <h3>End-to-End Encryption</h3>
          <p>
            All data is encrypted in transit and at rest using AES-256 encryption,
            ensuring complete privacy and security.
          </p>
        </div>
        
        <div className="security-card card">
          <div className="security-icon">⬡</div>
          <h3>Tamper-Proof Blockchain</h3>
          <p>
            Distributed ledger technology makes it impossible to alter or delete
            transaction records without detection.
          </p>
        </div>
        
        <div className="security-card card">
          <div className="security-icon">📜</div>
          <h3>Smart Contract Enforcement</h3>
          <p>
            Automated contract execution eliminates human error and ensures
            terms are enforced exactly as agreed.
          </p>
        </div>
        
        <div className="security-card card">
          <div className="security-icon">👥</div>
          <h3>Role-Based Access Control</h3>
          <p>
            Granular permissions ensure users only access data relevant to
            their role in the transaction.
          </p>
        </div>
        
        <div className="security-card card">
          <div className="security-icon">🔍</div>
          <h3>Regulatory Transparency</h3>
          <p>
            Authorized regulators have real-time visibility into transactions
            for compliance monitoring.
          </p>
        </div>
        
        <div className="security-card card">
          <div className="security-icon">✓</div>
          <h3>Multi-Factor Authentication</h3>
          <p>
            Multiple layers of identity verification protect against
            unauthorized access and fraud.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Security;
