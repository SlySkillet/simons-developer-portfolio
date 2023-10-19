import { React, useState, useEffect } from "react";

import Plunge from "./projects/plunge";
import DevPortfolio from "./projects/devPortfolio";
import RadCar from "./projects/radCar";
import TaskManager from "./projects/taskManager";

function Projects() {
  const [windowWidth, setWindowWidth] = useState([window.innerWidth]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth([window.innerWidth]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const numberColumns = windowWidth > 1360 ? 2 : 1;

  if (numberColumns === 2) {
    return (
      <div className="projects-container">
        <h2 className="project-title">Projects</h2>
        <div className="project-container left">
          <Plunge />
        </div>
        <div className="project-container right">
          <DevPortfolio />
          <RadCar />
          <TaskManager />
        </div>
      </div>
    );
  } else {
    return (
      <div className="projects-container">
        <h2 className="project-title">Projects</h2>
        <div className="project-container center">
          <DevPortfolio />
          <Plunge />
          <RadCar />
          <TaskManager />
        </div>
      </div>
    );
  }
}

export default Projects;
