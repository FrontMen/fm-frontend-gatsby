import * as React from 'react';
import { css } from '@emotion/core';
// eslint-disable-next-line import/no-unresolved
import { ContentfulLayoutHeroImage } from '../../types/graphql-types';

type Props = {
  data: ContentfulLayoutHeroImage;
};

const styles = {
  heroContainer: css`
    background-color: rgba(0, 30, 34, 0.8);
    min-height: 20vh;
    background-position: center;
    background-repeat: no-repeat;
  `,
  heroBody: css`
    color: #ffffff;
    margin: 0 auto;
    max-width: 1200px;
  `,
};

export const HeroImage: React.FC<Props> = ({ data }: Props) => {
  const backGroundImageUrl = `https:${data.backgroundImage.fluid.src}`;
  return (
    <div
      css={css`
        ${styles.heroContainer};
        background-image: url(${backGroundImageUrl});
      `}
    >
      <div css={styles.heroBody}>
        <h1>Frontmen</h1>
        <p>{data.headline}</p>
      </div>
    </div>
  );
};
