import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/layout';

const IndexPage = () => (
  <Layout>
    <div className="container py12">
      <h1>Hello World</h1>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
);

export default IndexPage;
