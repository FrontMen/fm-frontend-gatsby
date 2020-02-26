import * as React from 'react';
import { css } from '@emotion/core';
import { ContentfulLayoutHeroImage } from '../../types/graphql-types';

type Props = {
  headline: ContentfulLayoutHeroImage['headline'];
};

export const Hero: React.FC<Props> = ({ headline }: Props) => {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1200px;
        background-color: #ff9654;
      `}
      className="hero"
    >
      <h1>Frontmen</h1>
      <p>{headline}</p>
      <p>Now go build something great.</p>
    </div>
  );
};
