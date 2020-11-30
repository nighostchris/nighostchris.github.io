import React from "react";
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";

import Root from "../components/root/Root";
import ProjectCard from '../components/cards/ProjectCard';
import transformRawDate from '../utils/transformRawDate';

const ProjectsPage = ({ data }) => {
  const projects = data.nighost.projects.sort((a, b) => a.endAt < b.endAt ? 1 : -1);
  
  return (
    <Root>
      <Helmet>
        <title>Chris Liu - Projects</title>
      </Helmet>
      <div className="flex flex-col items-center w-full bg-background-blue-100">
        <div className="flex flex-col items-center w-full bg-header-blue-grey py-60px lg:py-100px">
          <h1 className="text-h2 sm:text-h1 lg:text-lg-header-title text-custom-grey-200 font-bold tracking-wide text-center">
            Some work by me...
          </h1>
        </div>
        <div className="relative bg-gray-50 py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
          <div className="absolute inset-0 bg-background-blue-100">
            <div className="bg-background-blue-100 h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-lg mx-auto grid gap-6 lg:grid-cols-3 lg:max-w-none">
              {
                projects.map((project) => (
                  <ProjectCard
                    thumbnail={project.thumbnail}
                    imgalt={project.projectId}
                    type={project.type}
                    title={project.title}
                    link={`/projects/${project.projectId}`}
                    subtitle={`${transformRawDate(project.startAt)} - ${transformRawDate(project.endAt)}`}
                    abstract={project.abstract}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

export const projectsQuery = graphql`
  query projectsQuery {
    nighost {
      projects {
        projectId
        thumbnail
        type
        title
        startAt
        endAt
        abstract
      }
    }
  }
`;

export default ProjectsPage;
