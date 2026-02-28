import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Seller Onboarding',
      description: 'Rural sellers register with mobile money identity or cooperative verification to create a trusted digital profile.'
    },
    {
      number: '02',
      title: 'Product Listing',
      description: 'Farmers, artisans, and SMEs publish products with quality details, endorsements, and traceable credibility signals.'
    },
    {
      number: '03',
      title: 'Buyer Discovery',
      description: 'International buyers evaluate offers through trust profiles, transparency dashboards, and historical trust receipts.'
    },
    {
      number: '04',
      title: 'Order and Risk Screening',
      description: 'Before commitment, the AI Risk Radar and corruption heatmap assess counterparties, routes, and transaction anomalies.'
    },
    {
      number: '05',
      title: 'Payment Stabilization',
      description: 'International payment is converted into stable value, shielding local sellers from inflation and sudden currency loss.'
    },
    {
      number: '06',
      title: 'Smart Contract Lock',
      description: 'Price, delivery obligations, and release conditions are committed on-chain so no party can rewrite terms after agreement.'
    },
    {
      number: '07',
      title: 'Delivery Confirmation',
      description: 'Cooperatives and logistics partners complete fulfillment, and buyer confirmation triggers deterministic settlement.'
    },
    {
      number: '08',
      title: 'Community Transparency',
      description: 'Dashboards expose fund movement and impact data for cooperatives and NGOs, improving accountability at grassroots level.'
    }
  ];

  return (
    <section id="how-it-works" className="section how-it-works">
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">Local to international: one transparent transaction flow.</h2>
          <p className="section-subtitle">
            Every stage, from onboarding to payout, produces verifiable evidence so
            sellers, buyers, and communities can trust the same source of truth.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <article key={step.number} className="step card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
