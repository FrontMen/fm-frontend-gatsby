import * as React from 'react';
import { css } from '@emotion/core';
import { rhythm } from '../../utils/typography';
import { mqMin, MediaQuerySize } from '../../utils/breakpoints';

const items = [
  { id: 1, title: 'how we did this and that', client: 'klm' },
  { id: 2, title: 'how we did this and that', client: 'klm' },
  { id: 3, title: 'how we did this and that', client: 'klm' },
  { id: 4, title: 'how we did this and that', client: 'klm' },
];

type Case = {
  id: number;
  title: string;
  client: string;
};
const spacing = rhythm(0.5);
const styles = {
  casePreviewContainer: css`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: ${rhythm(1)};
    flex-flow: wrap;
    ${mqMin[MediaQuerySize.L]} {
      justify-content: space-between;
    }
  `,
  casePreviewItem: css`
    box-sizing: border-box;
    width: 100%;
    background-position: center;
    background-size: cover;
    min-height: ${rhythm(12)};
    margin-bottom: ${spacing};
    box-shadow: rgba(2, 29, 41, 0.2) 0px 1px 3px 1px;
    cursor: pointer;
    ${mqMin[MediaQuerySize.M]} {
      max-width: 80vw;
    }
    ${mqMin[MediaQuerySize.L]} {
      max-width: 49%;
    }
    ${mqMin[MediaQuerySize.XL]} {
      &:nth-of-type(1) {
        max-width: 780px;
      }
      &:nth-of-type(2) {
        max-width: 380px;
      }
    }
  `,
};

const CasePreviewItem: React.FC<{ caseStudy: Case }> = ({ caseStudy }) => {
  const background = `https://picsum.photos/id/${'101' + caseStudy.id}/640/360`;
  return (
    <div
      css={css`${styles.casePreviewItem}; background-image: url(${background})}`}
    >
      {caseStudy.title}
    </div>
  );
};

export const CasePreview: React.FC = () => {
  return (
    <div css={styles.casePreviewContainer}>
      {items.map((ca: Case) => (
        <CasePreviewItem key={ca.id} caseStudy={ca} />
      ))}
    </div>
  );
};
