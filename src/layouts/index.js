import React from 'react';
import Helmet from 'react-helmet';

// Components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// CSS
import '../styles/style.scss';

// Images
import faviconico from './img/favicon.ico';
import faviconpng from './img/favicon.png';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      {/* Meta */}
      <title>Gatsby Starter Kit</title>
      <meta name="description" content="This is a starter kit for Gatsby projects" />
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
      <meta name="twitter:title" content="Win prizes for building great extensions for FireFox" />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content="" />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
