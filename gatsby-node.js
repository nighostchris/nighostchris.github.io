const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  
  const result = await graphql(`
    query queryAllPosts {
      allWritingsJson {
        edges {
          node {
            title
            date
            description
          }
        }
      }
      allProjectsJson {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
  }

  const writings = result.data.allWritingsJson.edges;
  const writingsPerPage = 1;
  const numOfPages = Math.ceil(writings.length / writingsPerPage);

  const projects = result.data.allProjectsJson.edges;

  Array.from({ length: numOfPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? "/writings" : `/writings/${index + 1}`,
      component: path.resolve("./src/templates/writings.js"),
      context: {
        limit: writingsPerPage,
        skip: index * writingsPerPage,
        numOfPages,
        currentPage: index + 1
      },
    });
  });

  projects.forEach((project) => {
    createPage({
      path: `/projects/${project.node.title.toLowerCase().replace(/\([^)]*\)/, "").split(' ').join('-')}`,
      component: path.resolve("./src/templates/project.js"),
      context: {
        projectId: project.node.id
      }
    });
  });
};
