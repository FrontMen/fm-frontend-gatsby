import * as React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { Hero } from '../components/hero';

const styles = {
  imageContainer: css`
    max-width: 300px;
    margin-bottom: 1.45rem;
    margin-left: auto;
    margin-right: auto;
  `,
};

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
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

export default IndexPage;
