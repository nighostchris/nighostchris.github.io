import React from "react";
import { Helmet } from "react-helmet";
import Root from "../components/root/Root";
import ButtonLink from '../components/ButtonLink';

const ProjectsPage = ({ data }) => {
  const projects = data.allProjectsJson.edges;
  
  return (
    <Root>
      <Helmet>
        <title>Chris Liu - Projects</title>
      </Helmet>
      <div className="main-content-projects">
        <h1 className="projects-header">
          <span>Some work by me.</span>
        </h1>
        <div className="card" style={{ width: '100%' }}>
          <img className="card-img" src={projects[0].node.imgsrc} alt={projects[0].node.imgalt} />
          <div className="card-body">
            <h2 className="card-title">{projects[0].node.title}</h2>
            <h3 className="card-subtitle">{projects[0].node.subtitle}</h3>
            <p className="card-text">{projects[0].node.description}</p>
            <ButtonLink to={projects[0].node.href} className="card-button">
              Know More
            </ButtonLink>
          </div>
        </div>
        <div className="card-wrapper">
          {
            [1, 2].map((projectIndex) => (
              <div className="card" style={{ width: '48%' }}>
                <img className="card-img card-img-clip" src={projects[projectIndex].node.imgsrc} alt={projects[projectIndex].node.imgalt} />
                <div className="card-body">
                  <h2 className="card-title">{projects[projectIndex].node.title}</h2>
                  <h3 className="card-subtitle">{projects[projectIndex].node.subtitle}</h3>
                  <p className="card-text">{projects[projectIndex].node.description}</p>
                  <ButtonLink to={projects[projectIndex].node.href} className="card-button">
                    Know More
                  </ButtonLink>
                </div>
              </div>
            ))
          }
        </div>
        {
          [3, 4, 5].map((projectIndex) => (
            <div className="card-wrapper">
              <div className="card" style={{ width: '100%' }}>
                <img
                  className="card-img card-img-cover"
                  src={projects[projectIndex].node.imgsrc}
                  alt={projects[projectIndex].node.imgalt} 
                  style={{ objectPosition: projectIndex === 4 ? "center" : "top"}}
                />
                <div className="card-body">
                  <h2 className="card-title">{projects[projectIndex].node.title}</h2>
                  <h3 className="card-subtitle">{projects[projectIndex].node.subtitle}</h3>
                  <p className="card-text">{projects[projectIndex].node.description}</p>
                  <ButtonLink to={projects[projectIndex].node.href} className="card-button">
                    Know More
                  </ButtonLink>
                </div>
              </div>
            </div>
          ))
        }
        <div className="card-wrapper">
          <div className="card-wrapper-column" style={{ width: '48%' }}>
            <div className="card" style={{ width: '100%' }}>
              <img className="card-img" src={projects[6].node.imgsrc} alt={projects[6].node.imgalt} />
              <div className="card-body">
                <h2 className="card-title">{projects[6].node.title}</h2>
                <h3 className="card-subtitle">{projects[6].node.subtitle}</h3>
                <p className="card-text">{projects[6].node.description}</p>
                <ButtonLink to={projects[6].node.href} className="card-button">
                  Know More
                </ButtonLink>
              </div>
            </div>
            <div className="card" style={{ width: '100%' }}>
              <img className="card-img" src={projects[7].node.imgsrc} alt={projects[7].node.imgalt} />
              <div className="card-body">
                <h2 className="card-title">{projects[7].node.title}</h2>
                <h3 className="card-subtitle">{projects[7].node.subtitle}</h3>
                <p className="card-text">{projects[7].node.description}</p>
                <ButtonLink to={projects[7].node.href} className="card-button">
                  Know More
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: '48%' }}>
            <img className="card-img card-img-long" src={projects[8].node.imgsrc} alt={projects[8].node.imgalt} />
            <div className="card-body">
              <h2 className="card-title">{projects[8].node.title}</h2>
              <h3 className="card-subtitle">{projects[8].node.subtitle}</h3>
              <p className="card-text">{projects[8].node.description}</p>
              <ButtonLink to={projects[8].node.href} className="card-button">
                Know More
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

export const projectsListQuery = graphql`
  query projectsListQuery {
    allProjectsJson {
      edges {
        node {
          imgsrc
          imgalt
          title
          subtitle
          description
          href
        }
      }
    }
  }
`;

export default ProjectsPage;
