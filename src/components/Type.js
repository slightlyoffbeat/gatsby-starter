import styled, { css } from 'styled-components';
import { space, typeSpace, typeSize } from '../../styles/utils';

/* HEADERS */
const baseHeadingStyles = css`
  font-family: ${props => props.theme.typography.headerFontFamily};
  letter-spacing: 0.5px;
  margin: 0;
  padding: 0;
  margin-bottom: ${space(2)};
`;

export const H1 = styled.h1`
  ${baseHeadingStyles};
  font-weight: 700;
  font-size: ${typeSize(3)};
  line-height: ${typeSpace(12)};
`;

export const H2 = styled.h2`
  ${baseHeadingStyles};
  font-weight: 600;
  font-size: ${typeSize(2)};
  line-height: ${typeSpace(6)};
`;

export const H3 = styled.h3`
  ${baseHeadingStyles};
  font-weight: 500;
  font-size: ${typeSize(1)};
  line-height: ${typeSpace(6)};
`;

export const H4 = styled.h4`
  ${baseHeadingStyles};
  font-weight: 500;
  font-size: ${typeSize(0)};
  line-height: ${typeSpace(6)};
`;

export const H5 = styled.h5`
  ${baseHeadingStyles};
  font-weight: 500;
  font-size: ${typeSize(-1)};
  line-height: ${typeSpace(6)};
  color: ${props => props.theme.colors.gray5};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

/* TYPE */
export const P = styled.p`
  margin-bottom: ${space(2)};
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
  line-height: ${typeSpace(8)};
  margin: 0 0 ${space(1)};
  font-weight: 400;
  border-left: 5px solid ${props => props.theme.colors.black};
  padding-left: ${space(3)};
  margin-bottom: ${space(4)};
  margin-top: ${space(4)};
`;

export const HR = styled.hr`
  border-bottom: 1px solid ${props => props.theme.colors.gray5};
  height: 0;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  margin: space(1) 0 space(1);
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

/* LISTS */
const baseListStyles = css`
  list-style-position: inside;
  line-height: inherit !important;
  list-style-type: disc;
  padding: 0;
  margin-left: ${space(2)};
  margin-bottom: ${space(2)};
`;

export const UL = styled.ul`
  ${baseListStyles};
`;

export const OL = styled.ul`
  ${baseListStyles};
`;
