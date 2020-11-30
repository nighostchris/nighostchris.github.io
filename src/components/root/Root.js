import React from "react";
import useDarkMode from "use-dark-mode";
import "./root.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSlash, faSignal, faWifi, faBatteryQuarter } from "@fortawesome/free-solid-svg-icons";

const Root = ({ children }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const mainContentRef = React.createRef(null);
  const darkMode = useDarkMode(true);

  const scrollEventHandler = () => {
    if (mainContentRef.current.scrollTop > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  return (
    <div className="root bg-custom-grey-100">
      <SideBar />
      <TopBar scrolled={scrolled} darkMode={darkMode} />
      <div
        ref={mainContentRef}
        className={`main-content ${scrolled ? "main-content-scrolled" : ""}`}
        onScroll={scrollEventHandler}
      >
        <div className="main-content-alerts">
          <FontAwesomeIcon icon={faPhoneSlash} />
          <FontAwesomeIcon icon={faSignal} className="ml-2" />
          <FontAwesomeIcon icon={faWifi} className="ml-2" />
          <FontAwesomeIcon icon={faBatteryQuarter} className="ml-2" />
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
