/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import * as React from 'react';

import { useSiteMetadata } from '../hooks/useSiteMetaData';
import styled from '../utils/styled';
import { rhythm } from '../utils/typography';
import BaseLayout from './baseLayout';
import Footer from './footer';
import Header from './header';

type Props = {
  children: React.ReactNode;
};

const headerFooterHight = rhythm(6);

const Main = styled.main`
  min-height: calc(100vh - ${headerFooterHight});
`;

const Layout: React.FC<Props> = ({ children }: Props) => {
  const data = useSiteMetadata();
  return (
    <BaseLayout>
      <Header siteTitle={data.title || 'Frontmen'} menuLinks={data.menuLinks} />
      <Main id="main">{children}</Main>
      <Footer />
    </BaseLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
