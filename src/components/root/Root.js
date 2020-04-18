import React from "react";
import "./root.css";
import SideBar from "./SideBar";
import PropTypes from "prop-types";

const Root = ({ children }) => {
  console.log(children);
  return (
    <div className="root">
      <SideBar />
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
