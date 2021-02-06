import React from "react";
import { Helmet } from "react-helmet";

import Root from "../components/root/Root";
import SkillCard from "../components/cards/SkillCard";

const SkillsPage = ({ data }) => {
  const skills = data.nighost.skills;

  return (
    <Root>
      <Helmet>
        <title>Chris Liu - Skills</title>
      </Helmet>
      <div className="flex flex-col items-center w-full bg-gray-800">
        <div className="relative w-full h-screen">
          <img className="w-full h-full object-cover" src="https://firebasestorage.googleapis.com/v0/b/nighostchris-github-io.appspot.com/o/skills.webp?alt=media&token=4e2198c9-971a-4e35-87f5-daf2c7c8e5c1" alt="skills-header" />
          <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-wide">SKILLS</h1>
            <h2 className="mt-2 xl:mt-4 text-gray-400 text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-wide">Coding since 2013</h2>
          </div>
        </div>
        <div className="py-12 md:py-20 px-8 sm:px-10 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-lg mx-auto grid gap-8 xl:grid-cols-2 2xl:grid-cols-3 lg:max-w-none">
              {
                skills.map((skill) => (
                  <SkillCard
                    type={skill.type}
                    icon={skill.icon}
                    language={skill.language}
                    description={skill.description}
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

export const skillsQuery = graphql`
  query skillsQuery {
    nighost {
      skills {
        language
        icon
        description
        type
      }
    }
  }
`;

export default SkillsPage;
