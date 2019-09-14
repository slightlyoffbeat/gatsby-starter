const path = require(`path`);
const _ = require('lodash');

// Creating all pages from MDX files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve(`./src/templates/blog-post.js`);

  return graphql(
    `
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              excerpt(pruneLength: 250)
              fields {
                sourceName
              }
              frontmatter {
                slug
                title
                categories
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.edges;

    // if this was in /content/blog then create a blog post page
    posts.forEach((post, index) => {
      if (post.node.fields.sourceName === 'blog') {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
          path: `/blog/${post.node.frontmatter.slug}`,
          component: blogPost,
          context: {
            slug: post.node.frontmatter.slug,
            previous,
            next,
          },
        });
      }
    });

    // set variables for various templates
    const blogHomeTemplate = path.resolve('./src/templates/blog-home.js');
    const blogListTemplate = path.resolve('./src/templates/blog-list.js');
    const categoryTemplate = require.resolve('./src/templates/category.js');

    // Create blog post list pages
    const postsPerPage = 3;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((page, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog-${i + 1}`,
        component: i === 0 ? blogHomeTemplate : blogListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });

    // create a list of all categories
    const categorySet = new Set();

    posts.forEach(post => {
      if (post.node.frontmatter.categories) {
        post.node.frontmatter.categories.forEach(cat => {
          categorySet.add(cat);
        });
      }
    });

    // create category pages for each category
    const categories = Array.from(categorySet);

    categories.forEach(category => {
      createPage({
        path: `/blog/category/${_.kebabCase(category)}`,
        component: categoryTemplate,
        context: {
          category,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const parent = getNode(node.parent);

  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: 'slug',
      node,
      value: node.frontmatter.slug,
    });

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title,
    });

    createNodeField({
      name: 'sourceName',
      node,
      value: parent.sourceInstanceName,
    });

    createNodeField({
      name: 'categories',
      node,
      value: node.frontmatter.categories || [],
    });
  }
};
