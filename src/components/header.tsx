import { Link } from 'gatsby';
import * as React from 'react';

import { Maybe, SiteSiteMetadataMenuLinks } from '../../types/graphql-types';
import { MediaQuerySize, mqMin } from '../utils/breakpoints';
import styled from '../utils/styled';
import { rhythm } from '../utils/typography';
import { Navigation } from './navigation';

type Props = {
  siteTitle: string;
  menuLinks?: Maybe<SiteSiteMetadataMenuLinks>[] | null | undefined;
};

const Title = styled.h1`
  margin-bottom: 0;
  padding: 0 0 0 ${rhythm(1)};
`;

const Head = styled.header`
  background-color: ${({ theme }) => {
    return theme.colors.background;
  }};
  position: sticky;
  width: 100vw;
  top: 0;
  z-index: 2147483647;

  & + * {
    margin-top: 50px;
  }
`;

const HeaderLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;

  &:hover,
  &:active,
  &:focus,
  &:visited {
    color: ${props => props.theme.colors.primary};
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.background};

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
