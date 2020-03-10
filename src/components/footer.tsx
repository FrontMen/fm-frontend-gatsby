import styled from '@emotion/styled';
import React from 'react';

import { MediaQuerySize, mqMin } from '../utils/breakpoints';
import { rhythm } from '../utils/typography';

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background-color: #201e33;
  margin: 0 auto;
  padding-top: ${rhythm(1)};
  padding-bottom: ${rhythm(1)};
  min-height: ${rhythm(3)};
`;

const Leader = styled.h1`
  font-size: 36px;
  color: #ffffff;
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid #ffcc00;
  padding: 1em 0 2em;
  margin: 0 1.5em;
  color: #fff;
`;

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  ${mqMin[MediaQuerySize.S]} {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: blue;
    &:hover {
      color: darkblue;
    }
    &:visited {
      color: green;
    }
  }
`;

const Footer: React.FC = () => (
  <Wrapper>
    <Leader>Frontmen</Leader>
    <List>
      <Item>Amsterdam</Item>
      <Item>Eindhoven</Item>
      <Item>Utrecht</Item>
    </List>
  </Wrapper>
);

export default Footer;
