import { css } from '@emotion/core';
import { MediaQuerySize, mqMin } from './breakpoints';

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
        background: transparent;
      }
    }
  `,
  skewLeft: css`
    &:before {
      transform-origin: 100%;
      transform: skewY(7deg);

      ${mqMin[MediaQuerySize.XXL]} {
        transform: none;
        border-bottom-width: 125px;
        border-bottom-color: inherit;
        border-left-width: calc(50vw - 10px);
        border-left-color: inherit;
        border-right: calc(50vw - 10px) solid transparent;
        border-top: 125px solid transparent;
        border-style: solid;
        height: 250px;
        top: -249px;
      }
    }
  `,
  skewRight: css`
    &:before {
      transform-origin: 0;
      transform: skewY(-7deg);

      ${mqMin[MediaQuerySize.XXL]} {
        transform: none;
        border-bottom-width: 125px;
        border-bottom-color: inherit;
        border-right-width: calc(50vw - 10px);
        border-right-color: inherit;
        border-left: calc(50vw - 10px) solid transparent;
        border-top: 125px solid transparent;
        border-style: solid;
        height: 250px;
        top: -249px;
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
