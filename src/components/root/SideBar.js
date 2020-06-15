import React from "react";
import Link from '../Link';

import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <a href="/"><img src="/sidebar-logo.png" alt="sidebar-logo"/></a>
        <hr className="sidebar-top-divider" />
        <p className="sidebar-top-subtitle">Software Developer</p>
      </div>
      <div className="sidebar-middle">
        <nav>
          <ul className="sidebar-ul">
            {
              ["home", "skills", "projects", "work & edu", "writings"].map((tab, index) => (
                <li className="sidebar-li">
                  <Link to={`${index === 0 ? "/" : (index === 3 ? "/workneducation" : `/${tab}`)}`}>{tab}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
      <div className="sidebar-bottom">
        <p className="sidebar-bottom-email">In case you want to contact me, just go for <strong>chrisliupascal@gmail.com</strong></p>
        <hr className="sidebar-top-divider" />
        <ul className="sidebar-ul sidebar-bottom-ul">
          <li>
            <a href="https://github.com/nighostchris" className="sidebar-bottom-li-a">
              <i className="fab fa-github sidebar-icon" style={{ margin: "0px" }}/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chrisliupascal" className="sidebar-bottom-li-a">
              <i className="fab fa-linkedin sidebar-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
