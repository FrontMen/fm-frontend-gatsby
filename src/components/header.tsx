import * as React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { Navigation } from './navigation';

type Props = {
  siteTitle: string;
  menuLinks: { link: string; name: string }[];
};

const Header: React.FC<Props> = ({ siteTitle, menuLinks }: Props) => (
  <header
    css={css`
      background-color: #fff;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        @media only screen and (min-width: 64em) {
          margin: 0 auto;
          max-width: 1200px;
        }
      `}
    >
      <h1>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navigation menuLinks={menuLinks} />
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
};

export default Header;
