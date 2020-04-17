import React from "react";
import { globalHistory as history } from '@reach/router';

import "./sidebar.css";

const SideBar = () => {
  const { location } = history;

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <a href="/" style={{ textDecoration: "none" }}>
          <h1 className="sidebar-top-title">Chris  -  Liu</h1>
        </a>
        <hr className="sidebar-top-divider" />
        <p className="sidebar-top-subtitle">Software Developer</p>
      </div>
      <div className="sidebar-middle">
        <nav>
          <ul className="sidebar-ul">
            {
              ["home", "skills", "projects", "resume"].map((tab, index) => (
                <li className="sidebar-li">
                  <a href={`/${tab === "home" ? "" : tab}`}
                    className={`sidebar-li-a ${((index === 0 && location.pathname.includes("/"))
                      || (index === 1 && location.pathname === "/skills")
                      || (index === 2 && location.pathname === "/projects")
                      || (index === 3 && location.pathname === "/resume"))
                      && "sidebar-li-a-current"}
                    `}
                  >{tab}</a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      <div className="sidebar-bottom">
        <p>Contact me by chrisliupascal@gmail.com</p>
        <hr className="sidebar-top-divider" />
        <ul>
          <li>
            <a href="https://github.com/nighostchris" className="">
              <i className="fab fa-github">
                <span>Github</span>
              </i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chrisliupascal" className="">
              <i className="fab fa-linkedin">
                <span>LinkedIn</span>
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
