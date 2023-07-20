import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  const projectLink = () => {
    window.location.href = project.link;
  };
   
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt='' />
      <p>
         <b>{project.skills}</b>
      </p>
        <button className="button-3" onClick={projectLink}>Open the project</button>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDisplay;