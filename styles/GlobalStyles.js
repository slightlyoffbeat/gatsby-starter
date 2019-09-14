import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    color: ${theme.typography.baseFontColor};
    line-height: ${theme.typography.baseLineHeight};
    font-family: ${theme.typography.baseFontFamily};
    font-size: ${`${theme.typography.baseFontSize}px`};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.white};
  }
  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: inline-block;
    vertical-align: middle;
  }
  /* lists */
  ol, ul {
    list-style: none;
  }
  /* Removes Dotted border */
  :focus {
    outline: 0;
  }
  fieldset {
    border: 0;
  }
  /* Textarea takes on height automatically */
  textarea {
    height: auto;
    min-height: 50px;
    border-radius: $base-radius;
  }
  /* Select elements are 100% width by default */
  select {
    width: 100%;
    border-radius: $base-radius;
  }
`;

export default GlobalStyle;
