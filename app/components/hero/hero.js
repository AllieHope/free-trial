import React from 'react';
import './hero.scss';
import macbook from '../../assets/images/macbook.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-background" />
      <div className="container">
        <h1 className="headline">Unified On-prem & Public Cloud Management</h1>
        <h4 className="text">Nutanix Enterprise Cloud combines the agility
        and simplicity of the public cloud, with the security and control you need in a
        private cloud.
        </h4>
        <div className="button-container">
          <button className="btn btn-lg" type="button" data-toggle="modal" data-target="#exampleModal">Get Started</button>
        </div>
      </div>
      <div className="container">
        <img
          className="macbook"
          src={macbook}
          alt="Macbook"
        />
      </div>
    </div>
  );
};

export default Hero;
