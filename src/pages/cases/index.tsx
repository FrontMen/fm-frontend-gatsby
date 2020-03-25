import { graphql } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { CasesPageQuery } from '../../../types/graphql-types';
import ContentModules from '../../components/contentModules';
import { DebugData } from '../../components/debugData';
import Layout from '../../components/layout';
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
      {layout?.contentModules && (
        <ContentModules contentModules={layout.contentModules} />
      )}
      <DebugData data={data} />
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
