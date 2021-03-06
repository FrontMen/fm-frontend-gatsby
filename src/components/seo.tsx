/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

type metaType = Array<{
  property?: string;
  name?: string;
  content: string;
}>;
type Props = {
  description?: string;
  lang?: string;
  meta?: metaType;
  title: string;
  siteUrl?: string;
};

const SEO: React.FC<Props> = ({
  description,
  lang,
  meta,
  title,
  siteUrl,
}: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultMeta: metaType = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];
  const propMeta: metaType = defaultMeta.concat(meta || []);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={defaultMeta.concat(propMeta)}
    >
      <script type="application/ld+json">{`
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": "${title}"
      "url": "${siteUrl}"
    }
  `}</script>
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  siteUrl: 'https://www.frontmen.nl',
};

export default SEO;
