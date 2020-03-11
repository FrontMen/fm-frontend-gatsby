import styled from '@emotion/styled';
import { Link } from 'gatsby';
import * as React from 'react';
import { ComponentType } from 'react';

import { Maybe, SiteSiteMetadataMenuLinks } from '../../types/graphql-types';
import { MediaQuerySize, mqMin } from '../utils/breakpoints';
import { rhythm } from '../utils/typography';

interface Props {
  menuLinks: Maybe<SiteSiteMetadataMenuLinks>[] | null | undefined;
}

// styles
const Nav = styled.nav`
  display: flex;
  top: 50px;
  left: 0;
  height: calc(100vh - 50px);
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: auto;
  position: absolute;
  background-color: #fff;
  transition: opacity 0.3s ease-out, transform 0.5s ease-in-out;
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;

  ${mqMin[MediaQuerySize.M]} {
    flex-direction: row;
    height: auto;
    top: 90px;
  }

  ${mqMin[MediaQuerySize.L]} {
    opacity: 1;
    transform: none;
    pointer-events: all;
    width: auto;
    top: auto;
    left: auto;
    position: relative;
  }
`;

const NavigationLink = styled(Link)`
  text-transform: uppercase;
  margin-left: ${rhythm(1)};
  text-decoration: none;
`;

const MenuLabel = styled.label`
  height: 50px;
  width: 50px;
  position: relative;
  align-self: flex-end;

  ${mqMin[MediaQuerySize.L]} {
    display: none;
  }
`;

const MenuLine = styled.span`
  display: block;
  background: #ff5900;
  width: 40px;
  height: 4px;
  position: absolute;
  border-radius: 4px;
  transition: top 0.2s ease-in-out 0.2s, transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out 0.3s;

  &:nth-child(1) {
    top: 5px;
  }
  &:nth-child(2) {
    background: #201e33;
    top: 20px;
  }

  &:nth-child(3) {
    background: #0cc;
    top: 35px;
  }
`;

const UnstyledCheckbox: React.FC = props => (
  <input type="checkbox" {...props} />
);

const HiddenMenuCheckbox = styled<React.FC<{ id: string }>>(UnstyledCheckbox)`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:checked ~ * {
    & > span {
      transition: top 0.3s ease-in-out, transform 0.4s ease-in-out 0.3s,
        opacity 0.4s ease-in-out;
      &:nth-child(1) {
        top: 20px;
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        top: 20px;
        transform: rotate(-45deg);
      }
    }

    &:not(label) {
      opacity: 1;
      transform: scale(1);
      transition: opacity 0.2s ease-out, transform 0.3s ease-in-out;
      pointer-events: all;
    }
  }
`;

// Nav functions
const createLinks = (menuLinks: Props['menuLinks'] = []) =>
  menuLinks?.map(
    ml =>
      ml?.link &&
      ml?.name && (
        <NavigationLink
          to={ml.link}
          key={`nav_link_${ml.name}`}
          activeStyle={{ color: 'green', fontWeight: 'bold' }}
          partiallyActive
        >
          {ml.name}
        </NavigationLink>
      )
  );

// exports
export const Navigation: React.FC<Props> = ({ menuLinks }: Props) => (
  <>
    <HiddenMenuCheckbox id="menucheckbox" />
    <MenuLabel htmlFor="menucheckbox">
      <MenuLine />
      <MenuLine />
      <MenuLine />
    </MenuLabel>
    <Nav>{createLinks(menuLinks)}</Nav>
  </>
);
