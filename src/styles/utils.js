import theme from './theme';
import breakpoints from './breakpoints';

export { breakpoints as bp };

const { scale, baseFontSize } = theme.typography;
const { space } = theme.defaults;

// ----------------------------------------------------------------------------
// Space Unit
// ----------------------------------------------------------------------------

/**
This is used to calculate spacing and help maintain vertical rhythm.
Takes a factor, multiplies it with the current settings base spacing to output values that are multiples or dividends of the current vertical rhythm
@param {Number} $factor [1] A factor with which to multiply the base-spacing value
@return {Value} Value of base-spacing multiplied by the factor provided
*/

export const spacing = n => {
  if (n === 0) {
    return '0px';
  }

  return `${space * n}px`;
};

// ----------------------------------------------------------------------------
// Type Size
// ----------------------------------------------------------------------------

/**
This looks at the base font size and the modular scale that is set in theme.js
and returns a pixel value. This is used for modular scale typography
see: https://type-scale.com/
*/

export const typeSize = n => `${Math.round(baseFontSize * scale ** n)}px`;

// ----------------------------------------------------------------------------
// Whitespace
// ----------------------------------------------------------------------------
/**
This is to help create a simple system for whitespace for blocks
default unit is 8px, but can be changed by setting the 'unit' variable
Shorthand Description:
m  Margin
p  Padding
t  Top
r  Right
b  Bottom
l  Left
x  X-axis (left and right)
y  Y-axis (top and bottom)
1  Whitespace Unit * 1
2  Whitespace Unit * 2
etc
EX: (assuming unit = 12px)
ws('mt', 4) == margin-top: 32px;
ws('pl', 1) == padding-left: 8px;
ws('py', 2) == padding-top: 16; padding-bottom: 16px;
*/

export const ws = (where, num) => {
  const totalSpace = num * space;
  switch (where) {
    case 'm':
      return `margin: ${totalSpace}px;`;
    case 'mt':
      return `margin-top: ${totalSpace}px;`;
    case 'mb':
      return `margin-bottom: ${totalSpace}px;`;
    case 'ml':
      return `margin-left: ${totalSpace}px;`;
    case 'mr':
      return `margin-right: ${totalSpace}px;`;
    case 'mx':
      return `margin-top: ${totalSpace}px; margin-bottom: ${totalSpace}px;`;
    case 'my':
      return `margin-left: ${totalSpace}px; margin-right: ${totalSpace}px;`;
    case 'p':
      return `padding: ${totalSpace}px;`;
    case 'pt':
      return `padding-top: ${totalSpace}px;`;
    case 'pb':
      return `padding-bottom: ${totalSpace}px;`;
    case 'pl':
      return `padding-left: ${totalSpace}px;`;
    case 'pr':
      return `padding-right: ${totalSpace}px;`;
    case 'px':
      return `padding-top: ${totalSpace}px; padding-bottom: ${totalSpace}px;`;
    case 'py':
      return `padding-left: ${totalSpace}px; padding-right: ${totalSpace}px;`;
    default:
      return 'margin: 0';
  }
};
