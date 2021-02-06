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
      <div className="flex flex-col items-center w-full bg-gray-800">
        <div className="relative w-full h-screen">
          <img className="w-full h-full object-cover" src="https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/projects-header.webp?alt=media&token=db58cb57-3a30-4d9a-9790-ae19395d4282" alt="projects-header" />
          <div className="absolute w-full h-full top-0 flex flex-row items-center justify-center">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-wide">PROJECTS</h1>
          </div>
        </div>
        <div className="py-12 md:py-20 px-8 sm:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-lg mx-auto grid gap-8 xl:grid-cols-2 2xl:grid-cols-3 lg:max-w-none">
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
