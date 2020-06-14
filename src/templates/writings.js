import React from "react";
import { graphql } from 'gatsby';
import Root from "../components/root/Root";

const WritingsTemplate = ({ data }) => {
  const writings = data.allPostsJson.edges;
  
  console.log(data);

  return (
    <Root>
      {
        writings.map(({ node }) => (
          <div>
            <h1>{node.title}</h1>
            <h2>{node.date}</h2>
            <div>{node.content}</div>
          </div>
        ))
      }
    </Root>
  );
};

export const writingsListQuery = graphql`
  query writingsListQuery($skip: Int!, $limit: Int!) {
    allPostsJson(
      skip: $skip,
      limit: $limit
    ) {
      edges {
        node {
          title
          date
          content
        }
      }
    }
  }
`;

export default WritingsTemplate;
