import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/layout';

const SecondPage = () => (
  <Layout>
    <div className="container py12">
      <h1>MEH</h1>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
);

export default SecondPage;
