import React from "react";
import { Helmet } from "react-helmet";
import "./skills.css";
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
        <div className="flex flex-col items-center w-full bg-header-blue-grey px-20px py-60px lg:py-100px skew-left lg:mt-30px xl:mt-60px">
          <h1 className="text-h1 lg:text-lg-header-title xl:text-xl-header-title text-header-blue font-bold tracking-wide skew-right text-center">
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
        {/* <ul className="skills-list">
          <SkillCard /> */}
          {/* {
            skillsList.map((skill, skillIndex) => (
              <li key={`skill-${skillIndex}`} style={{ backgroundColor: 'white', borderRadius: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  {
                    skill.svgs.map((svg, svgIndex) => 
                      svgIndex !== skill.svgs.length - 1
                        ? <div style={{ marginRight: '20px' }}>{svg}</div>
                        : svg
                    )
                  }
                </div>
                <h2 className="skill-title">{ skill.title }</h2>
                <p className="skills-description">
                  { skill.description }
                </p>
              </li>
            ))
          } */}
        {/* </ul> */}
        {/* <hr className="skills-divider" style={{ margin: "12px 0px 48px 0px" }} />
        <h1 className="skills-second-header">
          <span>Some more things you may want to know about me...</span>
        </h1>
        <p className="skills-second-subheader">
          I am a <strong>native Cantonese</strong> speaker, while can speak <strong>fluent English and Mandarin</strong> as well.
        </p>
        <p className="skills-second-subheader">
          I mainly code on <strong>Windows</strong>, but I know <strong>Linux</strong> also.
        </p>
        <p className="skills-second-subheader">
          Fall in love with <strong>VSCode</strong> when it was first released.
        </p> */}
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
