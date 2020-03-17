import { graphql, Link } from 'gatsby';
import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { HomePageQuery } from '../../types/graphql-types';
import CasePreview from '../components/casePreview/casePreview';
import { CTABox } from '../components/layout/cta-container';
import { HeroImage } from '../components/layout/heroImage';
import { SectionContainer } from '../components/sectionContainer';
import SEO from '../components/seo';
import Layout from '../components/layout';

type Props = {
  data: HomePageQuery;
};

const renderContentModules = (contentModules: any = []): React.FC => {
  return contentModules?.map((cm: any) => {
    if (!cm || !cm.backgroundImage) {
      return null;
    }
    return <HeroImage cm={cm} key={cm.id} />;
  });
};

const IndexPage: React.FC<Props> = ({ data }: Props) => {
  const layout = data.contentfulLayout;

  if (!layout) {
    return null;
  }
  return (
    <Layout>
      {layout.title && <SEO title={layout.title} />}

      {layout.contentModules && renderContentModules(layout.contentModules)}
      <SectionContainer>
        <CTABox
          title="Up Front Technology"
          payoff="We are always keen to be at the front of new technologies. we help set new standards for online and mobile applications that help deliver more value to their customers..."
          ctaLabel="What we offer"
          ctaLink="/cases"
        />
      </SectionContainer>
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
        />
      </SectionContainer>
    </Layout>
  );
};

export const query = graphql`
  query HomePage {
    contentfulLayout(slug: { eq: "home" }) {
      slug
      title
      contentModules {
        ... on ContentfulLayoutHeroImage {
          id
          headline
          backgroundImage {
            fluid(maxWidth: 1200) {
              src
            }
          }
        }
        ... on ContentfulLayoutCallToAction {
          id
          title
          url
          label
        }
      }
    }
  }
`;

export default IndexPage;
