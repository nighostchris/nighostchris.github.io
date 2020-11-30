import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import Link from '../Link';
import ButtonLink from '../ButtonLink';

import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <ButtonLink to="/">
          <img src="/sidebar-logo-dark-mode.png" alt="sidebar-logo-dark-mode" className="sidebar-logo"/>
        </ButtonLink>
        <hr className="sidebar-top-divider" />
        <p className="text-h4 text-custom-grey-300">Software Developer</p>
      </div>
      <div className="flex flex-col px-6">
        <nav>
          <ul className="sidebar-ul">
            {
              ["home", "skills", "projects", "work & edu", "writings"].map((tab, index) => (
                <li className="mt-6">
                  <Link to={`${index === 0 ? "/" : (index === 3 ? "/workneducation" : `/${tab}`)}`}>{tab}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      <div className="flex flex-col px-6">
        <p className="text-h5 mb-3 text-custom-grey-300">In case you want to contact me, just go for <strong>chrisliupascal@gmail.com</strong></p>
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
