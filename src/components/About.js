import React from 'react';
import './About.css';

const About = () => {
  const pillars = [
    {
      title: 'Corruption and Fraud',
      description:
        'Billions are lost every year through hidden deals, fake records, and manipulated intermediaries. Rural sellers are hit hardest because they lack legal visibility and proof of fair execution.',
      stat: '$B Lost',
      meta: 'Opaque transactions make enforcement weak and theft difficult to trace.'
    },
    {
      title: 'Financial Instability',
      description:
        'Inflation and volatile local currencies erode value between sale and settlement. Workers can fulfill orders correctly and still lose income before payout arrives.',
      stat: 'High Volatility',
      meta: 'Unstable value transfer turns honest trade into a financial gamble.'
    },
    {
      title: 'Exclusion from Global Markets',
      description:
        'Farmers, artisans, and small enterprises are often invisible to international buyers because they cannot show trusted identity, performance history, or cooperative endorsement.',
      stat: 'Millions Excluded',
      meta: 'Lack of verified digital trust keeps local economies out of global value chains.'
    },
    {
      title: 'Lack of Transparency',
      description:
        'Communities cannot see where money flows in projects, cooperatives, and NGOs. This weakens trust, enables misuse, and blocks evidence-based accountability.',
      stat: 'Trust Deficit',
      meta: 'No shared ledger means no shared truth.'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">The problem is systemic, and local communities pay the price.</h2>
          <p className="section-subtitle">
            The TradeLens objective is clear: build a global trust ecosystem that prevents
            fraud and corruption, stabilizes transactions, and gives local producers
            direct, fair access to international trade networks.
          </p>
        </div>

        <div className="about-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="about-card card">
              <p className="about-stat">{pillar.stat}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <small>{pillar.meta}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
