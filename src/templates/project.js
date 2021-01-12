import React from "react";
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram, faClock, faLanguage } from "@fortawesome/free-solid-svg-icons";

import "./project.css";
import Root from "../components/root/Root";

const ProjectTemplate = ({ data }) => {
  const project = data.allProjectsJson.edges[0];

  console.log(project);

  return (
    <Root>
      <Helmet>
        <title>{`Chris Liu - ${project.node.title}`}</title>
      </Helmet>
      <div className="flex flex-col w-full">
        <div className="w-full relative">
          <div className="relative z-10 pb-8 bg-gray-800 sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32 pt-6 md:mt-0">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-800 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mt-10 mx-auto max-w-7xl px-10 sm:mt-12 md:mt-16 lg:mt-20 lg:px-20 xl:mt-28">
              <div className="text-left">
                <h1 className="text-center lg:text-left text-4xl tracking-tight font-extrabold text-indigo-400 sm:text-5xl md:text-6xl">
                  { project.node.title }
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  { project.node.longerDescription }
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="mt-3 sm:mt-0 w-full lg:w-3/4 sm:max-w-xl">
                    <a
                      href={project.node.srcLink[0]}
                      target="_blank"
                      className="w-full flex items-center justify-center py-1 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:text-lg"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-full">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={project.node.overview}
              alt=""
            />
          </div>
        </div>
        <div className="flex-col bg-gray-700 p-8 md:p-12">
          {
            project.node.screenshots.map((description, index) => (
              <img className={`w-full h-full ${index !== 0 ? "pt-8 md:pt-12" : ""}`} src={description.src} alt={description.alt} />
            ))
          }
        </div>
        <div className="py-8 lg:py-16 px-10 bg-gray-800 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {
            [project.node.type, project.node.subtitle, project.node.lnl].map((details, index) => (
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center md:items-start">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <FontAwesomeIcon icon={index === 0 ? faProjectDiagram : index === 1 ? faClock : faLanguage} size="lg" className="text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                          { index === 0 ? "Project Type" : index === 1 ? "When" : "Languages & Libraries" }
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl leading-8 font-semibold text-gray-900">
                            { details }
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
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
          overview
        }
      }
    }
  }
`;

export default ProjectTemplate;
