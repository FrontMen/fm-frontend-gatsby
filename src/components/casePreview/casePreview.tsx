import { graphql } from 'gatsby';
import * as React from 'react';

import { MediaQuerySize, mqMin } from '../../utils/breakpoints';
import styled from '../../utils/styled';
import { rhythm } from '../../utils/typography';
import { CasePreview, CasePreviewItem } from './casePreviewItem';

const items = [
  { id: '1', title: 'how we did this and that', client: 'klm', slug: '/cases' },
  {
    id: '2',
    title:
      'how we did this and that, and even more when we had time to wite long titles',
    client: 'klm',
    slug: '/cases',
  },
  {
    id: '3',
    title: 'how we did this and that',
    client: 'Heineken',
    slug: '/cases',
  },
  { id: '4', title: 'how we did this and that', client: 'klm', slug: '/cases' },
];

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
  caseStudies?: CasePreview[];
}

const CasePreviewComponent: React.FC<CasePreviewProps> = ({
  caseStudies,
}: CasePreviewProps) => {
  return (
    <>
      <CasePreviewContainer>
        {caseStudies &&
          caseStudies.map((ca: CasePreview) => (
            <CasePreviewItem key={ca.id} caseStudy={ca} />
          ))}
      </CasePreviewContainer>
    </>
  );
};

CasePreviewComponent.defaultProps = { caseStudies: items };
export default CasePreviewComponent;

export const query = graphql`
  fragment ContentfulCaseStudyPreviewFragment on ContentfulCaseStudy {
    id
    title
    shortDescription
    slug
    client {
      title
    }
    technologies {
      technology
    }
    imageOrVideo {
      fluid(maxWidth: 1200) {
        src
      }
    }
  }
`;
