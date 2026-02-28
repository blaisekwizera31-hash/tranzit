import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Blockchain Records',
      description: 'Immutable, tamper-proof transaction history stored on distributed ledger'
    },
    {
      title: 'Smart Contracts',
      description: 'Self-executing contracts that automatically enforce agreed terms'
    },
    {
      title: 'Real-Time Dashboards',
      description: 'Live visibility into trade status, payments, and compliance metrics'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive insights and export capabilities for all stakeholders'
    },
    {
      title: 'Instant Notifications',
      description: 'Real-time alerts for milestones, approvals, and critical events'
    },
    {
      title: 'Identity Verification',
      description: 'Multi-factor authentication and verified business credentials'
    },
    {
      title: 'Audit Trails',
      description: 'Complete transaction history for compliance and dispute resolution'
    },
    {
      title: 'Multi-Currency',
      description: 'Handle transactions in multiple currencies with automatic conversion'
    }
  ];

  return (
    <section id="features" className="section features">
      <h2 className="section-title">Powerful Features</h2>
      <p className="section-subtitle">
        Everything you need for secure, transparent global trade
      </p>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card card">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
