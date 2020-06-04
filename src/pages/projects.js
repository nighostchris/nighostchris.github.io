import React from "react";
import { Helmet } from "react-helmet";
import Root from "../components/root/Root";

const projects = [{
  imgsrc: "/",
  imgalt: "oap",
  title: "Online Assessment Platform",
  subtitle: "July 2019 - July 2020",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio maxime, sapiente temporibus cum quisquam totam voluptatum",
  href: "/"
}, {
  imgsrc: "/data-vis-ideas/stacked_chart.png",
  imgalt: "data-vis-ideas",
  title: "Data Visualization Ideas",
  subtitle: "Feb 2020",
  content: "This is a very simple project for me to test out combination of web-crawling and data visualization. I have implemented it by making use of Japan sakura blossom data.",
  href: "/"
}, {
  imgsrc: "/gymlog/intro-pic.png",
  imgalt: "gymlog",
  title: "GymLog",
  subtitle: "August 2019",
  content: "It is a self-entertained project for me to record personal workout data. I also want to know more about Vue.JS and backend API server construction through coding this web app.",
  href: "/projects/gymlog"
}, {
  imgsrc: "/fablead/intro-pic.png",
  imgalt: "fablead",
  title: "Fablead",
  subtitle: "July 2018 - August 2018",
  content: "This is the first React.JS project I was involved. I did this as a website prototype for full-time programmer when I was an intern in Joy Aether Ltd.",
  href: "/projects/fablead"
}, {
  imgsrc: "/fyp/intro-pic.png",
  imgalt: "fyp",
  title: "Zombie Survival Collaborative Game with Leap Motion ( FYP )",
  subtitle: "Sept 2018 - Apr 2019",
  content: "This is my final year project about writing a Virtual-Reality game with Leap Motion control. Our team implemented it in Unity.",
  href: "/projects/fyp"
}, {
  imgsrc: "../stock/real-time-stock.png",
  imgalt: "real-time-stock",
  title: "HK Stock Real-Time Monitoring Desktop App",
  subtitle: "February 2018",
  content: "At that time I was pretty obsessed about making a desktop app for myself to monitor stock price. That's why this product was born and implementing UI through Python QT is definitely not a good experience.",
  href: "/projects/realtimestock"
}, {
  imgsrc: "../chatbot/bus.png",
  imgalt: "ust-freshman-chatbot",
  title: "UST Freshman Chatbot ( COMP3111 Project )",
  subtitle: "Sept 2017 - Dec 2017",
  content: "Our team implemented this LINE chatbot in the notorious course COMP3111. That's the first time I need to learn new framework in a pretty short time and implement the features from scratch.",
  href: "/projects/chatbot"
}, {
  imgsrc: "../poa/cbc.png",
  imgalt: "padding-oracle-attack",
  title: "Padding Oracle Attack",
  subtitle: "November 2017",
  content: "A COMP3632 assignment about decrypting AES. This is a hard assignment with complicated concepts. But the course is inspiring undoubtedly.",
  href: "/"
}, {
  imgsrc: "../girvan-newman/people-network.png",
  imgalt: "girvan-newman",
  title: "Girvan-Newman Implementation",
  subtitle: "March 2017",
  content: "A COMP4641 assignment about social network information analysis. Girvan Newman is an algorithm to detect communities in systems by progressively removing edges from a network.",
  href: "/projects/girvanewman"
}];

const ProjectsPage = () => (
  <Root>
    <Helmet>
      <title>Chris Liu - Projects</title>
    </Helmet>
    <div className="main-content-projects">
      <h1 className="projects-header">
        <span>Some work by me.</span>
      </h1>
      <div className="card" style={{ width: '100%' }}>
        <img className="card-img" src={projects[0].imgsrc} alt={projects[0].imgalt} />
        <div className="card-body">
          <h2 className="card-title">{projects[0].title}</h2>
          <h3 className="card-subtitle">{projects[0].subtitle}</h3>
          <p className="card-text">{projects[0].content}</p>
          <a href={projects[0].href} className="card-button">
            Know More
          </a>
        </div>
      </div>
      <div className="card-wrapper">
        {
          [1, 2].map((projectIndex) => (
            <div className="card" style={{ width: '48%' }}>
              <img className="card-img card-img-clip" src={projects[projectIndex].imgsrc} alt={projects[projectIndex].imgalt} />
              <div className="card-body">
                <h2 className="card-title">{projects[projectIndex].title}</h2>
                <h3 className="card-subtitle">{projects[projectIndex].subtitle}</h3>
                <p className="card-text">{projects[projectIndex].content}</p>
                <a href={projects[projectIndex].href} className="card-button">
                  Know More
                </a>
              </div>
            </div>
          ))
        }
      </div>
      {
        [3, 4, 5].map((projectIndex) => (
          <div className="card-wrapper">
            <div className="card" style={{ width: '100%' }}>
              <img
                className="card-img card-img-cover"
                src={projects[projectIndex].imgsrc}
                alt={projects[projectIndex].imgalt} 
                style={{ objectPosition: projectIndex === 4 ? "center" : "top"}}
              />
              <div className="card-body">
                <h2 className="card-title">{projects[projectIndex].title}</h2>
                <h3 className="card-subtitle">{projects[projectIndex].subtitle}</h3>
                <p className="card-text">{projects[projectIndex].content}</p>
                <a href={projects[projectIndex].href} className="card-button">
                  Know More
                </a>
              </div>
            </div>
          </div>
        ))
      }
      <div className="card-wrapper">
        <div className="card-wrapper-column" style={{ width: '48%' }}>
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img" src={projects[6].imgsrc} alt={projects[6].imgalt} />
            <div className="card-body">
              <h2 className="card-title">{projects[6].title}</h2>
              <h3 className="card-subtitle">{projects[6].subtitle}</h3>
              <p className="card-text">{projects[6].content}</p>
              <a href={projects[6].href} className="card-button">
                Know More
              </a>
            </div>
          </div>
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img" src={projects[7].imgsrc} alt={projects[7].imgalt} />
            <div className="card-body">
              <h2 className="card-title">{projects[7].title}</h2>
              <h3 className="card-subtitle">{projects[7].subtitle}</h3>
              <p className="card-text">{projects[7].content}</p>
              <a href={projects[7].href} className="card-button">
                Know More
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: '48%' }}>
          <img className="card-img card-img-long" src={projects[8].imgsrc} alt={projects[8].imgalt} />
          <div className="card-body">
            <h2 className="card-title">{projects[8].title}</h2>
            <h3 className="card-subtitle">{projects[8].subtitle}</h3>
            <p className="card-text">{projects[8].content}</p>
            <a href={projects[8].href} className="card-button">
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  </Root>
);

export default ProjectsPage;
