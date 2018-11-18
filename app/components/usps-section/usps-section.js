import React from 'react';
import './usps-section.scss';
import enterprise from '../../assets/images/enterprise.png';
import data from '../../assets/images/data.png';
import vdi from '../../assets/images/vdi.png';

const UspsSection = () => {
  return (
    <div className="usps">
      <div className="container">
        <div className="tile">
          <h4 className="title">Enterprise</h4>
          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nam mollis lorem sed mi bibendum tristique.
          </p>
          <img
            className="image"
            src={enterprise}
            alt="enterprise"
          />
        </div>
        <div className="tile">
          <h4 className="title">Big Data</h4>
          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nam mollis lorem sed mi bibendum tristique.
          </p>
          <img
            className="image"
            src={data}
            alt="data"
          />
        </div>
        <div className="tile">
          <h4 className="title">VDI</h4>
          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nam mollis lorem sed mi bibendum tristique.
          </p>
          <img
            className="image"
            src={vdi}
            alt="vdi"
          />
        </div>
      </div>
    </div>
  );
};

export default UspsSection;
