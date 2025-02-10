import "./Gallery.css";
import { projectsData } from "../../utils/portfolioData";
import Project from "./Project";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="h2-title">{projectsData.galleryTitle}</h2>
      <div className="icons-container gallery">
        {projectsData.galleryProjects.map((project) => {
          return (
            <Project
              name={project.name}
              link={project.link}
              image={project.image}
              key={project.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
