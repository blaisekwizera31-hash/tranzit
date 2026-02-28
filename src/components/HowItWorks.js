import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Deal Creation',
      description: 'Buyer and seller define terms: price, delivery date, product details, and conditions.'
    },
    {
      number: '02',
      title: 'Smart Contract Generation',
      description: 'A blockchain smart contract is automatically created with all agreed terms.'
    },
    {
      number: '03',
      title: 'Payment Lock',
      description: 'Funds are securely locked in the smart contract, protecting both parties.'
    },
    {
      number: '04',
      title: 'Shipment & Logistics',
      description: 'Logistics partner confirms delivery and updates tracking information.'
    },
    {
      number: '05',
      title: 'Payment Release',
      description: 'Smart contract automatically releases funds upon delivery confirmation.'
    }
  ];

  return (
    <section id="how-it-works" className="section how-it-works">
      <h2 className="section-title">How It Works</h2>
      <p className="section-subtitle">
        Five simple steps to secure, transparent trade
      </p>
      
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
            {index < steps.length - 1 && <div className="step-connector"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
