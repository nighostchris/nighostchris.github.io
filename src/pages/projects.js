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
        <div className="flex flex-col items-center w-full bg-header-blue-grey py-16 md:py-24 lg:py-40 skew-left mt-6 md:mt-10">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl text-header-blue font-bold tracking-wide skew-right text-center">
            Some work by me...
          </h1>
        </div>
        <div className="relative bg-transparent pb-10 px-8 sm:px-10 lg:pb-12 lg:px-12">
          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-lg mx-auto grid gap-6 xl:grid-cols-2 2xl:grid-cols-3 lg:max-w-none">
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
