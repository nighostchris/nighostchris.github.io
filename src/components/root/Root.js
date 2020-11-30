import React from "react";
import "./root.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSlash, faSignal, faWifi, faBatteryQuarter } from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex flex-row h-screen bg-custom-grey-100">
      <SideBar />
      <TopBar scrolled={scrolled} />
      <div
        ref={mainContentRef}
        className="w-full overflow-y-auto"
        onScroll={scrollEventHandler}
      >
        <div className="hidden md:flex flex-row absolute top-4 right-4 text-white z-10">
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

export default Root;
