import styled, { CreateStyled } from '@emotion/styled';
import { useTheme as _useTheme } from 'emotion-theming';

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
    primaryText: colors.white,
    secondary: colors.orange,
    secondaryText: colors.white,
    tertiary: colors.mint,
    tertiaryText: colors.white,
    quaternary: colors.darkgrey,
    quinary: colors.lightgrey,
    background: colors.white,
  },
};

export type Theme = typeof theme;
export const useTheme = (): Theme => _useTheme<Theme>();
export default styled as CreateStyled<Theme>;
