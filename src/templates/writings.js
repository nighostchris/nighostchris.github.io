import React from "react";
import { graphql } from 'gatsby';
import Root from "../components/root/Root";

const WritingsTemplate = ({ data, pageContext }) => {
  const writings = data.allPostsJson.edges;
  const { numOfPages } = pageContext;
  
  console.log(data, numOfPages);

  return (
    <Root>
      {/* {
        writings.map(({ node }) => (
          <div>
            <h1>{node.title}</h1>
            <h2>{node.date}</h2>
            <div>{node.content}</div>
          </div>
        ))
      } */}
        <div className="main-content-writings">
          <div className="terminal">
            <div className="terminal-top-bar">
              <p className="terminal-top-bar-title">chris@desktop: ~/writings</p>
              <div className="terminal-top-bar-icons">
                <i className="fas fa-times-circle terminal-top-bar-icon" />
                <i className="fas fa-times-circle terminal-top-bar-icon" />
                <i className="fas fa-times-circle terminal-top-bar-icon" />
              </div>
            </div>
            <div className="terminal-toolbar">
              {
                ["File", "Edit", "View", "Search"].map((tab) => (
                  <p className="terminal-toolbar-button">{tab}</p>
                ))
              }
            </div>
            <div className="terminal-card-wrapper">
              <div className="terminal-cards">
                {
                  writings.map(({ node }) => (
                    <a className="terminal-card-a" href={`/writings/${node.title.toLowerCase().split(' ').join('-')}/`}>
                      <div className="terminal-card">
                        <h1 className="post-title">{node.title}</h1>
                        <h4 className="post-date">{node.date}</h4>
                        <p className="post-description">{node.content}</p>
                      </div>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
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
          id
          title
          date
          content
        }
      }
    }
  }
`;

export default WritingsTemplate;
