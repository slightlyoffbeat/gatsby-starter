import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const PostCard = ({ link, title, date, excerpt, categories }) => (
  <div>
    <h3>
      <Link to={link}>{title}</Link>
    </h3>
    <small>{date} in </small>

    {categories.map((cat, i) => (
      <React.Fragment key={cat}>
        {!!i && ', '}
        <Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
      </React.Fragment>
    ))}

    <p>
      {excerpt} in
      {categories}
    </p>
  </div>
);

PostCard.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
};

export default PostCard;
