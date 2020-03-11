import styled, { CreateStyled } from '@emotion/styled';

const colors = {
  orange: '#FF5900',
  mint: '#00CCCC',
  darkBlue: '#201E33',
};

type Theme = {
  colors: {
    primary: string;
  };
};

export const theme: Theme = {
  colors: {
    primary: colors.orange,
  },
};

export default styled as CreateStyled<Theme>;
