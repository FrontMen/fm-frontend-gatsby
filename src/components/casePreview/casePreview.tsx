import { css } from '@emotion/core';
import { Link } from 'gatsby';
import * as React from 'react';

import { MediaQuerySize, mqMin } from '../../utils/breakpoints';
import styled from '../../utils/styled';
import { rhythm } from '../../utils/typography';

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

const CaseLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  position: relative;
`;

const ClientLabel = styled.span`
  display: block;
  padding: ${rhythm(0.25)};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const CaseContent = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  transform: translateY(${rhythm(2)});
  padding: ${rhythm(2)} ${rhythm(1)};
  color: ${({ theme }) => theme.colors.background};
  transition: transform 300ms cubic-bezier(0, 0, 0.58, 1) 0s;
  padding-bottom: 0;
`;

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
