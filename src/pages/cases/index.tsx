import { graphql } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { CasesPageQuery } from '../../../types/graphql-types';
import CasePreview from '../../components/casePreview/casePreview';
import ContentModules from '../../components/contentModules';
import { DebugData } from '../../components/debugData';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';

type Props = {
  data: CasesPageQuery;
};

const CasesPage: React.FC<Props> = ({ data }: Props) => {
  const layout = data.contentfulLayout;
  const title = layout?.title || 'Case Studies';
  const caseStudies = data.allContentfulCaseStudy.edges
    .filter(edge => edge.node.title)
    .map(edge => {
      const { node } = edge;
      const backgroundImageUrl = node.imageOrVideo?.fluid?.src;
      return {
        id: node.id,
        title: node.title,
        client: node.client?.title,
        slug: node.slug,
        backgroundImageUrl,
      };
    });
  return (
    <Layout>
      <SEO title={title} />
      {layout?.contentModules && (
        <ContentModules contentModules={layout.contentModules} />
      )}
      <SectionContainer>
        <CasePreview caseStudies={caseStudies} />
      </SectionContainer>

      <DebugData data={data} />
    </Layout>
  );
};

export const query = graphql`
  query CasesPage($lang: String = "en-US") {
    contentfulLayout(node_locale: { eq: $lang }, slug: { eq: "case-studies" }) {
      slug
      title
      contentModules {
        ... on ContentfulLayoutCopy {
          ...ContentfulLayoutCopyFragment
        }
      }
    }
    allContentfulCaseStudy(filter: { node_locale: { eq: $lang } }) {
      edges {
        node {
          ...ContentfulCaseStudyPreviewFragment
        }
      }
    }
  }
`;

export default CasesPage;
