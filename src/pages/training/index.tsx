import { graphql } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { TrainingPageQuery } from '../../../types/graphql-types';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import ContentModules from '../../components/contentModules';
import { DebugData } from '../../components/debugData';

type Props = {
  data: TrainingPageQuery;
};

const TrainingPage: React.FC<Props> = ({ data }: Props) => {
  const layout = data.contentfulLayout;
  const title = layout?.title || 'Training';

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
  query TrainingPage($lang: String = "en-US") {
    contentfulLayout(node_locale: { eq: $lang }, slug: { eq: "training" }) {
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

export default TrainingPage;
