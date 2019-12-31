import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import NormalizeStyles from '../styles/NormalizeStyles';
import PreStyles from '../styles/PreStyles';
import GlobalStyles from '../styles/GlobalStyles';
import SEO from './SEO';
import Footer from './Footer';
import theme from '../styles/theme';

import Header from './Header';

const Layout = ({ children }) => (
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      <NormalizeStyles />
      <PreStyles />
      <GlobalStyles />
      <SEO />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  </HelmetProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
