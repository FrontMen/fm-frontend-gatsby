import { css } from '@emotion/core';
import { Link } from 'gatsby';
import * as React from 'react';

import { MediaQuerySize, mqMin } from '../../utils/breakpoints';
import styled from '../../utils/styled';
import { Button } from '../../utils/styles/buttons';
import { rhythm } from '../../utils/typography';

type Case = {
  id: number;
  title: string;
  client: string;
};

interface CasePreviewItemProps {
  caseStudy: Case;
}

const spacing = rhythm(0.5);
const styles = {
  casePreviewItem: css`
    box-sizing: border-box;
    width: 100%;
    background-position: center;
    background-size: cover;
    min-height: ${rhythm(12)};
    margin-bottom: ${spacing};
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:after {
      content: '';
      pointer-events: none;
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(10, 10, 10, 0.4);
      top: 0;
      left: 0;
    }

    &:hover > a > div {
      transform: translateY(0px);
    }
    ${mqMin[MediaQuerySize.M]} {
      max-width: 80vw;
    }
    ${mqMin[MediaQuerySize.L]} {
      max-width: 49%;
    }
    ${mqMin[MediaQuerySize.XL]} {
      width: 100%;
      &:nth-of-type(1),
      &:nth-of-type(4) {
        max-width: 780px;
      }
      &:nth-of-type(2),
      &:nth-of-type(3) {
        max-width: 380px;
      }
    }
  `,
};

const CaseLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  position: relative;
  z-index: 2;
`;

const ClientLabel = styled.span`
  ${props => Button}
}
`;

const CaseContent = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  transform: translateY(${rhythm(2)});
  padding: ${rhythm(2)} ${rhythm(1)};
  color: ${({ theme }): string => theme.colors.background};
  transition: transform 300ms cubic-bezier(0, 0, 0.58, 1) 0s;
  padding-bottom: 0;
  width: 100%;
  max-width: 25em;
`;

export const CasePreviewItem: React.FC<CasePreviewItemProps> = ({
  caseStudy,
}: CasePreviewItemProps) => {
  const background = `https://picsum.photos/id/${`101${caseStudy.id}`}/640/360`;
  return (
    <article
      css={css`${styles.casePreviewItem}; background-image: url(${background})}`}
    >
      <CaseLink to="/">
        <CaseContent>
          <ClientLabel>{caseStudy.client}</ClientLabel>
          <h3>{caseStudy.title}</h3>
          <p>Read more about this case</p>
        </CaseContent>
      </CaseLink>
    </article>
  );
};
