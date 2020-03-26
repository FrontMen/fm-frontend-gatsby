import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { Maybe, ServicesPageQuery } from '../../../types/graphql-types';
import ContentModules from '../../components/contentModules';
import { DebugData } from '../../components/debugData';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';

type Props = {
  data: ServicesPageQuery;
};
type ItemProps = {
  headline?: Maybe<string>;
  description?: Maybe<string>;
  slug?: Maybe<string>;
  ctaLabel?: Maybe<string>;
};

const ServicePreview = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServicePreviewItem: React.FC<ItemProps> = ({
  headline,
  description,
  slug,
  ctaLabel,
}: ItemProps) => {
  return (
    <ServicePreview>
      {/* Replace with gatsby image https://www.gatsbyjs.org/packages/gatsby-image/ */}
      <img src="https://placeimg.com/1000/600/tech" alt="tech" />
      <h2>{headline}</h2>
      <p>{description}</p>
      <Link to={`/service/${slug}`}>{ctaLabel}</Link>
    </ServicePreview>
  );
};

const ServicesPage: React.FC<Props> = ({ data }: Props) => {
  const title = data.contentfulLayout?.title || 'Services';
  const contentModules = data.contentfulLayout?.contentModules;

  const mappedServices = data.allContentfulService.edges
    .filter(edge => edge.node.services)
    .map(edge => {
      const { headline, slug, ctaLabel } = edge.node;
      const { description } = edge.node.description || { description: '' };
      // const headlines = services ? services.map(serv => serv?.headline) : [];
      return { headline, slug, description, ctaLabel };
    });
  return (
    <Layout>
      <SEO title={title} />
      <ContentModules contentModules={contentModules} />
      <SectionContainer>
        {mappedServices.map(service => (
          <ServicePreviewItem {...service} />
        ))}
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
          ...ContentfulLayoutCopyFragment
        }
      }
    }
    allContentfulService(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          payoff
          slug
          id
          headline
          ctaLabel
          services {
            id
          }
          description {
            description
          }
        }
      }
    }
  }
`;

export default ServicesPage;
