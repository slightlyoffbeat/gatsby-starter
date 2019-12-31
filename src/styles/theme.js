// Colors
// -------------------------

const colors = {
  primary: '#3182CE',
  primaryLight: '#63B3ED',
  primaryDark: '#2C5282',
  white: '#fff',
  black: '#000',

  gray100: '#F7FAFC',
  gray200: '#EDF2F7',
  gray300: '#E2E8F0',
  gray400: '#CBD5E0',
  gray500: '#A0AEC0',
  gray600: '#718096',
  gray700: '#4A5568',
  gray800: '#2D3748',
  gray900: '#1A202C',

  success: '#68D391',
  warning: '#F6E05E',
  danger: '#FC8181',
};

// Type
// -------------------------
const sansSerif = "'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'";
const serif = "'Cambria', 'Georgia', 'serif'";

const typography = {
  baseFontSize: 16,
  baseLineHeight: 1.5,
  scale: 1.333,
  baseFontColor: colors.gray900,
  sansSerif,
  serif,
  baseFontFamily: sansSerif,
  headerFontFamily: sansSerif,
  baseLinkColor: colors.primary,
  baseLinkHover: colors.primaryDark,
};

// Breakpoints
// -------------------------
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

// Defaults & Vertical Rhythm
// A simple approach to vertical rhythm:
// -  Spacing will be in increments of 8 (or unit)
// -  Type line height will be in increments of 4 (or typeUnit);
// -  Unit assumes px
// -------------------------
const defaults = {
  space: 4,
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
