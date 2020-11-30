import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBatteryQuarter } from "@fortawesome/free-solid-svg-icons";

const TopBar = ({ scrolled }) => {
  const [openHamburger, setOpenHamburger] = React.useState(false);

  const topBarStyleController = () => {
    if (!scrolled && !openHamburger) {
      return "h-16 text-white bg-transparent";
    } else if (!scrolled && openHamburger) {
      return "h-16 text-header-blue-grey bg-white";
    } else if (scrolled && !openHamburger) {
      return "h-12 text-header-blue-grey bg-white shadow-md";
    } else {
      return "h-12 text-header-blue-grey bg-white";
    }
  }

  return (
    <div
      style={{ transition: "background-color 0.3s ease 0s, box-shadow 0.3s ease 0s, height 0.5s ease 0s" }}
      className={`fixed flex flex-row top-0 left-0 right-0 px-4 items-center justify-center z-20 md:hidden ${topBarStyleController()}`}
    >
      <FontAwesomeIcon icon={faBars} onClick={() => setOpenHamburger(!openHamburger)} className="absolute left-4" size="lg" />
      <Link to="/">
        <img src="/topbar-logo.png" alt="logo" className={`w-44 ${scrolled || openHamburger ? "block" : "hidden"}`} />
        <img src="/topbar-logo-dark-mode.png" alt="logo" className={`w-44 ${scrolled || openHamburger ? "hidden" : "block"}`} />
      </Link>
      <FontAwesomeIcon icon={faBatteryQuarter} className="absolute right-4 ml-2 w-5 h-5" size="lg" />
      <menu className={`${openHamburger ? 'flex' : 'hidden'} flex-row fixed w-screen h-full bg-white -z-10 top-0 justify-center text-center items-center m-0 p-0`}>
        <ul>
          {
            ["home", "skills", "projects", "work & edu", "writings"].map((tab, index) => (
              <li className={index !== 0 ? "mt-6" : ""}>
                <Link
                  to={`${index === 0 ? "/" : (index === 3 ? "/workneducation" : `/${tab}`)}`}
                  className="text-xl uppercase text-black tracking-widest"
                  activeClassName="text-black font-bold border-b-4 border-solid border-black"
                  partiallyActive={index !== 0 ? true : false}
                >
                  {tab}
                </Link>
              </li>
            ))
          }
        </ul>
      </menu>
    </div>
  );
};

export default TopBar;
