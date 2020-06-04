import React from "react"

import Root from "../components/root/Root";

const IndexPage = () => {
  return (
    <Root>
      <div className="homepage">
        <main className="homepage-main">
          <div className="homepage-intro">
            <h1 className="homepage-intro-h1">
              <span className="homepage-header-name">Hello I am Chris.</span>
              <span className="homepage-header-job">I am currently working as a web developer.</span>
            </h1>
            <p className="homepage-header-description">
              As a programmer that was born in Hong Kong, I enjoy designing user-friendly interactive web app.
              I am equipped with solid knowledge of OOP concepts, frontend frameworks and backend implementation.
              I am also enthusiastic in trying and learning latest technology.
            </p>
            <div className="homepage-header-nav">
              <a href="/skills" className="homepage-header-navlink">What I know</a>
              <a href="/projects" className="homepage-header-navlink">See my work</a>
            </div>
          </div>
        </main>
        <footer className="homepage-footer">
          <div className="homepage-footer-wrapper">
            <h1 className="homepage-footer-title">Know more about me</h1>
            <p className="homepage-footer-description">
              In case you want to contact me, just go for <strong>chrisliupascal@gmail.com</strong> and leave a message.
            </p>
          </div>
          <ul className="homepage-footer-ul sidebar-ul sidebar-bottom-ul">
            <li>
              <a href="https://github.com/nighostchris" className="sidebar-bottom-li-a">
                <i className="fab fa-github sidebar-icon" style={{ margin: "0px" }}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chrisliupascal" className="sidebar-bottom-li-a">
                <i className="fab fa-linkedin sidebar-icon" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </Root>
  );
}

export default IndexPage;
