import { graphql, Link } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { ServicesPageQuery } from '../../../types/graphql-types';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';

type Props = {
  data: ServicesPageQuery;
};

const ServicesPage: React.FC<Props> = ({ data }: Props) => {
  return (
    <Layout>
      <SEO title="Services" />
      <SectionContainer>
        <h1>Services</h1>
      </SectionContainer>
    </Layout>
  );
};

export const query = graphql`
  query ServicesPage {
    contentfulLayout(slug: { eq: "services" }) {
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

export default ServicesPage;
