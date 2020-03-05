import * as React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm, scale } from '../../utils/typography';

type Props = {
  title: string;
  payoff: string;
  ctaLabel: string;
  ctaLink: string;
};

const styles = {
  box: css`
    text-align: center;
    padding: ${rhythm(3)} 0;
  `,
  title: {
    ...scale(1.5),
  },
  payoff: {
    ...scale(0.7),
  },
};

export const CTABox: React.FC<Props> = ({
  title,
  payoff,
  ctaLabel,
  ctaLink,
}: Props) => {
  return (
    <div css={styles.box}>
      <h1 css={styles.title}>{title}</h1>
      <h6 css={styles.payoff}>{payoff}</h6>
      <Link to={ctaLink}>{ctaLabel}</Link>
    </div>
  );
};
