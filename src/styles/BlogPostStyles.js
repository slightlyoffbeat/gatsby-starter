import styled from 'styled-components';
import { spacing, typeSize } from './utils';

const BlogPostStyles = styled.div`
  blockquote,
  .blockquote {
    font-size: ${typeSize(1)};
    margin: 0 0 ${spacing(1)};
    font-weight: 400;
    border-left: 5px solid ${props => props.theme.colors.black};
    padding-left: ${spacing(3)};
    margin-bottom: ${spacing(4)};
    margin-top: ${spacing(4)};
  }

  hr {
    border-bottom: 1px solid ${props => props.theme.colors.gray500};
    height: 0;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    margin: ${spacing(1)} 0 ${spacing(1)};
  }

  a {
    color: ${props => props.theme.typography.baseLinkColor};
    cursor: pointer;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${props => props.theme.typography.baseLinkHover};
      transition: color ${props => props.theme.defaults.baseTime}
        ${props => props.theme.defaults.baseEase};
    }
    img {
      border: 0;
    }
  }

  ul,
  li {
    list-style-position: inside;
    line-height: inherit !important;
    list-style-type: disc;
    padding: 0;
    margin-left: ${spacing(2)};
    margin-bottom: ${spacing(2)};
  }
`;

export default BlogPostStyles;
