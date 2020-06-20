import React from "react";
import useDarkMode from "use-dark-mode";
import "./root.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import PropTypes from "prop-types";

const Root = ({ children }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const mainContentRef = React.createRef(null);
  const darkMode = useDarkMode(false);

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
      <TopBar scrolled={scrolled} darkMode={darkMode} />
      <div
        ref={mainContentRef}
        className={`main-content ${scrolled ? "main-content-scrolled" : ""}`}
        onScroll={scrollEventHandler}
      >
        <div className="main-content-alerts" onClick={darkMode.toggle}>
          <i className="fas fa-phone-slash alerts-icons" />
          <i className="fas fa-signal alerts-icons" />
          <i className="fas fa-wifi alerts-icons" />
          <i className="fas fa-battery-quarter alerts-icons" />
        </div>
        { children }
      </div>
    </div>
  );
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
