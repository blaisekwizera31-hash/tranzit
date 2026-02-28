import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      badge: 'Risk AI',
      title: 'AI Risk Radar + Corruption Heatmap',
      description: 'Flags suspicious deals early and warns sellers before exposure to fraudulent counterparties.'
    },
    {
      badge: 'Finance',
      title: 'Adaptive Currency Stabilizer',
      description: 'Protects local sellers by converting volatile value into stable settlement rails during trade.'
    },
    {
      badge: 'Trust',
      title: 'Smart Contracts and Trust Receipts',
      description: 'Each transaction issues tamper-proof proof of terms, delivery, and payment integrity.'
    },
    {
      badge: 'Community',
      title: 'Transparency Dashboards',
      description: 'Cooperatives and NGOs can trace money flows and monitor project accountability in real time.'
    },
    {
      badge: 'Access',
      title: 'Global Buyer Linkage',
      description: 'Creates direct cross-border trade channels between rural producers and vetted international buyers.'
    },
    {
      badge: 'Offline',
      title: 'Offline Transaction Mode',
      description: 'Records activity in low-connectivity regions and syncs safely once network access is restored.'
    }
  ];

  const uniqueness = [
    'Combines local accountability with global compliance in one operating model.',
    'Uses predictive AI to prevent corruption risk before contracts are executed.',
    'Adds transaction-time currency stabilization to defend rural income from inflation.',
    'Builds trust profiles that make first-mile sellers visible and credible worldwide.'
  ];

  const sdgs = [
    { id: 'SDG 8', text: 'Fair access to global trade for rural workers and SMEs.' },
    { id: 'SDG 9', text: 'Digital trust infrastructure for resilient commerce.' },
    { id: 'SDG 11', text: 'Community-level transparency for shared accountability.' },
    { id: 'SDG 16', text: 'Anti-corruption architecture that strengthens institutions.' }
  ];

  return (
    <section id="features" className="section features">
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">Deep solution architecture built for trust, fairness, and scale.</h2>
          <p className="section-subtitle">
            Unlike traditional marketplaces, TradeLens does not just match buyers and
            sellers. It actively secures transactions, stabilizes value, and generates
            transparent proof for communities, partners, and regulators.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card card">
              <span className="feature-badge">{feature.badge}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="uniqueness-block card">
          <h3>Why TradeLens is unique</h3>
          <ul>
            {uniqueness.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="sdg-grid">
          {sdgs.map((sdg) => (
            <article key={sdg.id} className="sdg-card card">
              <p className="sdg-id">{sdg.id}</p>
              <p>{sdg.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
