import React from "react";
import { Helmet } from "react-helmet";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Root from "../../components/root/Root";

const ProjectGymlog = () => {
  console.log(SyntaxHighlighter.language);

  return (
    <Root>
      <Helmet>
        <title>Chris Liu - GymLog</title>
      </Helmet>
      <div className="main-content-project">
        <h1 className="project-header">
          <span>GymLog</span>
        </h1>
        <SyntaxHighlighter language="markdown" style={atomDark} className="syntax-highlighter">
          {`testing testing testing 
            testing testing testing 
            testing testing testing testing testing 
            testing testing testing 
            testing testing`}
        </SyntaxHighlighter>
        <div className="project-screenshots-wrapper">
          <h2 className="project-subheader">Screenshots</h2>
          <div className="project-screenshots-row-wrapper">
            <img className="project-screenshot" src="/gymlog/dashboard.png" alt="dashboard" />
            <img className="project-screenshot" src="/gymlog/calendar.png" alt="calendar" />
          </div>
          <div className="project-screenshots-row-wrapper">
            <img className="project-screenshot" src="/gymlog/add-workout.png" alt="add-workout" />
            <img className="project-screenshot" src="/gymlog/selector.png" alt="selector" />
          </div>
        </div>
        <div className="project-conclusion">
          <h2 className="project-subheader project-subheader-conclusion">Details</h2>
          <div className="project-subconclusion">
            <p className="project-subconclusion-title">Type:</p>
            <p className="project-subconclusion-description">Web-App</p>
          </div>
          <div className="project-subconclusion">
            <p className="project-subconclusion-title">When:</p>
            <p className="project-subconclusion-description">August 2019</p>
          </div>
          <div className="project-subconclusion">
            <p className="project-subconclusion-title">Languages & Libraries:</p>
            <p className="project-subconclusion-description">Node.js, Vue.js, Express, Axios, Sequelize, PostgreSQL</p>
          </div>
          <a href="https://github.com/nighostchris/gymlog" class="card-button project-card-button">Github Repository</a>
        </div>
      </div>
    </Root>
  );
}

export default ProjectGymlog;
