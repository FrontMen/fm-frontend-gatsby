import { css } from '@emotion/core';
import * as React from 'react';

import { ContentfulLayoutHeroImage } from '../../../types/graphql-types';
import { rhythm } from '../../utils/typography';

type Props = {
  cm: ContentfulLayoutHeroImage;
};

const styles = {
  heroContainer: css`
    min-height: 40vh;
    background-position: center;
    background-repeat: no-repeat;
  `,
  heroBody: css`
    max-width: 1200px;
    padding: ${rhythm(2)};
    color: #000;
    margin: 0 auto;
  `,
};

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
      <div css={styles.heroBody}>
        <h1>Frontmen</h1>
        <p>{cm.headline}</p>
      </div>
    </>
  );
};
