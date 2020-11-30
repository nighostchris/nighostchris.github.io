import React from "react";
import { Helmet } from "react-helmet";

import Root from "../components/root/Root";
import SkillCard from "../components/cards/SkillCard";
import createSubgroup from "../utils/createSubgroup";

const SkillsPage = ({ data }) => {
  const skills = data.nighost.skills;

  return (
    <Root>
      <Helmet>
        <title>Chris Liu - Skills</title>
      </Helmet>
      <div className="flex flex-col items-center w-full bg-background-blue-100">
        <div className="flex flex-col items-center w-full bg-header-blue-grey px-20px py-60px lg:py-100px skew-left mt-30px xl:mt-60px">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl text-header-blue font-bold tracking-wide skew-right text-center">
            Started coding since 2013
          </h1>
          <p className="text-custom-grey-200 text-h5 lg:text-h4 xl:text-h3 whitespace-pre-line text-center mt-30px leading-10 w-full skew-right">
            {`Now mainly focus on Web Development.\nLearning and Growing everyday.`}
          </p>
        </div>
        <div className="flex flex-row justify-center w-full md:max-w-md-body lg:max-w-lg-body xl:max-w-xl-body mb-50px lg:mb-80px lg:mt-80px">
          <div className="xl:flex flex-col w-full hidden">
            {
              createSubgroup(skills, 3).map((row, rowIndex) => (
                <div className={`flex flex-col md:flex-row w-full ${rowIndex !== 0 ? "mt-60px" : ""}`}>
                  {
                    row.map((skill, skillIndex) => (
                      <div className={`flex flex-row justify-center w-1/3 ${skillIndex !== 0 ? "mt-60px md:mt-0" : ""}`}>
                        <SkillCard
                          type={skill.type}
                          icon={skill.icon}
                          language={skill.language}
                          description={skill.description}
                        />
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
          <div className="hidden md:flex flex-col w-full xl:hidden">
            {
              createSubgroup(skills, 2).map((row, rowIndex) => (
                <div className={`flex flex-col md:flex-row w-full ${rowIndex !== 0 ? "mt-60px" : ""}`}>
                  {
                    row.map((skill, skillIndex) => (
                      <div className={`flex flex-row justify-center w-1/2 ${skillIndex !== 0 ? "mt-60px md:mt-0" : ""}`}>
                        <SkillCard
                          type={skill.type}
                          icon={skill.icon}
                          language={skill.language}
                          description={skill.description}
                        />
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
          <div className="flex flex-col md:hidden w-full items-center">
            {
              skills.map((skill, skillIndex) => (
                <SkillCard
                  type={skill.type}
                  icon={skill.icon}
                  language={skill.language}
                  description={skill.description}
                  className={skillIndex !== 0 ? "mt-60px" : ""}
                />
              ))
            }
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
