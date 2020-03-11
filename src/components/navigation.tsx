import styled from '@emotion/styled';
import { Link } from 'gatsby';
import * as React from 'react';

import { Maybe, SiteSiteMetadataMenuLinks } from '../../types/graphql-types';
import { MediaQuerySize, mqMax, mqMin } from '../utils/breakpoints';
import { rhythm } from '../utils/typography';
import { COLORS } from '../utils/colors';

interface Props {
  menuLinks: Maybe<SiteSiteMetadataMenuLinks>[] | null | undefined;
}

const StyleConst = {
  LINE_WIDHT: '5px',
  MENU_HEIGTH: '50px',
};

// styles
const Nav = styled.nav`
  display: flex;
  top: ${StyleConst.MENU_HEIGTH};
  left: 0;
  height: calc(80vh - ${StyleConst.MENU_HEIGTH});
  width: 100vw;
  flex-direction: column;
  flex-basis: auto;
  font-size: 2em;
  position: absolute;
  background-color: ${COLORS.BACKGROUND_COLOR};
  transition: opacity 0.3s ease-out, transform 0.5s ease-in-out;
  opacity: 0;
  transform: translate(0, -100%);
  pointer-events: none;

  ${mqMax[MediaQuerySize.M]} {
    padding-top: ${rhythm(1)};
    z-index: -1;
  }

  &:after {
    ${mqMax[MediaQuerySize.M]} {
      content: '';
      position: absolute;
      border-left: 50vw solid transparent;
      border-right: 50vw solid transparent;
      border-top: 150px solid #fff;
      border-bottom: 150px solid transparent;
      margin-top: -1px;
      top: 100%;
    }
  }

  ${mqMin[MediaQuerySize.M]} {
    flex-direction: row;
    height: auto;
    font-size: 1em;
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
  color: ${COLORS.TERTIARY_FONT};

  &:hover,
  &:active,
  &:focus,
  &:visited {
    color: ${COLORS.TERTIARY_FONT};
  }
`;

const MenuLabel = styled.label`
  height: ${StyleConst.MENU_HEIGTH};
  width: ${StyleConst.MENU_HEIGTH};
  position: relative;
  align-self: flex-end;

  ${mqMin[MediaQuerySize.L]} {
    display: none;
  }
`;

const MenuLine = styled.span`
  display: block;
  background-color: ${COLORS.SECUNDARY_FONT};
  width: 40px;
  height: ${StyleConst.LINE_WIDHT};
  position: absolute;
  border-radius: ${StyleConst.LINE_WIDHT};
  transition: top 0.2s ease-in-out 0.2s, transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out 0.3s, width 0.4s ease-in-out;

  &:nth-child(1) {
    top: ${StyleConst.LINE_WIDHT};
  }
  &:nth-child(2) {
    background: ${COLORS.PRIMARY_FONT};
    top: 20px;
  }

  &:nth-child(3) {
    background: ${COLORS.TERTIARY_FONT};
    top: 35px;
    width: 30px;
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

  & ~ .overlay {
    z-index: -1;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(127, 127, 127, 0.95);
    opacity: 0;
    transition: opacity .4s ease-out;
  }
  &:checked {
    & ~ .overlay {
      opacity: 1;
      transition: opacity .5s ease-in-out;
    }

    & ~ * {
      & > span {
        transition: top 0.3s ease-in-out, transform 0.4s ease-in-out 0.3s,
          opacity 0.4s ease-in-out, width 0.4s ease-in-out;

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
          width: 40px;
        }
      }

      &:not(label) {
        opacity: 1;
        transform: translate(0, 0);
        transition: opacity 0.2s ease-out, transform 0.5s ease-in-out;
        pointer-events: all;
      }
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
          activeStyle={{ color: COLORS.SECUNDARY_FONT, fontWeight: 'bold' }}
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
    <span className="overlay" />
    <MenuLabel htmlFor="menucheckbox">
      <MenuLine />
      <MenuLine />
      <MenuLine />
    </MenuLabel>
    <Nav>{createLinks(menuLinks)}</Nav>
  </>
);
