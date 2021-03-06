import * as React from 'react';

import { ContentfulLayoutHeroImage } from '../../../types/graphql-types';
import { MediaQuerySize, mqMin } from '../../utils/breakpoints';
import styled from '../../utils/styled';
import { rhythm, scale } from '../../utils/typography';
import { graphql } from 'gatsby';

type Props = {
  cm: ContentfulLayoutHeroImage;
};

const HeroBody = styled.div`
  max-width: 1200px;
  min-height: 80vh;
  padding: ${rhythm(2)};
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.primary};
`;
// ts-ignore-next-line
const Payoff = styled.h1`
  ${mqMin[MediaQuerySize.M]} {
    max-width: 80vw;
  }
  ${mqMin[MediaQuerySize.L]} {
    max-width: 60vw;
  }
`;
const SubHead = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

const generateBackgroundImageUrl = (
  cm: ContentfulLayoutHeroImage
): string | undefined => {
  return `https:${cm?.backgroundImage?.fluid?.src}`;
};

export const HeroImage: React.FC<Props> = ({ cm }: Props) => {
  const backgroundUrl = generateBackgroundImageUrl(cm);
  if (!cm || !backgroundUrl) {
    return null;
  }

  return (
    <>
      <HeroBody>
        <Payoff css={{ ...scale(1) }}>
          A technology partner for forward-thinking companies.
        </Payoff>
        <SubHead>{cm.headline}</SubHead>
      </HeroBody>
    </>
  );
};

export const query = graphql`
  fragment ContentfulLayoutHeroImageFragment on ContentfulLayoutHeroImage {
    __typename
    headline
    backgroundImage {
      fluid(maxWidth: 1200) {
        src
      }
    }
  }
`;
