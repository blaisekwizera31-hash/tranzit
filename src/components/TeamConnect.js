import React from 'react';
import './TeamConnect.css';

const TeamConnect = () => {
  const socialPlaceholders = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/isingizwe-kwizera-blaise-147a283b2/' },
    { name: 'X (Twitter)', href: 'https://x.com/blaiseikb' },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100084586548411' },
    { name: 'Instagram', href: 'https://www.instagram.com/blaiseikb/' },
  
  ];

  const contacts = [
    {
      role: 'Partnership Desk',
      details: 'For cooperatives, NGOs, and export alliances building local onboarding channels.',
    
    },
    {
      role: 'Buyer Integration Team',
      details: 'For international buyers seeking verified sourcing and transparent settlement workflows.',
 
    },
    {
      role: 'Compliance and Trust Lab',
      details: 'For anti-fraud institutions, auditors, and public transparency initiatives.',
    
    }
  ];

  return (
    <section id="team" className="section team-connect">
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">Connect with the team.</h2>
          <p className="section-subtitle">
            The TradeLens team collaborates with cooperatives, development organizations,
            and global buyers to launch trusted trade corridors with measurable impact.
          </p>
        </div>

        <div className="team-grid">
          {contacts.map((contact) => (
            <article key={contact.role} className="team-card card">
              <h3>{contact.role}</h3>
              <p>{contact.details}</p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </article>
          ))}
        </div>

        <div className="team-cta card">
          <p className="team-cta-title">Ready to deploy TradeLens in your market?</p>
          <p className="team-cta-text">
            Share your region, trade sector, and scale goals. The team will design a
            pilot path covering trust onboarding, risk controls, and settlement setup.
          </p>
          <a href="https://www.instagram.com/blaiseikb/" className="btn btn-primary">
            Schedule a talk.
          </a>
        </div>

        <div className="team-social card">
          <p className="team-social-title">Social media placeholders</p>
          <div className="team-social-grid">
            {socialPlaceholders.map((platform) => (
              <a key={platform.name} href={platform.href} className="team-social-link">
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamConnect;
