import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import PostCard from '../components/PostCard';

const Category = ({ pageContext: { category }, data: { allMdx } }) => {
  const { edges, totalCount } = allMdx;
  const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${category}"`;

  return (
    <>
      <h2>Category &ndash; {category}</h2>
      <p>
        {subline} (See <Link to="/category">all categories</Link>)
      </p>
      {edges.map(post => (
        <PostCard
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          excerpt={post.node.excerpt}
          link={`/blog/${post.node.fields.slug}`}
          categories={post.node.frontmatter.categories}
          key={post.node.fields.slug}
        />
      ))}
    </>
  );
};

export default Category;

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export const postQuery = graphql`
  query CategoryPage($category: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
