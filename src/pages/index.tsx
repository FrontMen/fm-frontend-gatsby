import { graphql, Link } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import {
  ContentfulLayoutSetOfFour,
  HomePageQuery,
} from '../../types/graphql-types';
import CasePreview from '../components/casePreview/casePreview';
import ContentModules from '../components/contentModules';
import { ExternalLink } from '../components/ExternalLink';
import { CTABox } from '../components/layout/cta-container';
import ParallaxLayout from '../components/parallaxLayout';
import { SectionContainer } from '../components/sectionContainer';
import SEO from '../components/seo';
import { css } from '@emotion/core';

type Props = {
  data: HomePageQuery;
};

const IndexPage: React.FC<Props> = ({ data }: Props) => {
  const layout = data.contentfulLayout;

  const isSetOfFour = (
    variableToCheck: any
  ): variableToCheck is ContentfulLayoutSetOfFour =>
    // eslint-disable-next-line no-underscore-dangle
    !!(variableToCheck as ContentfulLayoutSetOfFour).setItems;

  const setOfFour: any = layout?.contentModules?.find(isSetOfFour);
  const services = [
    'Bedrijfsinnovatie & Branding',
    'Experience design & Development',
    'Organisational design & on-site talent',
  ];
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
      <SectionContainer>
        <ul>
          <li>
            <Link to="/blogPosts/">Go to blog posts (Source: Contentful)</Link>
          </li>
        </ul>
      </SectionContainer>
      <SectionContainer css={{ backgroundColor: '#00CCCC' }}>
        <h1>Some of the clients we work for</h1>
        <ul>
          {isSetOfFour(setOfFour) &&
            setOfFour?.setItems?.map(
              client =>
                client?.link && (
                  <li>
                    <ExternalLink to={client.link}>{client.title}</ExternalLink>
                  </li>
                )
            )}
        </ul>
      </SectionContainer>
      <SectionContainer>
        <div
          css={css`
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            display: flex;
            width: 100%;
          `}
        >
          {services.map(service => (
            <div
              css={css`
                position: relative;
                flex-direction: column;
                display: flex;
                width: 100%;
                margin-bottom: 48px;
              `}
            >
              <h2>{service}</h2>
            </div>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer>
        <CTABox
          title="Let's build together"
          payoff="Join a long list of satisfied clients, partners,
and successful businesses that we have had
the pleasure of working with."
          ctaLabel="Get in touch"
          ctaLink="/contact"
          appearance="Default"
        />
      </SectionContainer>
      <SectionContainer>
        <pre css={{ backgroundColor: '#efefef', overflow: 'scroll' }}>
          {JSON.stringify(layout, null, 2)}
        </pre>
      </SectionContainer>
    </ParallaxLayout>
  );
};

export const query = graphql`
  query HomePage {
    contentfulLayout(node_locale: { eq: "nl" }, slug: { eq: "home" }) {
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
  }
`;

export default IndexPage;
