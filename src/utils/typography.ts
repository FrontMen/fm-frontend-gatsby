import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '22px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Stratum1', 'Helvetica Neue', 'sans-serif'],
  googleFonts: [{ name: 'Titillium Web', styles: ['700', '400', '200'] }],
  headerWeight: 700,
  bodyFontFamily: ['Titillium Web', 'Open Sans', 'serif'],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
