import React from "react";
import "./root.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import PropTypes from "prop-types";

const Root = ({ children }) => {
  return (
    <div className="root">
      <SideBar />
      <TopBar />
      <div className="main-content">
        { children }
      </div>
    </div>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
