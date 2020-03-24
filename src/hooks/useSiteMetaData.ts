import { graphql, useStaticQuery } from 'gatsby';

// eslint-disable-next-line import/no-unresolved
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
            menuLinks {
              name
              link
            }
            languages {
              langs
              defaultLangKey
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
