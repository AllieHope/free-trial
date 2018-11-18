import React from 'react';
import './description-section.scss';

const DescriptionSection = () => {
  return (
    <div className="description">
      <div className="container">
        <h3 className="headline">What is Nutanix Enterprise Cloud?</h3>
        <h4 className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam mollis lorem sed mi bibendum tristique. Nam rutrum mi nec scelerisque
        blandit. Curabitur lobortis venenatis volutpat. Aliquam vitae justo pretium magna
        faucibus tempor in sed mauris. Duis vitae consectetur ante, quis aliquam libero.
        </h4>
        <a className="link" href="/">Learn more</a>
      </div>
    </div>
  );
};

export default DescriptionSection;
