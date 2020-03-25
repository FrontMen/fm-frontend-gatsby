import { css } from '@emotion/core';

import { rhythm } from '../typography';

export const Button = (props: any) => css`
  display: block;
  padding: ${rhythm(0.25)};
  background-color: ${props.theme.colors.secondary};
  position: relative;
  margin-bottom: 0.3em;
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    border-left: 25px solid ${props.theme.colors.secondary};
    height: 0;
    width: 0;
    top: 0;
    border-right: 0 solid transparent;
    right: -25px;
    border-bottom: 1.2rem solid transparent;
    border-top: 1.2rem solid transparent;
  }
`;

