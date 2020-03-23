/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulService(filter: { node_locale: { eq: "en-US" } }) {
        edges {
          node {
            id
            slug
            headline
            description {
              description
            }
            services {
              headline
              description {
                description
              }
            }
          }
        }
      }
    }
  `);
  data.allContentfulService.edges
    .filter(edge => edge.node.services)
    .forEach(edge => {
      const { slug, id } = edge.node;
      actions.createPage({
        path: `/service/${slug}`,
        component: require.resolve(`./src/templates/serviceDetail.tsx`),
        context: { id: id },
      });
    });
};
