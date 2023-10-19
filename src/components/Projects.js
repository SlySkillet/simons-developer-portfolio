import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SiFastapi,
  SiReact,
  SiPython,
  SiJavascript,
  SiPostgresql,
  SiGooglecloud,
  SiPlotly,
  SiDocker,
} from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";
import ProjectCard from "./projects/projectCard";

import Plunge from "./projects/plunge";
import DevPortfolio from "./projects/devPortfolio";
import RadCar from "./projects/radCar";

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
          <ProjectCard
            projectTitle={"Task Manager"}
            completedDate={"April, 2023"}
            imageUrls={[
              "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186838/project_screenshots/task_manager/my_tasks_f1tqob.png",
              "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186838/project_screenshots/task_manager/project_view_fv3vby.png",
            ]}
            imageWidth={"170"}
            techIcons={[<TbBrandDjango />, <SiPython />, <SiPlotly />]}
            description={
              "This is the first application I built from scratch using Django. It is a task manager for a contributors to a project to organize and visualize team progress. This was my first try at implementing a 3rd party api (plotly) and data visualization. I built a full stack application from scratch giving a project manager the ability to assign and monitor progress through a clean user interface with Django 4 framework. I inncorporated gantt charts in the user interface to provide visual representation of project tasks, their due dates and progress towards completion by integrating Plotly API."
            }
            liveLink={null}
            repoLink={
              "https://github.com/SlySkillet/task-manager/tree/chart_experiment"
            }
            techStack={`Django | Python | Plotly API`}
          />
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
          <ProjectCard
            projectTitle={"Task Manager"}
            completedDate={"April, 2023"}
            imageUrls={[
              "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186838/project_screenshots/task_manager/my_tasks_f1tqob.png",
              "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186838/project_screenshots/task_manager/project_view_fv3vby.png",
            ]}
            imageWidth={"170"}
            techIcons={[<TbBrandDjango />, <SiPython />, <SiPlotly />]}
            description={
              "This is the first application I built from scratch using Django. It is a task manager for a contributors to a project to organize and visualize team progress. This was my first try at implementing a 3rd party api (plotly) and data visualization. I built a full stack application from scratch giving a project manager the ability to assign and monitor progress through a clean user interface with Django 4 framework. I inncorporated gantt charts in the user interface to provide visual representation of project tasks, their due dates and progress towards completion by integrating Plotly API."
            }
            liveLink={null}
            repoLink={
              "https://github.com/SlySkillet/task-manager/tree/chart_experiment"
            }
            techStack={`Django | Python | Plotly API`}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
