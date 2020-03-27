import * as React from 'react';
import { ExternalLink } from './ExternalLink';
import styled from '@emotion/styled';

export type Client = {
  title?: string;
  link?: string;
  logo?: {
    file: {
      url: string;
      fileName: string;
    };
  };
};

type ClientProps = {
  clients: Array<Client>;
};

const Image = styled.img`
  height: 20px;
  width: 20px;

`;

export const Clients: React.FC<ClientProps> = ({ clients }: ClientProps) => {
  const clientsList = clients?.map(
    ({ link, title, logo }: Client, index) =>
      link && (
        <li key={title || index}>
          <ExternalLink to={link}>
            {title}{' '}
            {logo?.file && (
              <Image alt={logo.file?.fileName} src={logo.file?.url} />
            )}
          </ExternalLink>
        </li>
      )
  );

  return (
    <>
      <h1>Some of the clients we work for</h1>
      <ul>{clientsList}</ul>
    </>
  );
};
