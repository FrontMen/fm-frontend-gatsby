import { useStaticQuery, graphql } from 'gatsby';
import { SiteSiteMetadata } from '../../types/graphql-types';

export const useSiteMetadata = (): SiteSiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetaData {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
