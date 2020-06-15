import React from "react";
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import "./writings.css";
import Root from "../components/root/Root";

const WritingsTemplate = ({ data, pageContext }) => {
  const writings = data.allWritingsJson.edges;
  const { numOfPages } = pageContext;

  const heightBalancing = () => {
    const rowSize = 2;

    const row = writings.map(({ node }) => (
      <a className="terminal-card-a" href={`/writings/${node.title.toLowerCase().split(' ').join('-')}/`}>
        <div className="terminal-card">
          <h1 className="post-title">{node.title}</h1>
          <h4 className="post-date">{node.date}</h4>
          <p className="post-description">{node.description}</p>
        </div>
      </a>
    )).reduce((result, element, index) => {
      index % rowSize === 0 && result.push([]);
      result[result.length - 1].push(element);
      return result;
    }, []).map((newRow) => (
      <div className="terminal-cards-row">{newRow}</div>
    ));

    return row;
  }

  return (
    <Root>
      <Helmet>
        <title>Chris Liu - Writings</title>
      </Helmet>
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
                heightBalancing()
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
    allWritingsJson(
      skip: $skip,
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          date
          description
        }
      }
    }
  }
`;

export default WritingsTemplate;
