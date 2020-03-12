import styled, { CreateStyled } from '@emotion/styled';

const colors = {
  orange: '#FF5900',
  mint: '#00CCCC',
  darkBlue: '#201E33',
};

export const theme = {
  colors: {
    primary: colors.orange,
  },
};

export default styled as CreateStyled<typeof theme>;
