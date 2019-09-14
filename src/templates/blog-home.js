import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import PostCard from '../components/PostCard';

const BlogList = ({ data, pageContext }) => {
  const posts = data.allMdx.edges;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog-${(currentPage - 1).toString()}`;
  const nextPage = `/blog-${(currentPage + 1).toString()}`;

  return (
    <>
      <PostCard
        link={`/blog/${posts[0].node.fields.slug}`}
        title={`Featured: ${posts[0].node.frontmatter.title}`}
        date={posts[0].node.frontmatter.date}
        excerpt={posts[0].node.excerpt}
        categories={posts[0].node.frontmatter.categories}
      />
      <PostCard
        link={`/blog/${posts[1].node.fields.slug}`}
        title={`Featured: ${posts[1].node.frontmatter.title}`}
        date={posts[1].node.frontmatter.date}
        excerpt={posts[1].node.excerpt}
        categories={posts[1].node.frontmatter.categories}
      />
      {posts.map(({ node }, i) => {
        const { title } = node.frontmatter;

        if (i >= 2) {
          return (
            <PostCard
              key={node.fields.slug}
              link={`/blog/${node.fields.slug}`}
              title={title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              categories={node.frontmatter.categories}
            />
          );
        }
        return null;
      })}

      <ul>
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li key={`pagination-number${i + 1}`}>
            <Link to={i === 0 ? '/blog' : `/blog-${i + 1}`}>{i + 1}</Link>
          </li>
        ))}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </ul>
    </>
  );
};

export default BlogList;

BlogList.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query blogHomeQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            categories
          }
        }
      }
    }
  }
`;
