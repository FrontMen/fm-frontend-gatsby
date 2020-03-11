import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import * as React from 'react';

import { Maybe, SiteSiteMetadataMenuLinks } from '../../types/graphql-types';
import { MediaQuerySize, mqMin } from '../utils/breakpoints';
import { Navigation } from './navigation';

type Props = {
  siteTitle: string;
  menuLinks?: Maybe<SiteSiteMetadataMenuLinks>[] | null | undefined;
};

const Title = styled.h1`
  margin-bottom: 0;
`;

const Head = styled.header`
  background-color: #fff;
  position: fixed;
  width: 100vw;
  top: 0;

  ${mqMin[MediaQuerySize.M]} {
    padding: 20px;
  }

  & + * {
    margin-top: 50px;
  }
`;

const Header: React.FC<Props> = ({ siteTitle, menuLinks }: Props) => (
  <Head>
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        ${mqMin[MediaQuerySize.XL]} {
          margin: 0 auto;
          max-width: 1200px;
        }
      `}
    >
      <Title>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Title>
      <Navigation menuLinks={menuLinks} />
    </div>
  </Head>
);

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
};

export default Header;
