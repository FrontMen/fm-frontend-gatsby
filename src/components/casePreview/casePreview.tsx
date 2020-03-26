import * as React from 'react';

import { MediaQuerySize, mqMin } from '../../utils/breakpoints';
import styled from '../../utils/styled';
import { rhythm } from '../../utils/typography';
import { CasePreviewItem } from './casePreviewItem';

const items = [
  { id: 1, title: 'how we did this and that', client: 'klm' },
  {
    id: 2,
    title:
      'how we did this and that, and even more when we had time to wite long titles',
    client: 'klm',
  },
  { id: 3, title: 'how we did this and that', client: 'Heineken' },
  { id: 4, title: 'how we did this and that', client: 'klm' },
];

type Case = {
  id: number;
  title: string;
  client: string;
};

const CasePreviewContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: ${rhythm(1)};
  flex-flow: wrap;
  ${mqMin[MediaQuerySize.L]} {
    justify-content: space-between;
  }
`;

interface CasePreviewProps {
  caseStudies?: Case[];
}

const CasePreview: React.FC<CasePreviewProps> = ({
  caseStudies,
}: CasePreviewProps) => {
  return (
    <>
      <h2>Enkele Cases</h2>
      <CasePreviewContainer>
        {caseStudies &&
          caseStudies.map((ca: Case) => (
            <CasePreviewItem key={ca.id} caseStudy={ca} />
          ))}
      </CasePreviewContainer>
    </>
  );
};

CasePreview.defaultProps = { caseStudies: items };
export default CasePreview;
