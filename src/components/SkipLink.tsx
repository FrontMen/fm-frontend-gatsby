import * as React from 'react';

import styled from '../utils/styled';

const Skip = styled.a`
  padding: 0 1rem;
  line-height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`;
function handleFirstTab(e: KeyboardEvent): void {
  if (e.keyCode === 9) {
    // eslint-disable-next-line no-undef
    document.body.classList.add('user-is-tabbing');
  }
}

export const SkipLink: React.FC = () => {
  // eslint-disable-next-line no-undef
  React.useEffect(() => window.addEventListener('keydown', handleFirstTab), []);
  return <Skip href="#main">Go to main content</Skip>;
};
