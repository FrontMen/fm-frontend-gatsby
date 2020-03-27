import * as React from 'react';

import Layout from '../components/layout';
import { SectionContainer } from '../components/sectionContainer';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

export const CasePage: React.FC = ({ data }: any) => {
  return (
    <Layout>
      <SEO title="Specific case" />
      <SectionContainer>
        <h1>{data.title}</h1>
      </SectionContainer>
    </Layout>
  );
};

export const query = graphql`
  query CaseStudy($id: String!) {
    contentfulCaseStudy(id: { eq: $id }, node_locale: { eq: "en-US" }) {
      client {
        logo {
          fluid(maxWidth: 1200) {
            src
          }
          title
        }
        title
      }
    }
  }
`;
