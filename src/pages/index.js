import React from "react";
import { Helmet } from "react-helmet";
import Hyphenated from "react-hyphen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import Root from "../components/root/Root";

const IndexPage = () => {
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
            <div className="flex flex-row mt-6 mx-auto lg:mx-0">
              <a href="/skills" className="text-header-blue text-base font-bold border-b-2 border-header-blue hover:text-white hover:border-white">WHAT I KNOW</a>
              <a href="/projects" className="ml-8 text-header-blue text-base font-bold border-b-2 border-header-blue hover:text-white hover:border-white">SEE MY WORK</a>
            </div>
          </div>
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
