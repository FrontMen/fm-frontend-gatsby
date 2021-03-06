const languages = require('./src/data/languages');

module.exports = [
  `gatsby-plugin-typescript`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  { resolve: `gatsby-plugin-emotion` },
  {
    resolve: 'gatsby-plugin-i18n',
    options: {
      langKeyDefault: languages.defaultLangKey,
      useLangKeyLayout: false,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      host: `preview.contentful.com`,
    },
  },
  {
    resolve: `gatsby-plugin-graphql-codegen`,
    options: {
      fileName: `types/graphql-types.d.ts`,
      plugins: ['typescript'],
    },
  },
  {
    resolve: 'gatsby-plugin-typography',
    options: {
      pathToConfigModule: `src/utils/typography`,
      omitGoogleFont: true,
    },
  },
  /* eslint-enable @typescript-eslint/camelcase */
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
];
