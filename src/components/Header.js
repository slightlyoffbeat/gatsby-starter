import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
    <div>
      <Link to="/">
        <h1>This is the header</h1>
      </Link>
    </div>
  </header>
);

export default Header;
