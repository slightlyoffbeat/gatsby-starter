import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import { spacing, typeSize } from './utils';

const GlobalStyle = createGlobalStyle`
  html {
    /* box-sizing: border-box; */
    color: ${theme.typography.baseFontColor};
    line-height: ${theme.typography.baseLineHeight};
    font-family: ${theme.typography.baseFontFamily};
    font-size: ${`${theme.typography.baseFontSize}px`};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 700;
    font-family: ${props => props.theme.typography.headerFontFamily};
    letter-spacing: 0.5px;
    margin: 0;
    padding: 0;
    margin-bottom: ${spacing(4)};
  }

  h1 {
    font-size: ${typeSize(3)};
  }

  h2 {
    font-size: ${typeSize(2)};
  }

  h3 {
    font-size: ${typeSize(1)};
  }

  h4 {
    font-size: ${typeSize(0)};
  }

  h5 {
    font-size: ${typeSize(-1)};
    color: ${props => props.theme.colors.gray700};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  p {
    margin-bottom: ${spacing(4)};
  }
  
  
  /* *, *:before, *:after {
    box-sizing: inherit;
  } */
  
  /* body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.white};
  } */

  /* Images */
  /* img {
    max-width: 100%;
    height: auto;
    display: inline-block;
    vertical-align: middle;
  } */


  /* lists */
  /* ol, ul {
    list-style: none;
  } */

  /* Removes Dotted border */
  /* :focus {
    outline: 0;
  }

  fieldset {
    border: 0;
  } */
  /* Textarea takes on height automatically */
  /* textarea {
    height: auto;
    min-height: 50px;
    border-radius: $base-radius;
  } */
  /* Select elements are 100% width by default */
  /* select {
    width: 100%;
    border-radius: $base-radius;
  } */
`;

export default GlobalStyle;
