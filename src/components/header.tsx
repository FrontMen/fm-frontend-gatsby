import * as React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { Navigation } from './navigation';
import { rhythm } from '../utils/typography';

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = ({ siteTitle }: Props) => (
  <header
    css={css`
      background-color: #ff6600;
    `}
  >
    <div
      css={css`
        padding: ${rhythm(1)};
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
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navigation />
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
