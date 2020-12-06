const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  
  const result = await graphql(`
    query queryAllPosts {
      allWritingsJson {
        edges {
          node {
            id
            title
          }
        }
      }
      allProjectsJson {
        edges {
          node {
            id
            title
            imgalt
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
  }

  const writings = result.data.allWritingsJson.edges;
  const writingsPerPage = 5;
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
      path: `/projects/${project.node.imgalt}`,
      component: path.resolve("./src/templates/project.js"),
      context: {
        projectId: project.node.id
      }
    });
  });

  writings.forEach((writing, index) => {
    const pageNumber = Math.trunc(index / writingsPerPage);
    createPage({
      path: `/writings/${writing.node.title.toLowerCase().replace(/\([^)]*\)/, "").split(' ').join('-')}`,
      component: path.resolve("./src/templates/writing.js"),
      context: {
        writingId: writing.node.id,
        belongsToPage: pageNumber === 0 ? "/writings" : `/writings/${pageNumber + 1}`
      }
    });
  });
};
