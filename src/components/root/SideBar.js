import React from "react";
import { globalHistory as history } from '@reach/router';

import "./sidebar.css";

const SideBar = () => {
  const { location } = history;
  
  console.log(location.pathname);
  console.log(location.pathname === "/");
  console.log(location.pathname.includes("/skills"));
  console.log(location.pathname.includes("/projects"));
  console.log(location.pathname.includes("/workneducation"));


  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <a href="/" style={{ textDecoration: "none" }}>
          <h1 className="sidebar-top-title">{`Chris  -  Liu`}</h1>
        </a>
        <hr className="sidebar-top-divider" />
        <p className="sidebar-top-subtitle">Software Developer</p>
      </div>
      <div className="sidebar-middle">
        <nav>
          <ul className="sidebar-ul">
            {
              ["home", "skills", "projects", "work & edu"].map((tab, index) => (
                <li key={`sidebar-tab-${index}`} className="sidebar-li">
                  <a href={`/${index === 0 ? "" : (index === 3 ? "workneducation" : tab)}`}
                    className={`sidebar-li-a ${((index === 0 && location.pathname === "/")
                      || (index === 1 && location.pathname.includes("/skills"))
                      || (index === 2 && location.pathname.includes("/projects"))
                      || (index === 3 && location.pathname.includes("/workneducation")))
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
