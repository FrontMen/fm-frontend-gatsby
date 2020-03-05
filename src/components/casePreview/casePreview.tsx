import * as React from 'react';
import { css } from '@emotion/core';
import { rhythm } from '../../utils/typography';

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

const styles = {
  casePreviewContainer: css`
    -webkit-box-pack: justify;
    justify-content: center;
    display: flex;
    width: 100%;
    margin-bottom: ${rhythm(1)};
    flex-flow: wrap;
  `,
  casePreviewItem: css`
    box-sizing: border-box;
    width: 100%;
    max-width: 600px;
    background-position: center;
    background-size: cover;
    min-height: ${rhythm(15)};
    :not(:first-of-type) {
      margin-top: ${rhythm(1)};
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
