import React from 'react';
import './UserRoles.css';

const UserRoles = () => {
  const roles = [
    {
      title: 'Buyer',
      icon: '🛒',
      features: [
        'Create purchase orders',
        'Lock payment securely',
        'Verify delivery',
        'View transaction history'
      ]
    },
    {
      title: 'Seller',
      icon: '📦',
      features: [
        'Upload product & shipment details',
        'Receive automated payments',
        'Build verified trade reputation',
        'Track order status'
      ]
    },
    {
      title: 'Regulator / Authority',
      icon: '🏛️',
      features: [
        'Real-time dashboards',
        'Compliance monitoring',
        'Trade analytics',
        'Fraud detection visibility'
      ]
    },
    {
      title: 'Logistics Partner',
      icon: '🚚',
      features: [
        'Confirm shipment status',
        'Update tracking info',
        'Trigger smart contract milestones',
        'Delivery verification'
      ]
    }
  ];

  return (
    <section className="section user-roles">
      <h2 className="section-title">Built for Every Stakeholder</h2>
      <p className="section-subtitle">
        TradeLens serves all participants in the global trade ecosystem
      </p>
      
      <div className="roles-grid">
        {roles.map((role, index) => (
          <div key={index} className="role-card card">
            <div className="role-icon">{role.icon}</div>
            <h3 className="role-title">{role.title}</h3>
            <ul className="role-features">
              {role.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserRoles;
