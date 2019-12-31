import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: black;
  color: white;
`;

const Header = () => (
  <HeaderStyled>
    <div>
      <Link to="/">
        <h1>This is the header</h1>
      </Link>
    </div>
  </HeaderStyled>
);

export default Header;
