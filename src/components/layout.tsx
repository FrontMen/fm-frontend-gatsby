/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect } from 'react';

import Footer from './footer';
import Header from './header';
import { useSiteMetadata } from '../hooks/useSiteMetaData';
import styled, { theme } from '../utils/styled';
import { rhythm } from '../utils/typography';
import { ParallaxContainer } from './Parralax';
import { Polygon } from './Polygon';

type Props = {
  children: React.ReactNode;
};

const Skip = styled.a`
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
  }
`;

const headerFooterHight = rhythm(6);

const Main = styled.main`
  min-height: calc(100vh - ${headerFooterHight});
`;

const Layout: React.FC<Props> = ({ children }: Props) => {
  const data = useSiteMetadata();
  function handleFirstTab(e: KeyboardEvent): void {
    if (e.keyCode === 9) {
      // eslint-disable-next-line no-undef
      document.body.classList.add('user-is-tabbing');
    }
  }
  // eslint-disable-next-line no-undef
  useEffect(() => window.addEventListener('keydown', handleFirstTab), []);
  return (
    <ThemeProvider theme={theme}>
      <Skip href="#main">Skip to main content</Skip>
      <ParallaxContainer>
        <ParallaxContainer.ParallaxItem
          top="0%"
          left="240%"
          scale={6}
          zlocation={-100}
        >
          <Polygon color={theme.colors.quinary} />
        </ParallaxContainer.ParallaxItem>
        <ParallaxContainer.ParallaxItem
          top="40%"
          left="70%"
          scale={0.35}
          zlocation={2}
        >
          <Polygon color={theme.colors.secondary} />
        </ParallaxContainer.ParallaxItem>
        <ParallaxContainer.ParallaxItem
          top="50%"
          left="60%"
          scale={0.8}
          zlocation={1}
        >
          <Polygon color={theme.colors.tertiary} />
        </ParallaxContainer.ParallaxItem>
        <ParallaxContainer.ParallaxItem
          top="20%"
          left="50%"
          scale={2}
          zlocation={-20}
        >
          <Polygon color={theme.colors.primary} />
        </ParallaxContainer.ParallaxItem>
        <ParallaxContainer.ParallaxItem
          top="50%"
          left="30%"
          scale={0.5}
          zlocation={2}
        >
          <Polygon color={theme.colors.primary} />
        </ParallaxContainer.ParallaxItem>
        <ParallaxContainer.ParallaxItem
          top="20%"
          left="70%"
          scale={0.7}
          zlocation={3}
        >
          <Polygon color={theme.colors.primary} />
        </ParallaxContainer.ParallaxItem>
        <ParallaxContainer.ParallaxItem
          top="50%"
          left="40%"
          scale={0.4}
          zlocation={0.5}
        >
          <Polygon color={theme.colors.secondary} />
        </ParallaxContainer.ParallaxItem>
        <ParallaxContainer.ParallaxItem
          top="30%"
          left="40%"
          scale={0.25}
          zlocation={3}
        >
          <Polygon color={theme.colors.quinary} />
        </ParallaxContainer.ParallaxItem>
        <ParallaxContainer.ParallaxItem
          top="45%"
          left="35%"
          scale={0.2}
          zlocation={6}
        >
          <Polygon color={theme.colors.tertiary} />
        </ParallaxContainer.ParallaxItem>

        <Header
          siteTitle={data.title || 'Frontmen'}
          menuLinks={data.menuLinks}
        />
        <Main id="main">{children}</Main>
        <Footer />
      </ParallaxContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
