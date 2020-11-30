import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  return (
    <div className="w-60 xl:w-72 h-full hidden md:flex flex-col justify-between px-6 xl:px-8 py-12 bg-background-blue-400">
      <div className="flex flex-col">
        <Link to="/">
          <img src="/sidebar-logo-dark-mode.png" alt="logo" />
        </Link>
        <p className="mt-3 text-md text-custom-grey-300">Software Developer</p>
      </div>
      <div className="flex flex-col">
        <ul>
          {
            ["home", "skills", "projects", "work & edu", "writings"].map((tab, index) => (
              <li className={index !== 0 ? "mt-6" : ""}>
                <Link
                  to={`${index === 0 ? "/" : (index === 3 ? "/workneducation" : `/${tab}`)}`}
                  className="text-h2 uppercase text-custom-grey-300 tracking-wider hover:text-custom-grey-100 hover:font-bold"
                  activeClassName="text-custom-grey-100 font-bold border-b-4 border-solid"
                  partiallyActive={index !== 0 ? true : false}
                >
                  {tab}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="text-sm mb-3 text-custom-grey-300">In case you want to contact me, just go for <strong>chrisliupascal@gmail.com</strong></p>
        <ul className="list-none flex flex-row">
          <li>
            <a href="https://github.com/nighostchris" className="no-underline text-white">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chrisliupascal" className="no-underline text-white">
              <FontAwesomeIcon icon={faLinkedin} className="ml-3" size="lg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
