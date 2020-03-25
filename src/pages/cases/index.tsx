import { graphql } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { CasesPageQuery } from '../../../types/graphql-types';
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
  return (
    <Layout>
      <SEO title={title} />
      <SectionContainer>
        <h1>{title}</h1>
      </SectionContainer>
      <DebugData data={layout} />
    </Layout>
  );
};

export const query = graphql`
  query CasesPage {
    contentfulLayout(
      node_locale: { eq: "en-US" }
      slug: { eq: "case-studies" }
    ) {
      slug
      title
      contentModules {
        ... on ContentfulLayoutCopy {
          ...ContentfulLayoutCopyFragment
        }
      }
    }
  }
`;

export default CasesPage;
