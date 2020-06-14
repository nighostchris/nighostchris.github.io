const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  
  const result = await graphql(`
    query queryAllPosts {
      allPostsJson {
        edges {
          node {
            title
            date
            content
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
  }

  const writings = result.data.allPostsJson.edges;
  const writingsPerPage = 5;
  const numOfPages = Math.ceil(writings.length / writingsPerPage);

  console.log(writings, writingsPerPage, numOfPages);

  Array.from({ length: numOfPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? "/writings/" : `/writings/${index + 1}/`,
      component: path.resolve("./src/templates/writings.js"),
      context: {
        limit: writingsPerPage,
        skip: index * writingsPerPage,
        numOfPages,
        currentPage: index + 1
      },
    });
  });
};
