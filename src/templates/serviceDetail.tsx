import { graphql } from 'gatsby';
import * as React from 'react';

import { ServiceDetailQuery } from '../../types/graphql-types';
import Layout from '../components/layout';
import { SectionContainer } from '../components/sectionContainer';
import SEO from '../components/seo';
import styled from '../utils/styled';

type Props = {
  data: ServiceDetailQuery;
};

const ServiceDetail = styled.article``;

const ServiceDetailPage: React.FC<Props> = ({ data }: Props) => {
  const service = data.contentfulService;
  if (!service) {
    return null;
  }
  return (
    <Layout>
      <SEO title={service?.headline || 'Service'} />
      <SectionContainer>
        <h1>{service.headline}</h1>
        <p>{service?.description?.description}</p>
      </SectionContainer>
      <SectionContainer>
        {service.services?.map(
          s =>
            s && (
              <ServiceDetail>
                <h2>{s.headline}</h2>
                <p>{s.description?.description}</p>
                {s.payoff && <blockquote>{s.payoff}</blockquote>}
              </ServiceDetail>
            )
        )}
      </SectionContainer>
    </Layout>
  );
};

export const query = graphql`
  query ServiceDetail($id: String!) {
    contentfulService(id: { eq: $id }, node_locale: { eq: "en-US" }) {
      payoff
      headline
      description {
        description
      }
      services {
        description {
          description
        }
        headline
        payoff
      }
    }
  }
`;

export default ServiceDetailPage;
