import React from 'react';
import Link from 'gatsby-link';

// Images
import Logo from './img/logo.svg';

const Navbar = () => (
  <div className="navbar">
    <Link className="navbar__logo" to="/">
      <img src={Logo} alt="logo" />
    </Link>
    <ul className="navbar__list">
      <li className="navbar__item">
        <Link to="#" className="navbar__link">
          Link 1
        </Link>
      </li>
      <li className="navbar__item">
        <Link to="#" className="navbar__link">
          Link 2
        </Link>
      </li>
      <li className="navbar__item">
        <Link to="#" className="navbar__link">
          Link 3
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
