import { darken } from 'polished';

// Colors
// -------------------------

const primary = '#49b778';

const colors = {
  primary,
  green: primary,
  greenDark: '#37895a',
  greenLight: '#6dc593',
  greenLightest: '#d3eedf',
  white: '#fff',
  black: '#000',

  gray1: '#17181e',
  gray2: '#24252d',
  gray3: '#32323d',
  gray4: '#4e4f58',
  gray5: '#72727a',
  gray6: '#95959b',
  gray7: '#b8b9bc',
  gray8: '#d5d5d7',
  gray9: '#eaeaeb',
  gray10: '#f4f4f4',

  success: primary,
  warning: '#f7d02d',
  danger: '#dd5858',
};

// Type
// -------------------------
const sansSerif =
  "'Proxima Nova', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'";
const serif = "'Cambria', 'Georgia', 'serif'";

const typography = {
  baseFontSize: 16,
  baseLineHeight: 1.5,
  baseFontColor: colors.gray3,
  scale: 1.148,
  sansSerif,
  serif,
  baseFontFamily: sansSerif,
  headerFontFamily: sansSerif,
  baseLinkColor: colors.green,
  baseLinkHover: darken(0.1, colors.greenDark),
};

// Breakpoints
// -------------------------
const breakpoints = {
  xs: 450,
  sm: 750,
  md: 950,
  lg: 1200,
  xl: 1400,
};

// Defaults & Vertical Rhythm
// A simple approach to vertical rhythm:
// -  Spacing will be in increments of 8 (or unit)
// -  Type line height will be in increments of 4 (or typeUnit);
// -  Unit assumes px
// -------------------------
const defaults = {
  unit: 8,
  typeUnit: 4,
  baseRadius: '4px',
  baseTime: '0.3s',
  baseEase: 'ease',
};

// Z-Index
// -------------------------
const zIndex = {
  bury: -1,
  content: 10,
  header: 15,
  blackout: 20,
  sidebar: 21,
  navtrigger: 22,
  modal: 40,
};

// Sidebar sizes
// -------------------------

const sidebar = {
  sm: 0,
  md: 120,
  lg: 200,
};

const theme = {
  colors,
  typography,
  breakpoints,
  defaults,
  zIndex,
  sidebar,
};

export default theme;
