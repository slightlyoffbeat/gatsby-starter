import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import kebabCase from 'lodash/kebabCase';

import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx;
  const { previous, next } = pageContext;
  const { banner } = data.mdx.frontmatter;

  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <p>
        Categories:&nbsp;
        {post.frontmatter.categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!!i && ', '}
            <Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
          </React.Fragment>
        ))}
      </p>
      {banner && (
        <div>
          <Img sizes={banner.childImageSharp.fluid} />
        </div>
      )}
      <MDXRenderer>{post.body}</MDXRenderer>
      <hr />

      <ul>
        <li>
          {previous && (
            <Link to={`/blog/${previous.frontmatter.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`/blog/${next.frontmatter.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </>
  );
};

export default BlogPostTemplate;

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
        banner {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`;
