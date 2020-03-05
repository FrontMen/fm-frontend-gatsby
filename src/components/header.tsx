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
        margin: 0 auto;
        max-width: 1200px;
        padding: ${rhythm(1)};
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
