import React from 'react';
import './trust-section.scss';
import clients from '../../assets/images/clients.png';

const TrustSection = () => {
  return (
    <div className="trust">
      <div className="container">
        <h3 className="headline">Who Runs on Nutanix</h3>
        <img
          className="clients"
          src={clients}
          alt="clients"
        />
      </div>
    </div>
  );
};

export default TrustSection;
