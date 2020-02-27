import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { HeroImage } from '../components/heroImage';
import { HomePageQuery } from '../../types/graphql-types';

const styles = {
  imageContainer: css`
    max-width: 300px;
    margin-bottom: 1.45rem;
    margin-left: auto;
    margin-right: auto;
  `,
};

type Props = {
  data: HomePageQuery;
};

const IndexPage: React.FC<Props> = ({ data }: Props) => {
  const layout = data.contentfulLayout;

  if (!layout) {
    return null;
  }
  return (
    <Layout>
      {layout.title && <SEO title={layout.title} />}
      {layout.contentModules.map(cm => (
        <HeroImage data={cm} key={cm.id} />
      ))}
      <section>
        <div css={styles.imageContainer}>
          <Image />
        </div>
        <ul>
          <li>
            <Link to="/page-2/">Go to page 2</Link>
          </li>
          <li>
            <Link to="/blogPosts/">Go to blog posts (Source: Contentful)</Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query HomePage {
    contentfulLayout(slug: { eq: "home" }) {
      title
      slug
      contentModules {
        id
        headline
        backgroundImage {
          fluid(maxWidth: 1200) {
            src
          }
          title
        }
      }
    }
  }
`;

export default IndexPage;
