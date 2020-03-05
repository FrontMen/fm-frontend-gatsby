import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '22px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  googleFonts: [{ name: 'Titillium Web', styles: ['700', '400', '200'] }],
  bodyFontFamily: ['Titillium Web', 'Georgia', 'serif'],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
