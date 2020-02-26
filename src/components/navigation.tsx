import * as React from 'react';
import { Link } from 'gatsby';

export const Navigation: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="/page-2/">Go to page 2</Link>
      </li>
    </ul>
  </nav>
);
