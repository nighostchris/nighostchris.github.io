import React from "react";
import "./root.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import PropTypes from "prop-types";

const Root = ({ children }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const mainContentRef = React.createRef(null);

  const scrollEventHandler = () => {
    if (mainContentRef.current.scrollTop > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  return (
    <div className="root">
      <SideBar />
      <TopBar scrolled={scrolled} />
      <div
        ref={mainContentRef}
        className={`main-content ${scrolled ? "main-content-scrolled" : ""}`}
        onScroll={scrollEventHandler}
      >
        { children }
      </div>
    </div>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
