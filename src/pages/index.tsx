import { css } from '@emotion/core';
import { graphql, Link } from 'gatsby';
import * as React from 'react';

import {
  ContentfulLayoutSetOfFour,
  HomePageQuery,
} from '../../types/graphql-types';
import CasePreview from '../components/casePreview/casePreview';
import ContentModules from '../components/contentModules';
import { ExternalLink } from '../components/ExternalLink';
import { HighlightServices } from '../components/highlightServices';
import { LayoutBody } from '../components/layout/layoutBody';
import ParallaxLayout from '../components/parallaxLayout';
import {
  SectionContainer,
  SelectableThemes,
} from '../components/sectionContainer';
import SEO from '../components/seo';

type Props = {
  data: HomePageQuery;
};

const IndexPage: React.FC<Props> = ({ data }: Props) => {
  const layout = data.contentfulLayout;
  const technologies = data.allContentfulTechnology.edges
    .filter(edge => edge.node.technology)
    .map(edge => {
      const { technology, url } = edge.node;
      return { technology, url };
    });
  const serviceWithHeadlines = data.allContentfulService.edges
    .filter(edge => edge.node.services)
    .map(edge => {
      const { headline, slug, services } = edge.node;
      const { description } = edge.node.description || { description: '' };
      const headlines = services ? services.map(serv => serv?.headline) : [];
      return { headline, slug, description, headlines };
    });

  const isSetOfFour = (
    variableToCheck: any
  ): variableToCheck is ContentfulLayoutSetOfFour =>
    // eslint-disable-next-line no-underscore-dangle
    !!(variableToCheck as ContentfulLayoutSetOfFour).setItems;

  const setOfFour: any = layout?.contentModules?.find(isSetOfFour);

  if (!layout) {
    return null;
  }
  return (
    <ParallaxLayout>
      {layout.title && <SEO title={layout.title} />}

      {layout.contentModules && (
        <ContentModules contentModules={layout.contentModules} />
      )}

      <SectionContainer>
        <CasePreview />
      </SectionContainer>
      <SectionContainer skew={SelectableThemes.SkewNegative} selectedTheme={SelectableThemes.Orange}>
        <ul>
          <li key="blogpost">
            <Link to="/blogPosts/">Go to blog posts (Source: Contentful)</Link>
          </li>
        </ul>
      </SectionContainer>
      <SectionContainer>
        <h1>Some of the clients we work for</h1>
        <ul>
          {isSetOfFour(setOfFour) &&
            setOfFour?.setItems?.map(
              (client, index) =>
                client?.link && (
                  <li key={index + 'link'}>
                    <ExternalLink to={client.link}>{client.title}</ExternalLink>
                  </li>
                )
            )}
        </ul>
      </SectionContainer>
      <SectionContainer
        selectedTheme={SelectableThemes.Darkblue}
      >
        <HighlightServices
          serviceWithHeadlines={serviceWithHeadlines}
        ></HighlightServices>
      </SectionContainer>
      {technologies && (
        <SectionContainer>
          <h1>Tech we work with</h1>
          {technologies.map(tech => {
            if (!tech.url) {
              return null;
            }
            return (
              <h3 key={tech.url}>
                <ExternalLink to={tech.url}>{tech.technology}</ExternalLink>
              </h3>
            );
          })}
        </SectionContainer>
      )}
      <SectionContainer
        skew={SelectableThemes.SkewNeutral}
        selectedTheme={SelectableThemes.Mint}
      >
        <LayoutBody
          title="Let's build together"
          payoff="Join a long list of satisfied clients, partners,
and successful businesses that we have had
the pleasure of working with."
          ctaLabel="Get in touch"
          ctaLink="/contact"
          appearance="Default"
        />
      </SectionContainer>
    </ParallaxLayout>
  );
};

export const query = graphql`
  query HomePage {
    contentfulLayout(node_locale: { eq: "en-US" }, slug: { eq: "home" }) {
      title
      contentModules {
        ... on ContentfulLayoutCopy {
          __typename
          appearance
          title
          ctaTitle
          ctaLink
          headline
          copy {
            copy
          }
        }
        ... on ContentfulLayoutHeroImage {
          __typename
          headline
          backgroundImage {
            fluid(maxWidth: 1200) {
              src
            }
          }
        }
        ... on ContentfulLayoutSetOfFour {
          __typename
          id
          setItems {
            link
            title
          }
        }
      }
    }
    allContentfulTechnology(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          technology
          url
        }
      }
    }
    allContentfulService(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          services {
            headline
            description {
              description
            }
          }
          slug
          headline
          description {
            description
          }
        }
      }
    }
  }
`;

export default IndexPage;
