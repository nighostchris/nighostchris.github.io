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
              <p>chris@chris-desktop: ~/Document/writings</p>
              <div className="terminal-top-bar-icons">
                <i className="fas fa-times-circle terminal-top-bar-icon" />
                <i className="fas fa-times-circle terminal-top-bar-icon" />
                <i className="fas fa-times-circle terminal-top-bar-icon" />
              </div>
            </div>
            <div className="terminal-cards">
              <div className="terminal-card">
                <a className="terminal-card-a" href="/posts/developer-interview-tips-that-will-put-you-ahead/">
                  <h3 className="fonts__Eyebrow-sc-932vb3-3 styled__Date-ak5bda-3 fMGhhd">
                    February 24, 2020 &nbsp;·&nbsp; 4 min read
                  </h3>
                  <h1 className="fonts__Heading-sc-932vb3-1 styled__Heading-ak5bda-4 jCAUdg">
                    Developer interview tips that will put you ahead
                  </h1>
                  <p className="fonts__Body-sc-932vb3-4 styled__Preview-ak5bda-5 etKbjD">
                    So you've either completed your Computer Science degree, finished a boot camp, or have been learning about the development world for a long…
                  </p>
                </a>
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
          title
          date
          content
        }
      }
    }
  }
`;

export default WritingsTemplate;
