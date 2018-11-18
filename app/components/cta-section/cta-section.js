import React from 'react';
import './cta-section.scss';

const CTASection = () => {
  return (
    <div className="cta-section">
      <div className="container">
        <h3 className="headline">Join our millions of successful customers today.</h3>
        <div className="button-container">
          <button className="btn btn-lg" type="button" data-toggle="modal" data-target="#exampleModal">Join Today</button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
