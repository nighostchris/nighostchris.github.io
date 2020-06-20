import React from "react";
import PropTypes from "prop-types";
import Link from '../Link';
import ButtonLink from '../ButtonLink';
import "./topbar.css";

const TopBar = ({ scrolled, darkMode }) => {
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
      <ButtonLink to="/" style={{ height: '36px' }}><img src="/topbar-logo.png" alt="topbar-logo" className="topbar-logo" /></ButtonLink>
      <ButtonLink to="/" style={{ height: '36px' }}><img src="/topbar-logo-dark-mode.png" alt="topbar-logo" className="topbar-logo-dark-mode" /></ButtonLink>
      <div className="topbar-alerts" onClick={darkMode.toggle}>
        <i className="fas fa-signal alerts-icons" />
        <i className="fas fa-wifi alerts-icons" />
        <i className="fas fa-battery-quarter alerts-icons" />
      </div>
      <menu className="topbar-menu" style={{ display: openHamburger ? 'flex' : 'none' }}>
        <nav>
          <ul className="topbar-ul">
            {
              ["home", "skills", "projects", "work & edu", "writings"].map((tab, index) => (
                <li className="topbar-li">
                  <Link to={`${index === 0 ? "/" : (index === 3 ? "/workneducation" : `/${tab}`)}`}>{tab}</Link>
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
  darkMode: PropTypes.any.isRequired
};

export default TopBar;
