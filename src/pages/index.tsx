import { graphql, Link } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { HomePageQuery } from '../../types/graphql-types';
import CasePreview from '../components/casePreview/casePreview';
import { CTABox } from '../components/layout/cta-container';
import { HeroImage } from '../components/layout/heroImage';
import { SectionContainer } from '../components/sectionContainer';
import SEO from '../components/seo';
import ParallaxLayout from '../components/parallaxLayout';
import ContentModules from '../components/contentModules';

type Props = {
  data: HomePageQuery;
};

const renderContentModules = (contentModules: any = []): React.FC => {
  return contentModules?.map((cm: any) => {
    if (!cm?.__typename) {
      return null;
    }
    switch (cm.__typename) {
      case 'ContentfulLayoutHeroImage':
        return <HeroImage cm={cm} key={cm.id} />;
      case 'ContentfulLayoutCopy':
        return (
          <SectionContainer>
            <CTABox
              title={cm.headline}
              payoff={cm.copy.copy}
              ctaLabel={cm.ctaTitle}
              ctaLink={cm.ctaLink}
              appearance={cm.appearance}
            />
          </SectionContainer>
        );
      default:
        return null;
        break;
    }
  });
};

const IndexPage: React.FC<Props> = ({ data }: Props) => {
  const layout = data.contentfulLayout;

  if (!layout) {
    return null;
  }
  return (
    <ParallaxLayout>
      {layout.title && <SEO title={layout.title} />}

      {layout.contentModules && (
        <ContentModules contentModules={layout.contentModules}></ContentModules>
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
      }
    }
  }
`;

export default IndexPage;
