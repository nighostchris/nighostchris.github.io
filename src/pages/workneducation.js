import React from "react";
import { Helmet } from "react-helmet";
import { VerticalTimeline }  from 'react-vertical-timeline-component';

import Root from "../components/root/Root";

const experienceList = [
  {
    category: 'work',
    title: 'Programmer (4-month contract)',
    subtitle: 'Chiron Healthcare Group Limited',
    description: ["— Revamped the company's website with great enhancement in SEO and stability", '— In-house applications maintainance'],
    time: 'August 2020 - November 2020'
  },
  {
    category: 'work',
    title: 'Assistant Software Developer',
    subtitle: 'HKUST',
    description: ['— Designed and implemented frontend interface for the Online Assessment Platform', "— Helped in programming languages' reflection and static code analysis"],
    time: 'July 2019 - July 2020'
  },
  {
    category: 'work',
    title: 'Software Developer Intern',
    subtitle: 'Joy Aether Ltd.',
    description: ['— Fixed bugs and managed database for TastAR', '— Built a teachers and seminars management web app prototype'],
    time: 'June 2018 - August 2018'
  },
  {
    category: 'edu',
    title: 'The Hong Kong University of Science and Technology',
    subtitle: 'Bachelor of Engineering in Computer Science',
    description: ['GPA: 3.0 / 4.3, expected Second Class Honors (Division I)'],
    time: 'Sept 2015 - Sept 2019'
  },
  {
    category: 'edu',
    title: 'Christian Alliance S C Chan Memorial College',
    subtitle: 'Member of Programming Team',
    description: [],
    time: 'Sept 2009 - Sept 2015'
  },
]

const WorkAndEducationPage = () => (
  <Root>
    <Helmet>
      <title>Chris Liu - Work & Education</title>
    </Helmet>
    <div className="flex flex-col items-center w-full bg-background-blue-100 pb-8">
      <div className="flex flex-col items-center w-full bg-header-blue-grey py-16 md:py-24 lg:py-40 skew-left mt-6 md:mt-10">
        <h1 className="text-3xl lg:text-5xl xl:text-6xl text-header-blue font-bold tracking-wide skew-right text-center">
          Work Experience & Education
        </h1>
      </div>
      <VerticalTimeline>
        {
          experienceList.map((experience) => (
            <div className="vertical-timeline-element--work vertical-timeline-element">
              <span className={`vertical-timeline-element-icon bounce-in ${experience.category === 'work' ? "bg-blue-500" : "bg-pink-500"}`} />
              <div className={`vertical-timeline-element-content bounce-in border-t-8 ${experience.category === 'work' ? "border-blue-500" : "border-pink-500"}`}>
                <div className="vertical-timeline-element-content-arrow" />
                <h3 className="text-2xl text-gray-700 font-bold">{ experience.title }</h3>
                <h4 className="text-xl text-gray-600 mt-2">{ experience.subtitle }</h4>
                {
                  experience.description.map((descript, index) => (
                    <h5 className={`text-lg text-gray-500 ${index === 0 ? "mt-4" : ""}`}>{ descript }</h5>
                  ))
                }
                <span className="vertical-timeline-element-date text-white">{ experience.time }</span>
              </div>
            </div>
          ))
        }
      </VerticalTimeline>
    </div>
  </Root>
);

export default WorkAndEducationPage;
