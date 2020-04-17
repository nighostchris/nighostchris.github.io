import React from "react"

import "./sidebar.css"

const SideBar = () => {
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
          <ul>
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Resume</li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-bottom">
        
      </div>
    </div>
  );
}

export default SideBar;
