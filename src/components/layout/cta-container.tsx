import { css } from '@emotion/core';
import { Link } from 'gatsby';
import * as React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import { rhythm, scale } from '../../utils/typography';
import styled from '../../utils/styled';

type Props = {
  title: string;
  payoff: string;
  ctaLabel: string;
  ctaLink: string;
  appearance: string;
};
const Container = styled.div`
  text-align: center;
  padding: ${rhythm(3)} 0;
`;
const Title = styled.h1({ ...scale(1.5) });
const Payoff = styled.h3({ ...scale(0.7) });

export const CTABox: React.FC<Props> = ({
  title,
  payoff,
  ctaLabel,
  ctaLink,
  appearance,
}: Props) => {
  const CtaLink =
    ctaLink && ctaLabel ? <Link to={ctaLink}>{ctaLabel}</Link> : null;
  console.log(appearance);
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {appearance === 'Emphasized' ? (
        <ReactMarkdown source={payoff} escapeHtml={false} />
      ) : (
        <Payoff>{payoff}</Payoff>
      )}
      {CtaLink}
    </Container>
  );
};
