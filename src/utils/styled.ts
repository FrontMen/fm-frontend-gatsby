import styled, { CreateStyled } from '@emotion/styled';

const colors = {
  orange: '#FF5900',
  mint: '#00CCCC',
  darkBlue: '#201E33',
  white: '#ffffff',
};

export const theme = {
  colors: {
    primary: colors.darkBlue,
    secondary: colors.orange,
    tertiary: colors.mint,
    background: colors.white,
  },
};

export default styled as CreateStyled<typeof theme>;
