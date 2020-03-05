/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { useEffect } from 'react';

import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Header from './header';
import { useSiteMetadata } from '../hooks/useSiteMetaData';

import Footer from './footer';
import { rhythm } from '../utils/typography';

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
    top: 0;
  }
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
  const headerFooterHight = rhythm(6);

  return (
    <>
      <Skip href="#main">Skip to main content</Skip>
      <Header siteTitle={data.title || 'Frontmen'} />
      <main
        id="main"
        css={css`
          min-height: calc(100vh - ${headerFooterHight});
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
