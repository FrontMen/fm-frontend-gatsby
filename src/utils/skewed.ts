import { css } from '@emotion/core';
import {MediaQuerySize, mqMin} from "./breakpoints";

type Angle = 'left' | 'right';

const skewed = {
  base: css`
    &:before {
      background: inherit;
      top: -1vw;
      content: '';
      display: block;
      height: 90%;
      left: 0;
      position: absolute;
      right: 0;
      z-index: -1;
      pointer-events: none;

      ${mqMin[MediaQuerySize.XXL]} {
        height: 100%;
      }
    }
  `,
  skewLeft: css`
    &:before {
      transform-origin: 100%;
      transform: skewY(7deg);

      ${mqMin[MediaQuerySize.XXL]} {
        transform: skewY(6deg);
      }
    }
  `,
  skewRight: css`
    &:before {
      transform-origin: 0;
      transform: skewY(-7deg);

      ${mqMin[MediaQuerySize.XXL]} {
        transform: skewY(-6deg);
      }
    }
  `,
};

export const getSkewed = (angle: Angle = 'left') => {
  const skewLR = angle === 'right' ? skewed.skewRight : skewed.skewLeft;
  return css`
    ${skewed.base}
    ${skewLR}
  `;
};
