import styled from '@emotion/styled';
import * as React from 'react';

import { useTheme } from '../utils/styled';
import { rhythm } from '../utils/typography';
import { css } from '@emotion/core';
import { MediaQuerySize, mqMin } from '../utils/breakpoints';

export enum SelectableThemes {
  Mint = 'Mint',
  Orange = 'Orange',
  Darkblue = 'Darkblue',
  SkewPositive = 'SkewPositive',
  SkewNegative = 'SkewNegative',
  SkewNeutral = 'SkewNeutral',
}

type Props = {
  children: React.ReactNode;
  selectedTheme?: string;
  skew?: string;
};

const DarkBlueSectionItem = (props: any) => css`
  color: ${props.theme.colors.primaryText};
  
  a,
  a:hover,
  a:visited,
  a:focus {
    color: ${props.theme.colors.primaryText};
  }

  &:after, &:before {
    background: ${props.theme.colors.primary};
  }
`;

const OrangeSectionItem = (props: any) => css`
  color: ${props.theme.colors.secondaryText};
  a,
  a:hover,
  a:visited,
  a:focus {
    color: ${props.theme.colors.secondaryText};
  }

  &:after, &:before {
    background: ${props.theme.colors.secondary};
  }
`;

const MintSectionItem = (props: any) => css`
  color: ${props.theme.colors.tertiaryText};
  a,
  a:hover,
  a:visited,
  a:focus {
    color: ${props.theme.colors.tertiaryText};
  }

  &:after, &:before {
    background: ${props.theme.colors.tertiary};
  }
`;

const SectionItem = styled.section`
  width: 100%;
  opacity: 1;
  max-width: 1200px;
  min-height: 12em;
  padding: 2em 12px;
  position: relative;
  transition: opacity 400ms cubic-bezier(0, 0, 0, 1) 0s;
  margin: 10vw auto;
  
  &:before {
    bottom: -6vw;
    content: '';
    display: block;
    height: 80%;
    width: 100vw;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
    pointer-events: none;
    
     ${mqMin[MediaQuerySize.XL]} {
      height: 100%;
      left: calc((100vw - 1200px) / -2);
    }
  }
  
   &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100vw;
    top: -1vw;
    left: 0;
    z-index: -1;
    pointer-events: none;
    transform-origin: 50%;
    
    transform: ${({ skew }: Props) =>
      skew === SelectableThemes.SkewNegative
        ? 'skewY(7deg)'
        : skew === SelectableThemes.SkewPositive
        ? 'skewY(-7deg)'
        : 'skewY(0deg)'};

    ${mqMin[MediaQuerySize.XL]} {
      left: calc((100vw - 1200px) / -2);
    }
  }

  ${(props: Props) =>
    props.selectedTheme === SelectableThemes.Mint && MintSectionItem}
  ${(props: Props) =>
    props.selectedTheme === SelectableThemes.Orange && OrangeSectionItem}
  ${(props: Props) =>
    props.selectedTheme === SelectableThemes.Darkblue && DarkBlueSectionItem}
`;

export const SectionContainer: React.FC<Props> = ({
  children,
  selectedTheme,
  skew,
  ...props
}: Props) => {
  const theme = useTheme();

  return (
    <SectionItem {...{ ...props, theme, selectedTheme, skew }}>
      {children}
    </SectionItem>
  );
};
