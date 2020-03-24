import { graphql, Link } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { CasesPageQuery } from '../../../types/graphql-types';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';

type Props = {
  data: CasesPageQuery;
};

const CasesPage: React.FC<Props> = ({ data }: Props) => {
  return (
    <Layout>
      <SEO title="Cases" />
      <SectionContainer>
        <h1>Cases</h1>
      </SectionContainer>
    </Layout>
  );
};

export const query = graphql`
  query CasesPage {
    contentfulLayout(slug: { eq: "Cases" }) {
      slug
      #   slug
      #   title
      #   contentModules {
      #     ... on ContentfulLayoutHeroImage {
      #       id
      #       headline
      #       backgroundImage {
      #         fluid(maxWidth: 1200) {
      #           src
      #         }
      #       }
      #     }
      #     ... on ContentfulLayoutCallToAction {
      #       id
      #       title
      #       url
      #       label
      #     }
      #   }
    }
  }
`;

export default CasesPage;
