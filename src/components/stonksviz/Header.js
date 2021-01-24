import React from "react";
import { Link } from "gatsby";
import { Transition } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ props }) => {
  const { logo } = props;

  const linkList = [
    { title: "S&P Breadth", link: "/stonksviz/snpbreadth" },
    { title: "CIF", link: "/stonksviz/cif" }
  ];

  const [openHamburger, setOpenHamburger] = React.useState(false);

  return (
    <>
      <header className="text-gray-600 body-font border-b-2 border-gray-300 hidden md:block">
        <div className="container mx-auto flex flex-wrap px-4 py-4 lg:py-5 flex-col md:flex-row items-center">
          <Link to="/stonksviz" className="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt="header-logo" /> 
            <span className="ml-3 text-xl">StonksViz</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            {
              linkList.map((tab) => (
                <Link to={tab.link} className="mr-5 hover:text-gray-900">{tab.title}</Link>
              ))
            }
          </nav>
        </div>
      </header>
      <header>
        <div className="flex flex-row items-center h-14 justify-center md:hidden border-b-2 border-gray-300 z-20">
          <FontAwesomeIcon icon={faBars} onClick={() => setOpenHamburger(!openHamburger)} className="absolute right-6 z-20" size="lg" />
          <Link to="/stonksviz" className="flex font-medium items-center text-gray-900 z-20">
            <img src={logo} alt="header-logo" />
            <span className="ml-3 text-xl">StonksViz</span>
          </Link>
        </div>
        <Transition
          show={openHamburger}
          as="menu"
          className="flex flex-row absolute w-screen h-full bg-white z-10 top-14 justify-center text-center items-center m-0 p-0"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 -translate-y-full"
          enterTo="transform opacity-100 translate-y-0"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 translate-y-0"
          leaveTo="transform opacity-0 -translate-y-full"
        >
          <ul>
            {
              linkList.map((tab, index) => (
                <li className={index !== 0 ? "mt-6" : ""}>
                  <Link
                    to={tab.link}
                    className="text-xl uppercase text-black tracking-widest"
                    activeClassName="text-black font-bold border-b-4 border-solid border-black"
                    partiallyActive={index !== 0 ? true : false}
                  >
                    { tab.title }
                  </Link>
                </li>
              ))
            }
          </ul>
        </Transition>
      </header>
    </>
  );
};

export default Header;
