import React from 'react';
import Image from '../components/Image';
import SEO from '../components/SEO';
import Container from '../components/Container';
import { H1, P, Link } from '../components/Type';

const IndexPage = () => (
  <Container>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <H1>Hi people</H1>
    <P>Welcome to your new Gatsby site.</P>
    <P>Now go build something great.</P>
    <P>
      <Link to="/blog">GO TO BLOG</Link>
    </P>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <P>
      <Link to="/page-2/">Go to page 2</Link>
    </P>
    <P>
      <Link to="/page-3/">Go to page 3</Link>
    </P>
  </Container>
);

export default IndexPage;
