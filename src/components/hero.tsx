import * as React from 'react';
import { css } from '@emotion/core';

export const Hero: React.FC = () => {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1200px;
        background-color: #ff9654;
      `}
      className="hero"
    >
      <h1>Frontmen</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </div>
  );
};
