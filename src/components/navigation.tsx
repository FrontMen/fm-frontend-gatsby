import * as React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';

interface Props {
  menuLinks: { name: string; link: string }[];
}

export const Navigation: React.FC<Props> = ({ menuLinks }: Props) => (
  <nav
    css={css`
      display: flex;
      flex-basis: auto;
    `}
  >
    {menuLinks &&
      menuLinks.map(ml => (
        <Link
          to={ml.link}
          key={`nav_link_${ml.name}`}
          css={css`
            text-transform: uppercase;
            margin-left: ${rhythm(1)};
          `}
        >
          {ml.name}
        </Link>
      ))}
  </nav>
);
