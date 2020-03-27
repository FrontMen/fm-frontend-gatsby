import { Link } from 'gatsby';
import * as React from 'react';

import { MediaQuerySize, mqMin } from '../utils/breakpoints';
import styled from '../utils/styled';
import { rhythm } from '../utils/typography';

// @TODO: fix types
type Props = {
  serviceWithHeadlines: any;
};

const HighlightedServices = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 100%;
  ${mqMin[MediaQuerySize.XL]} {
    align-items: stretch;
    flex-direction: row;
  }
`;
const ServiceTitle = styled.h2`
  text-decoration: none;
`;
const HighlightedService = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  width: 100%;
  margin-bottom: 48px;
`;
const ServiceList = styled.ul`
  text-transform: uppercase;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const ServiceListItem = styled.li`
  box-sizing: border-box;
  background-color: ${({ theme }): string => theme.colors.background};
  color: ${({ theme }): string => theme.colors.primary};
  border-radius: 4px;
  padding: ${rhythm(0.2)} ${rhythm(1)};
  list-style: none;
  margin-left: ${rhythm(1)};
  margin-bottom: ${rhythm(0.5)};
`;

export const HighlightServices: React.FC<Props> = ({
  serviceWithHeadlines,
}: Props) => {
  return (
    <HighlightedServices>
      {serviceWithHeadlines.map(
        // @TODO: fix types
        ({ headline, slug, description, headlines }: any) => {
          return (
            <HighlightedService key={headline}>
              <ServiceTitle>
                <Link to={`/service/${slug}`}>{headline}</Link>
              </ServiceTitle>
              <p>{description}</p>
              {headlines && (
                <ServiceList>
                  {headlines.map((hl: string) => (
                    <ServiceListItem key={hl}>{hl}</ServiceListItem>
                  ))}
                </ServiceList>
              )}
            </HighlightedService>
          );
        }
      )}
    </HighlightedServices>
  );
};
