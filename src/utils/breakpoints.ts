const breakpoints = [576, 768, 992, 1200];

export const mqMin = breakpoints.map(
  bp => `@media screen and (min-width: ${bp}px)`
);

export const mqMax = breakpoints.map(
  bp => `@media screen and (max-width: ${bp}px)`
);

export enum MediaQuerySize {
  S,
  M,
  L,
  XL,
}

/* 
Usage

import {mqMin, MediaQuerySize} from 'breakpoints'

// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default

// Small devices (landscape phones, 576px and up)
${mqMin[MediaQuerySize.S]} { ... }
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
${mqMin[MediaQuerySize.M]} { ... }
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
${mqMin[MediaQuerySize.L]} { ... }
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
${mqMin[MediaQuerySize.XL]} { ... }
@media (min-width: 1200px) { ... }

Read more:
https://emotion.sh/docs/media-queries#reusable-media-queries
*/
