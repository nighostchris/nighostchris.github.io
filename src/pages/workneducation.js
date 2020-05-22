import React from "react";
import Root from "../components/root/Root";
import { VerticalTimeline }  from 'react-vertical-timeline-component';

const WorkAndEducationPage = () => (
  <Root>
    <div className="main-content-wne">
      <h1 className="wne-header">
        <span>Work Experience & Education</span>
      </h1>
      <VerticalTimeline>
        <div className="vertical-timeline-element--work vertical-timeline-element">
          <span
            className="vertical-timeline-element-icon bounce-in"
            style={{ background: 'rgb(33, 150, 243)', color: 'rgb(255, 255, 255)' }}
          />
          <div className="vertical-timeline-element-content bounce-in">
            <div className="vertical-timeline-element-content-arrow" />
            <h2 className="timeline-element-title">Assistant Software Developer</h2>
            <h4>HKUST</h4>
            <p className="timeline-element-description">
              Designed and implemented frontend interface for the Online Assessment Platform
            </p>
            <span className="vertical-timeline-element-date">July 2019 - Present</span>
          </div>
        </div>
      </VerticalTimeline>
    </div>
  </Root>
);

export default WorkAndEducationPage;
