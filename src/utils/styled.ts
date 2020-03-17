import styled, { CreateStyled } from '@emotion/styled';

const colors = {
  orange: '#FF5900',
  mint: '#00CCCC',
  darkBlue: '#201E33',
  white: '#ffffff',
  darkgrey: '#4D4B5B',
  lightgrey: '#797884',
};

export const theme = {
  colors: {
    primary: colors.darkBlue,
    secondary: colors.orange,
    tertiary: colors.mint,
    quaternary: colors.darkgrey,
    quinary: colors.lightgrey,
    background: colors.white,
  },
};
export type Theme = typeof theme;

export default styled as CreateStyled<Theme>;
