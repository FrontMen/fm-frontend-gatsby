import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import * as React from 'react';

import { ServiceDetailQuery } from '../../types/graphql-types';
import Layout from '../components/layout';
import { SectionContainer } from '../components/sectionContainer';
import SEO from '../components/seo';
import { MediaQuerySize, mqMin } from '../utils/breakpoints';
import styled from '../utils/styled';
import { rhythm } from '../utils/typography';

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
      <SectionContainer>
        <h1>Bedrijfsinnovatie & branding</h1>
        <p>
          Door een frisse, creative blik te combineren met gebruikers-validatie
          ontdekken wij de kansen die een onderscheidende waarde bieden.
        </p>
        <div css={css``}>
          <article
            css={css`
              display: flex;
              flex-direction: column;
              ${mqMin[MediaQuerySize.M]} {
                flex-direction: row;
              }
              border-bottom: 1px solid blue;
              margin: ${rhythm(1)};
            `}
          >
            <h2>Migrate to a modern Frontend stack</h2>
            <p>
              Technology is constantly evolving. By leveraging the most modern
              technologies you put yourself ahead of the competition, making
              your software more secure, reliable and maintainable
            </p>
          </article>
          <article
            css={css`
              display: flex;
              flex-direction: column;
              ${mqMin[MediaQuerySize.M]} {
                flex-direction: row;
              }
              border-bottom: 1px solid blue;
              margin: ${rhythm(1)};
            `}
          >
            <h2>Migrate to a modern Frontend stack</h2>
            <p>
              Technology is constantly evolving. By leveraging the most modern
              technologies you put yourself ahead of the competition, making
              your software more secure, reliable and maintainable
            </p>
            <blockquote>Some epic quote about something</blockquote>
          </article>
        </div>
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
