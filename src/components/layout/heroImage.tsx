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
    color: #ffffff;
    margin: 0 auto;
  `,
};

export const HeroImage: React.FC<Props> = ({ cm }: Props) => {
  const backGroundImageUrl = `https:${cm?.backgroundImage?.fluid?.src}`;
  return (
    <div
      css={css`
        ${styles.heroContainer};
        background-image: url(${backGroundImageUrl});
      `}
    >
      <div css={styles.heroBody}>
        <h1>Frontmen</h1>
        <p>{cm.headline}</p>
      </div>
    </div>
  );
};
