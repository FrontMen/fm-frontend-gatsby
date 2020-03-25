import { graphql } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { ServicesPageQuery } from '../../../types/graphql-types';
import ContentModules from '../../components/contentModules';
import { DebugData } from '../../components/debugData';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';

type Props = {
  data: ServicesPageQuery;
};

const ServicesPage: React.FC<Props> = ({ data }: Props) => {
  const title = data.contentfulLayout?.title || 'Services';
  const contentModules = data.contentfulLayout?.contentModules;
  return (
    <Layout>
      <SEO title={title} />
      <SectionContainer>
        <ContentModules contentModules={contentModules} />
      </SectionContainer>

      <DebugData data={data} />
    </Layout>
  );
};

export const query = graphql`
  query ServicesPage {
    contentfulLayout(slug: { eq: "services" }, node_locale: { eq: "en-US" }) {
      title
      contentModules {
        ... on ContentfulLayoutCopy {
          __typename
          id
          appearance
          headline
          copy {
            copy
          }
        }
      }
    }
  }
`;

export default ServicesPage;
