import React from "react";
import { Helmet } from "react-helmet";
import Hyphenated from "react-hyphen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import Root from "../components/root/Root";

const IndexPage = () => {
  const skillsSectionRef = React.useRef();

  const skillsSection = new Map([
    ["languages", {
      title: "general",
      subtitle: "languages that I use",
      data: [
        { icon: "/skills/cplusplus.svg", title: "C++", fluency: "5", alt: "cplusplus" },
        { icon: "/skills/css.svg", title: "CSS", fluency: "9", alt: "css" },
        { icon: "/skills/go.svg", title: "Go", fluency: "3", alt: "go" },
        { icon: "/skills/java.svg", title: "Java", fluency: "5", alt: "java" },
        { icon: "/skills/javascript.svg", title: "Javascript", fluency: "9", alt: "javascript" },
        { icon: "/skills/python.svg", title: "Python", fluency: "5", alt: "python" },
        { icon: "/skills/typescript.svg", title: "Typescript", fluency: "9", alt: "typescript" },    
      ]
    }],
    ["frameworks", {
      title: "popular",
      subtitle: "frameworks that I use",
      data: [
        { icon: "/skills/nodejs.svg", title: "Node.js", fluency: "9", alt: "nodejs" },
        { icon: "/skills/react.svg", title: "React.js", fluency: "9", alt: "react" },
        { icon: "/skills/nextjs.svg", title: "Next.js", fluency: "7", alt: "nextjs" },
        { icon: "/skills/graphql.svg", title: "GraphQL", fluency: "7", alt: "graphql" },
        { icon: "/skills/gatsby.svg", title: "GatsbyJS", fluency: "9", alt: "gatsby" },
        { icon: "/skills/express.svg", title: "Express", fluency: "8", alt: "express" },
      ]
    }],
    ["others", {
      title: "other",
      subtitle: "libraries that I use",
      data: [
        { icon: "/skills/docker.svg", title: "Docker", fluency: "6", alt: "docker" },
        { icon: "/skills/firebase.svg", title: "Firebase", fluency: "8", alt: "firebase" },
        { icon: "/skills/git.svg", title: "Git", fluency: "7", alt: "git" },
        { icon: "/skills/mongodb.svg", title: "MongoDB", fluency: "6", alt: "mongodb" },
        { icon: "/skills/postgresql.svg", title: "PostgreSQL", fluency: "5", alt: "postgresql" },
        { icon: "/skills/tailwind.svg", title: "Tailwind", fluency: "10", alt: "tailwind" },
        { icon: "/skills/unity.svg", title: "Unity", fluency: "3", alt: "unity" },
      ]
    }],
    ["systems", {
      title: "operating",
      subtitle: "systems that I use",
      data: [
        { icon: "/skills/windows.svg", title: "Windows", fluency: "10", alt: "Windows" },
        { icon: "/skills/linux.svg", title: "Linux", fluency: "6", alt: "Linux" },
      ]
    }],
  ]);

  const handleScroll = (ref) => {
    skillsSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    })
  }

  return (
    <Root>
      <Helmet>
        <title>Chris Liu - Software Developer</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:h-full bg-background-blue-300">
        <div className="relative flex flex-row items-end justify-end w-full h-full">
          <img src="/testing.png" alt="avatar" className="relative h-full object-cover" />
          <p className="absolute left-6 lg:left-20 top-1/4 text-white whitespace-pre-line font-bold text-7xl lg:text-8xl tracking-wider font-roboto-mono">
            {`Chris\nLiu`}
          </p>
        </div>
        <div className="flex flex-row items-center w-full px-0 lg:px-8">
          <div className="flex flex-col w-full text-center lg:text-left my-12 lg:my-0">
            <p style={{ letterSpacing: "0.32em" }} className="text-base xl:text-lg text-gray-200 uppercase">— Hello I am Chris.</p>
            <p className="text-white text-xl lg:text-3xl whitespace-pre-line tracking-wider mt-8 leading-relaxed">
              <strong className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Software Developer</strong>
              <br/>from <strong className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4">HONG KONG</strong>
            </p>
            <Hyphenated>
              <p className="mt-10 text-lg lg:text-xl xl:text-2xl max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl leading-snug text-gray-300 font-fira-mono mx-auto lg:mx-0 text-left">
                I enjoy designing user-friendly interactive web app as well as meaningful applications that amazes people.
                I am equipped with solid knowledge of OOP concepts, frontend frameworks and backend implementation.
                I am also enthusiastic in trying and learning latest technology.
              </p>
            </Hyphenated>
            <div className="flex flex-row items-center mt-6 mx-auto lg:mx-0">
              <a href="/skills" className="text-header-blue text-base font-bold border-b-2 border-header-blue hover:text-white hover:border-white">WHAT I KNOW</a>
              <a href="/projects" className="ml-8 text-header-blue text-base font-bold border-b-2 border-header-blue hover:text-white hover:border-white">SEE MY WORK</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleScroll(skillsSectionRef); }} className="ml-8 text-white w-fit-content hidden lg:block">
                <FontAwesomeIcon icon={faArrowAltCircleDown} size="4x" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div ref={skillsSectionRef} className="flex flex-col bg-gray-500 w-full items-center py-10 md:py-12 lg:py-20">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-10 md:mb-12 lg:mb-20 text-gray-50 text-center">Skills</h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-12 w-full xl:max-w-screen-xl px-8">
          {
            [...skillsSection.keys()].map((section) => (
              <div className="w-full px-4">
                <div className="flex flex-row mb-4 items-center">
                  <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-50">{skillsSection.get(section).data.length}</h1>
                  <div className="uppercase ml-2">
                    <h2 className="text-lg leading-none text-gray-300 break-all sm:break-words">{skillsSection.get(section).title}</h2>
                    <h3 className="text-xl text-black leading-none font-semibold sm:break-words">
                      {skillsSection.get(section).subtitle}
                    </h3>
                  </div>
                </div>
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {
                    skillsSection.get(section).data.map((language) => (
                      <div className="flex items-center justify-center p-2 bg-gray-700 rounded-md">
                        <img src={language.icon} alt={language.alt} className="w-10 h-10" />
                        <h3 className="flex-grow truncate text-gray-200 font-bold text-xl mx-2">{language.title}</h3>
                        <div className={`flex items-center justify-center w-8 h-8 font-semibold text-white rounded-full ${language.fluency < 5 ? "bg-red-600" : language.fluency < 8 ? "bg-yellow-600" : language.fluency < 10 ? "bg-green-600" : "bg-green-400"}`}>
                          {language.fluency}
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="grid grid-cols-1 w-full md:hidden bg-white">
        <div className="flex flex-col text-center py-8 max-w-xs mx-auto">
          <p className="text-lg font-bold text-gray-600">KNOW MORE ABOUT ME</p>
          <p className="text-base text-gray-500 mt-4 whitespace-pre-line">
            {`Contact me by\n`}<strong>chrisliupascal@gmail.com</strong>
          </p>
          <ul className="list-none flex flex-row mt-6 justify-evenly">
            <li>
              <a href="https://github.com/nighostchris" className="no-underline text-gray-700">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chrisliupascal" className="no-underline text-gray-700">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full md:hidden bg-background-blue-300 py-2 text-center">
        <p className="text-sm text-white">Maintained and Owned by CHRIS LIU</p>
      </div>
    </Root>
  );
}

export default IndexPage;
