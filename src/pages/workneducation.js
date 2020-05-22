import React from "react";
import Root from "../components/root/Root";
import { VerticalTimeline }  from 'react-vertical-timeline-component';

const experienceList = [
  {
    category: 'work',
    title: 'Assistant Software Developer',
    subtitle: 'HKUST',
    description: ['Designed and implemented frontend interface for the Online Assessment Platform'],
    time: 'July 2019 - Present'
  },
  {
    category: 'work',
    title: 'Software Developer Intern',
    subtitle: 'Joy Aether Ltd.',
    description: ['Fixed bugs and managed database for TastAR', 'Built a teachers and seminars management web app prototype'],
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
    <div className="main-content-wne">
      <h1 className="wne-header">
        <span>Work Experience & Education</span>
      </h1>
      <VerticalTimeline>
        {
          experienceList.map((experience) => (
            <div className="vertical-timeline-element--work vertical-timeline-element">
              <span
                className="vertical-timeline-element-icon bounce-in"
                style={{
                  color: 'rgb(255, 255, 255)',
                  background: `${experience.category === 'work' ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)"}`,
                  boxShadow: `0 0 0 4px ${experience.category === 'work' ? "#1976d2" : "#c2185b"}`
                }}
              />
              <div
                className="vertical-timeline-element-content bounce-in"
                style={{ borderTop: `3px solid ${experience.category === 'work' ? "rgb(33, 150, 243)" : "rgb(233, 30, 99)"}` }}
              >
                <div className="vertical-timeline-element-content-arrow" />
                <h2 className="timeline-element-title">{ experience.title }</h2>
                <h4>{ experience.subtitle }</h4>
                {
                  experience.description.map((descript) => (
                    <p className="timeline-element-description">{ descript }</p>
                  ))
                }
                <span className="vertical-timeline-element-date">{ experience.time }</span>
              </div>
            </div>
          ))
        }
      </VerticalTimeline>
    </div>
  </Root>
);

export default WorkAndEducationPage;
