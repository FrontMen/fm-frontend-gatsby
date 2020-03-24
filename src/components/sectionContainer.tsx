import * as React from 'react';

import { rhythm } from '../utils/typography';

type Props = {
  children: React.ReactNode;
};

export const SectionContainer: React.FC<Props> = ({
  children,
  ...props
}: Props) => (
  <section
    css={{
      width: '100%',
      opacity: 1,
      maxWidth: '1200px',
      padding: '0px 12px',
      transition: 'opacity 400ms cubic-bezier(0, 0, 0, 1) 0s',
      margin: `${rhythm(2)} auto`,
    }}
    {...props}
  >
    {children}
  </section>
);
