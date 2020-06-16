import React from "react";
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Root from "../components/root/Root";

const ProjectTemplate = ({ data }) => {
  const project = data.allProjectsJson.edges[0];

  return (
    <Root>
      <Helmet>
        <title>{`Chris Liu - ${project.node.title}`}</title>
      </Helmet>
      <div className="main-content-project">
        <h1 className="project-header">
          <span>{project.node.title}</span>
        </h1>
        <SyntaxHighlighter language="markdown" style={atomDark} className="syntax-highlighter">
          {project.node.longerDescription}
        </SyntaxHighlighter>
        <div className="project-screenshots-wrapper">
          <h2 className="project-subheader">Screenshots</h2>
          {
            project.node.screenshots.map((screenshot) => (
              <img
                className="project-screenshot"
                src={screenshot.src}
                alt={screenshot.alt}
              />
            ))
          }
        </div>
        <div className="project-conclusion">
          <h2 className="project-subheader project-subheader-conclusion">Details</h2>
          <div className="project-subconclusion">
            <p className="project-subconclusion-title">Type:</p>
            <p className="project-subconclusion-description">{project.node.type}</p>
          </div>
          <div className="project-subconclusion">
            <p className="project-subconclusion-title">When:</p>
            <p className="project-subconclusion-description">{project.node.subtitle}</p>
          </div>
          <div className="project-subconclusion">
            <p className="project-subconclusion-title">Languages & Libraries:</p>
            <p className="project-subconclusion-description">{project.node.lnl}</p>
          </div>
          <a href={project.node.srcLink[0]} class="card-button project-card-button">{project.node.srcLink[1]}</a>
        </div>
      </div>
    </Root>
  );
};

export const projectQuery = graphql`
  query projectQuery($projectId: String!) {
    allProjectsJson(filter: { id: { eq: $projectId } }) {
      edges {
        node {
          title
          subtitle
          longerDescription
          type
          screenshots {
            src
            alt
          }
          lnl
          srcLink
        }
      }
    }
  }
`;

export default ProjectTemplate;
