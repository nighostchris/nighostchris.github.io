import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ props }) => {
  const { logo, background, bottomText } = props;

  return (
    <footer className={`text-gray-600 body-font ${background}-500`}>
      {/* <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div> */}
      <div className={`${background}-600`}>
        <div className="container px-4 py-6 sm:py-3 mx-auto flex items-center sm:flex-row flex-col">
          <a className={`flex font-bold items-center md:justify-start justify-center ${bottomText}-300`}>
            <img src={logo} alt="footer-logo" />
            <span className="ml-3 text-xl">StonksViz</span>
          </a>
          <p className={`text-sm ${bottomText}-400 sm:ml-6 sm:mt-0 mt-4`}>
            © 2021 StonksViz — Chris Liu
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-6 justify-center sm:justify-start">
            <a className={`${bottomText}-300`} href="https://www.linkedin.com/in/chrisliudev/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a className={`ml-3 ${bottomText}-300`} href="https://github.com/nighostchris" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
