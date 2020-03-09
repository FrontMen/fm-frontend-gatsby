import * as React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { Navigation } from './navigation';
import styled from '@emotion/styled';
import { mqMin, MediaQuerySize } from '../utils/breakpoints';

type Props = {
  siteTitle: string;
  menuLinks: { link: string; name: string }[];
};

const Title = styled.h1`
  margin-bottom: 0;
`;

const Header: React.FC<Props> = ({ siteTitle, menuLinks }: Props) => (
  <header
    css={css`
      background-color: #fff;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
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
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
};

export default Header;
