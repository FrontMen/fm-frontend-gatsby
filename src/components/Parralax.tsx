import { StyledComponent } from '@emotion/styled';
import PropTypes from 'prop-types';
import * as React from 'react';

import styled from '../utils/styled';
import { MediaQuerySize, mqMax } from '../utils/breakpoints';

type Props = {
  children: React.ReactNode;
  top: string;
  left: string;
  scale: number;
  zlocation: number;
};

interface ParallaxContainerComposition {
  ParallaxItem: React.FC<Props>;
}

const ParallaxItemSpan = styled.span`
  position: absolute;
  transform-origin: 0 50%;
  z-index: -1;
  opacity: 1;
  transition: transform 2s ease-out, opacity 2s ease-out;

  ${mqMax[MediaQuerySize.S]} {
    transform: scale(0.1) !important;
    opacity: 0;
  }
`;

export const ParallaxContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 10px;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
` as ParallaxContainerComposition & StyledComponent<Props, any, object>; // TODO need to fix the any

const ParallaxItem: React.FC<Props> = ({
  children,
  top,
  left,
  scale,
  zlocation,
}: Props) => (
  <ParallaxItemSpan
    className="parallax-item"
    style={{
      top,
      left,
      transform: `translateZ(${zlocation}px) scale(${scale})`,
    }}
  >
    {children}
  </ParallaxItemSpan>
);

ParallaxItem.propTypes = {
  children: PropTypes.node.isRequired,
};

ParallaxContainer.ParallaxItem = ParallaxItem;
