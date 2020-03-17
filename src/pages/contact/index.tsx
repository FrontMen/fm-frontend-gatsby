import { graphql, Link } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { ContactPageQuery } from '../../../types/graphql-types';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

type Props = {
  data: ContactPageQuery;
};

const ContactPage: React.FC<Props> = ({ data }: Props) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <SectionContainer>
        <h1>Contact</h1>
      </SectionContainer>
    </Layout>
  );
};

export const query = graphql`
  query ContactPage {
    contentfulLayout(slug: { eq: "contact" }) {
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

export default ContactPage;
