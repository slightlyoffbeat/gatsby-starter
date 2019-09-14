// ----------------------------------------------------------------------------
// Breakpoints
// ----------------------------------------------------------------------------

/**
 * This borrows heavily from https://github.com/morajabi/styled-media-query
 * This is a system for breakpoints
 * Usage:
 * const Box = styled.div`
 *   background: black;
 *   ${media.lessThan("md")`
 *     // screen width is less than 950px (md)
 *     background: red;
 *   `}
 *
 *    ${media.between("md", "lg")`
 *      // screen width is between 750px (md) and 1200px (lg)
 *      background: green;
 *    `}
 *
 *    ${media.greaterThan("lg")`
 *      // screen width is greater than 1200px (large)
 *      background: blue;
 *    `}
 * `;
 */

import { css } from 'styled-components';
import theme from './theme';

const defaultBreakpoints = theme.breakpoints;
const { baseFontSize } = theme.typography;

// First, check if there is a predefined breakpoint, or a custom breakpoint
const getSizeFromBreakpoint = (breakpointValue, breakpoints = {}) => {
  // if it uses one of the breakpoitns from theme.js ('md', 'lg', et)
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  }
  // if it sets a custom pixel value ('850')
  if (parseInt(breakpointValue)) {
    return breakpointValue;
  }
  console.error(
    'styled-media-query: No valid breakpoint or size specified for media.'
  );
  return '0';
};

/**
 * Media query generator
 * @param {Object} breakpoints - Map labels to breakpoint sizes
 * @return {Object} - Media generators for each breakpoint
 * returns em value
 */

export const generateMedia = (breakpoints = defaultBreakpoints) => {
  const lessThan = breakpoint => (...args) => css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint, breakpoints) /
        baseFontSize}em) {
      ${css(...args)};
    }
  `;

  const greaterThan = breakpoint => (...args) => css`
    @media (min-width: ${getSizeFromBreakpoint(breakpoint, breakpoints) /
        baseFontSize}em) {
      ${css(...args)};
    }
  `;

  const between = (firstBreakpoint, secondBreakpoint) => (...args) => css`
    @media (min-width: ${getSizeFromBreakpoint(
        firstBreakpoint,
        breakpoints
      )}) and (max-width: ${getSizeFromBreakpoint(
        secondBreakpoint,
        breakpoints
      ) / baseFontSize}em) {
      ${css(...args)};
    }
  `;
  return Object.assign({
    lessThan,
    greaterThan,
    between,
  });
};

export default generateMedia();
