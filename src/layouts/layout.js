import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// CSS
import '../styles/style.scss';

// Images
import faviconico from './img/favicon.ico';
import faviconpng from './img/favicon.png';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <Helmet>
          {/* Meta */}
          <title>Dan's Gatsby Starter Kit</title>
          <meta
            name="description"
            content="This is a starter kit for Gatsby projects"
          />
          <meta name="keywords" content="" />

          {/* Favicons */}
          <link rel="shortcut icon" type="image/x-icon" href={faviconico} />
          <link rel="icon" type="image/png" href={faviconpng} sizes="196x196" />

          {/* Social Sharing - Facebook */}
          <meta property="og:url" content="#" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />

          {/* Social Sharing - Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@firefox" />
          <meta name="twitter:creator" content="@firefox" />
          <meta
            name="twitter:title"
            content="Win prizes for building great extensions for FireFox"
          />
          <meta name="twitter:description" content="" />
          <meta name="twitter:image" content="" />

          {/* Other */}
          <html lang="en" />
        </Helmet>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
