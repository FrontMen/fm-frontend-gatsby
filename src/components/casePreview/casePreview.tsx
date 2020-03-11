import { css } from '@emotion/core';
import * as React from 'react';

import { MediaQuerySize, mqMin } from '../../utils/breakpoints';
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
    box-shadow: rgba(0, 188, 212, 0.24) 0px 1px 3px 1px;
    cursor: pointer;
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

interface CasePreviewItemProps {
  caseStudy: Case;
}
interface CasePreviewProps {
  caseStudies?: Case[];
}

const CasePreviewItem: React.FC<CasePreviewItemProps> = ({
  caseStudy,
}: CasePreviewItemProps) => {
  const background = `https://picsum.photos/id/${`101${caseStudy.id}`}/640/360`;
  return (
    <div
      css={css`${styles.casePreviewItem}; background-image: url(${background})}`}
    >
      <h3>{caseStudy.title}</h3>
    </div>
  );
};

const CasePreview: React.FC<CasePreviewProps> = ({
  caseStudies,
}: CasePreviewProps) => {
  return (
    <>
      <h2>Enkele Cases</h2>
      <div css={styles.casePreviewContainer}>
        {caseStudies &&
          caseStudies.map((ca: Case) => (
            <CasePreviewItem key={ca.id} caseStudy={ca} />
          ))}
      </div>
    </>
  );
};

CasePreview.defaultProps = { caseStudies: items };
export default CasePreview;
