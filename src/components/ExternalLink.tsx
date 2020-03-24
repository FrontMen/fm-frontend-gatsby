import * as React from 'react';

type Props = {
  children: React.ReactNode;
  to: string;
};

export const ExternalLink: React.FC<Props> = ({ to, children }: Props) => (
  <a href={to} rel="noopener noreferrer">
    {children}
  </a>
);
