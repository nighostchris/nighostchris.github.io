import React from "react";

import "./topbar.css";

const TopBar = () => {
  const [openHamburger, setOpenHamburger] = React.useState(false);

  return (
    <div className="topbar">
      <div className="topbar-hamburger">
        <i
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

export default TopBar;
