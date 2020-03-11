import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import * as React from 'react';

import { Maybe, SiteSiteMetadataMenuLinks } from '../../types/graphql-types';
import { MediaQuerySize, mqMin } from '../utils/breakpoints';
import { Navigation } from './navigation';
import { rhythm } from '../utils/typography';
import { COLORS } from '../utils/colors';

type Props = {
  siteTitle: string;
  menuLinks?: Maybe<SiteSiteMetadataMenuLinks>[] | null | undefined;
};

const Title = styled.h1`
  margin-bottom: 0;
  padding: 0 0 0 ${rhythm(1)};
`;

const Head = styled.header`
  background-color: ${COLORS.BACKGROUND_COLOR};
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

const HeaderLink = styled(Link)`
  color: ${COLORS.PRIMARY_FONT};
  text-decoration: none;

  &:hover,
  &:active,
  &:focus,
  &:visited {
    color: ${COLORS.PRIMARY_FONT};
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${COLORS.BACKGROUND_COLOR};

  ${mqMin[MediaQuerySize.XL]} {
    margin: 0 auto;
    max-width: 1200px;
  }
`;

const Header: React.FC<Props> = ({ siteTitle, menuLinks }: Props) => (
  <Head>
    <HeaderWrapper>
      <Title>
        <HeaderLink to="/">{siteTitle}</HeaderLink>
      </Title>
      <Navigation menuLinks={menuLinks} />
    </HeaderWrapper>
  </Head>
);

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
};

export default Header;
