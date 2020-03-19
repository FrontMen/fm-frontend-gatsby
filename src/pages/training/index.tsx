import { graphql } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { TrainingPageQuery } from '../../../types/graphql-types';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';

type Props = {
  data: TrainingPageQuery;
};

const TrainingPage: React.FC<Props> = ({ data }: Props) => {
  return (
    <Layout>
      <SEO title="Training" />
      <SectionContainer>
        <h1>Training</h1>
      </SectionContainer>
    </Layout>
  );
};

export const query = graphql`
  query TrainingPage {
    contentfulLayout(slug: { eq: "Training" }) {
      slug
      title
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

export default TrainingPage;
