require('dotenv').config();

const { menuLinks } = require('./src/data/staticPagesConfig');
const plugins = require('./gatsby-plugins');
const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: `Frontmen`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Frontmen`,
    siteUrl: 'https://www.frontmen.nl',
    menuLinks,
    languages,
  },
  plugins,
};
