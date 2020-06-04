import React from "react";
import PropTypes from "prop-types";
import "./topbar.css";

const TopBar = ({ scrolled }) => {
  const [openHamburger, setOpenHamburger] = React.useState(false);

  return (
    <div className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
      <div className="topbar-hamburger">
        <i
          role="button"
          className="fas fa-bars hamburger"
          onClick={() => setOpenHamburger(!openHamburger)}
        />
      </div>
      <div className="topbar-title-wrapper">
        <a href="/" style={{ textDecoration: "none" }}>
          <h1 className="topbar-title">{`Chris  -  Liu`}</h1>
        </a>
      </div>
      <menu className="topbar-menu" style={{ display: openHamburger ? 'flex' : 'none' }}>
        <nav>
          <ul className="topbar-ul">
            {
              ["home", "skills", "projects", "work & edu"].map((tab, index) => (
                <li className="topbar-li">
                  <a
                    className="topbar-li-a"
                    href={`/${index === 0 ? "" : (index === 3 ? "workneducation" : tab)}`}
                  >
                    {tab}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </menu>
    </div>
  );
};

TopBar.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};

export default TopBar;
