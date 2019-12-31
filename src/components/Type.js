import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { spacing, typeSize } from '../styles/utils';

/* HEADERS */
const baseHeadingStyles = css`
  font-weight: 700;
  font-family: ${props => props.theme.typography.headerFontFamily};
  letter-spacing: 0.5px;
  margin: 0;
  padding: 0;
  margin-bottom: ${spacing(4)};
`;

export const H1 = styled.h1`
  ${baseHeadingStyles};
  font-size: ${typeSize(3)};
`;

export const H2 = styled.h2`
  ${baseHeadingStyles};
  font-size: ${typeSize(2)};
`;

export const H3 = styled.h3`
  ${baseHeadingStyles};
  font-size: ${typeSize(1)};
`;

export const H4 = styled.h4`
  ${baseHeadingStyles};
  font-size: ${typeSize(0)};
`;

export const H5 = styled.h5`
  ${baseHeadingStyles};
  font-size: ${typeSize(-1)};
  color: ${props => props.theme.colors.gray700};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Heading = ({ h1, h2, h3, h4, h5, ...props }) => {
  if (h1) return <H1 {...props} />;
  if (h2) return <H2 {...props} />;
  if (h3) return <H3 {...props} />;
  if (h4) return <H4 {...props} />;
  if (h5) return <H5 {...props} />;
  return <H1 {...props} />;
};

/* TYPE */
export const P = styled.p`
  margin-bottom: ${spacing(4)};
`;

export const Lead = styled.p`
  font-size: ${typeSize(1)};
  font-weight: 300;
`;

export const Small = styled.p`
  font-size: ${typeSize(-1)};
`;

export const Blockquote = styled.blockquote`
  font-size: ${typeSize(1)};
  margin: 0 0 ${spacing(1)};
  font-weight: 400;
  border-left: 5px solid ${props => props.theme.colors.black};
  padding-left: ${spacing(3)};
  margin-bottom: ${spacing(4)};
  margin-top: ${spacing(4)};
`;

export const HR = styled.hr`
  border-bottom: 1px solid ${props => props.theme.colors.gray500};
  height: 0;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  margin: ${spacing(1)} 0 ${spacing(1)};
`;

export const A = styled.a`
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
`;

export const Link = styled(GatsbyLink)`
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
`;

/* LISTS */
const baseListStyles = css`
  list-style-position: inside;
  line-height: inherit !important;
  list-style-type: disc;
  padding: 0;
  margin-left: ${spacing(2)};
  margin-bottom: ${spacing(2)};
`;

export const UL = styled.ul`
  ${baseListStyles};
`;

export const OL = styled.ul`
  ${baseListStyles};
`;

Heading.propTypes = {
  h1: PropTypes.node,
  h2: PropTypes.node,
  h3: PropTypes.node,
  h4: PropTypes.node,
  h5: PropTypes.node,
};
