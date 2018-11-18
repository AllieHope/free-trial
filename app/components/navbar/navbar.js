import React from 'react';
import './navbar.scss';
import logoWhite from '../../assets/images/logo-white.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <a className="navbar-brand" href="/">
        <img
          className="logo"
          style={{ margin: '0.5em' }}
          src={logoWhite}
          alt="Nutanix Logo"
        />
      </a>
    </nav>
  );
};

export default Navbar;
