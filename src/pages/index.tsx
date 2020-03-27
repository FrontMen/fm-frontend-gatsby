import { graphql, Link } from 'gatsby';
import * as React from 'react';

import { HomePageQuery } from '../../types/graphql-types';
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
      <SectionContainer
        skew={SelectableThemes.SkewNegative}
        selectedTheme={SelectableThemes.Orange}
      >
        <ul>
          <li key="blogpost">
            <Link to="/blogPosts/">Go to blog posts (Source: Contentful)</Link>
          </li>
        </ul>
      </SectionContainer>
      <SectionContainer selectedTheme={SelectableThemes.Darkblue}>
        <HighlightServices serviceWithHeadlines={serviceWithHeadlines} />
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
          ...ContentfulLayoutCopyFragment
        }
        ... on ContentfulLayoutHeroImage {
          ...ContentfulLayoutHeroImageFragment
        }
        ... on ContentfulLayoutSetOfFour {
          id
          setItems {
            logo {
              file {
                fileName
                url
              }
            }
            title
            link
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
