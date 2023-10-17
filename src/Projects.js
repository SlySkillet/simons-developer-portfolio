import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiFastapi
        , SiReact
        , SiPython
        , SiJavascript
        , SiPostgresql
        , SiGooglecloud
        , SiPlotly
        , SiDocker } from 'react-icons/si'
import { TbBrandDjango } from "react-icons/tb";
import ProjectCard from './projectCard';


function Projects(){
    const [windowWidth, setWindowWidth] = useState([
        window.innerWidth
    ])

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth([window.innerWidth])
        }
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    const numberColumns = windowWidth > 1360 ? 2 : 1

    if (numberColumns === 2){
        return(
            <div className="projects-container">
                <h2 className="project-title">Projects</h2>
                <div className="project-container left">
                    <ProjectCard
                        projectTitle={"Plunge"}
                        completedDate={"August, 2023"}
                        imageUrls={
                            [
                                "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186839/project_screenshots/plunge_screenshots/main-page_revxhz.png",
                                "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186841/project_screenshots/plunge_screenshots/location-page_myt9ii.png",
                                "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186838/project_screenshots/plunge_screenshots/categories-page_d4shhc.png"
                            ]
                        }
                        imageWidth={"170"}
                        techIcons={[
                            <SiFastapi />,
                            <SiReact />,
                            <SiPython />,
                            <SiJavascript  />,
                            <SiPostgresql  />,
                            <SiGooglecloud  />,
                            <SiDocker  />,
                        ]}
                        description={"I created this peer-to-peer marketplace application from scratch in a team of four cohort-mates at Hack Reactor. We began with the idea to build a platform housing informal classes for local people to share their knowledge, acquire new skills and foster community. This was my first experience taking a full stack application from seed to deployment. Over 6 weeks we wire-framed our vision for the application, built a development environment with docker, created our backend using Fast API and a SQL database, and created a dynamic user interface with React.js. This was a lesson in iterative development and agile methodology. Working in a team like this was a hands on lesson in Git workflow and general project organization. We used Linear to create and assign tickets and linked it up with Git Lab where we filled our merge requests. I am particularly proud of my work in implementing the Google Maps API and Redux toolkit into this project. The map centers on the authenticated user's address provided in their account information and accessed through the Redux store. Learning to work with global state and Google API were my highest priority learning goals in this project and I'm very happy with our product."}
                        liveLink={"https://luckythirteen.gitlab.io/plunge/"}
                        repoLink={"https://github.com/SlySkillet/plunge"}
                        techStack={`React | FastAPI | Python | Javascript | SQL | GoogleMaps`}
                    />
                </div>
                <div className="project-container right">
                <div className="project-content">
                    <div className="project-header">
                        <h5 className="project-description title">Developer Portfolio</h5>
                        <p className="shaded-text">September, 2023</p>
                    </div>
                        <div className="tech-icons-container">
                            <SiReact className="tech-icon" />
                            <SiJavascript className="tech-icon" />
                        </div>
                        <p className="project-description">I built the site you are viewing now from scratch using React and deployed it with GitHub pages. I really enjoyed putting this together and trying out some new design ideas in the process. This is a work in progress, one I will refactor and expand going forward. See my code at the repo-link below.</p>
                        <div className="project-detail-container">
                            <p className="project-detail">Repo: <Link className="project-link" to="https://github.com/SlySkillet/simons-developer-portfolio/" target="_blank" rel="noopener noreferrer">GitHub</Link></p>
                        </div>
                        <div className="project-detail-container">
                            <p className="project-detail">React | Javascript </p>
                        </div>
                    </div>
                    < ProjectCard
                        projectTitle={"RadCar Automobiles"}
                        completedDate={"June, 2023"}
                        imageUrls={[
                            "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186842/project_screenshots/rad_car/radcar_main_page_d6cpoa.png",
                            "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186842/project_screenshots/rad_car/service_history_ppbeum.png"
                        ]}
                        imageWidth={"170"}
                        techIcons={[
                            <SiReact />,
                            <TbBrandDjango />,
                            <SiPython />,
                            <SiJavascript />,
                            <SiDocker />
                        ]}
                        description={"This was a challenging project I took on in the second module of Hack Reactor. Many thanks to my partner Mac Stephens! Together we put together three microservices to handle an auto-dealership's inventory, services and sales. After completing a functional application, I did some experimenting with the user interface and gained some valuable experience incorporating bootstrap and custom css in React."}
                        liveLink={null}
                        repoLink={"https://github.com/SlySkillet/radcar/tree/layout-experiment"}
                        techStack={`Django | React | Python | Javascript | Docker`}
                    />
                    < ProjectCard
                        projectTitle={"Task Manager"}
                        completedDate={"April, 2023"}
                        imageUrls={[
                            "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186838/project_screenshots/task_manager/my_tasks_f1tqob.png",
                            "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186838/project_screenshots/task_manager/project_view_fv3vby.png"
                        ]}
                        imageWidth={"170"}
                        techIcons={[
                            <TbBrandDjango />,
                            <SiPython />,
                            <SiPlotly />
                        ]}
                        description={"This is the first application I built from scratch using Django. It is a task manager for a contributors to a project to organize and visualize team progress. This was my first try at implementing a 3rd party api (plotly) and data visualization. I built a full stack application from scratch giving a project manager the ability to assign and monitor progress through a clean user interface with Django 4 framework. I inncorporated gantt charts in the user interface to provide visual representation of project tasks, their due dates and progress towards completion by integrating Plotly API."}
                        liveLink={null}
                        repoLink={"https://github.com/SlySkillet/task-manager/tree/chart_experiment"}
                        techStack={`Django | Python | Plotly API`}
                    />
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="projects-container">
                <h2 className="project-title">Projects</h2>
                <div className="project-container center">
                <div className="project-content">
                    <div className="project-header">
                        <h5 className="project-description title">Developer Portfolio</h5>
                        <p className="shaded-text">September, 2023</p>
                    </div>
                        <div className="tech-icons-container">
                            <SiReact className="tech-icon" />
                            <SiJavascript className="tech-icon" />
                        </div>
                        <p className="project-description">I built the site you are viewing now from scratch using React and deployed it with GitHub pages. I really enjoyed putting this together and trying out some new design ideas in the process. This is a work in progress, one I will refactor and expand going forward. See my code at the repo-link below. </p>
                        <div className="project-detail-container">
                            <p className="project-detail">Repo: <Link className="project-link" to="https://github.com/SlySkillet/simons-developer-portfolio/" target="_blank" rel="noopener noreferrer">GitHub</Link></p>
                        </div>
                        <div className="project-detail-container">
                            <p className="project-detail">React | Javascript </p>
                        </div>
                    </div>
                    <ProjectCard
                        projectTitle={"Plunge"}
                        completedDate={"August, 2023"}
                        imageUrls={
                            [
                                "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186839/project_screenshots/plunge_screenshots/main-page_revxhz.png",
                                "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186841/project_screenshots/plunge_screenshots/location-page_myt9ii.png",
                                "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186838/project_screenshots/plunge_screenshots/categories-page_d4shhc.png"
                            ]
                        }
                        imageWidth={"170"}
                        techIcons={[
                            <SiFastapi />,
                            <SiReact />,
                            <SiPython />,
                            <SiJavascript  />,
                            <SiPostgresql  />,
                            <SiGooglecloud  />,
                            <SiDocker  />,
                        ]}
                        description={"I created this peer-to-peer marketplace application from scratch in a team of four cohort-mates at Hack Reactor. We began with the idea to build a platform housing informal classes for local people to share their knowledge, acquire new skills and foster community. This was my first experience taking a full stack application from seed to deployment. Over 6 weeks we wire-framed our vision for the application, built a development environment with docker, created our backend using Fast API and a SQL database, and created a dynamic user interface with React.js. This was a lesson in iterative development and agile methodology. Working in a team like this was a hands on lesson in Git workflow and general project organization. We used Linear to create and assign tickets and linked it up with Git Lab where we filled our merge requests. I am particularly proud of my work in implementing the Google Maps API and Redux toolkit into this project. The map centers on the authenticated user's address provided in their account information and accessed through the Redux store. Learning to work with global state and Google API were my highest priority learning goals in this project and I'm very happy with our product."}
                        liveLink={"https://luckythirteen.gitlab.io/plunge/"}
                        repoLink={"https://github.com/SlySkillet/plunge"}
                        techStack={`React | FastAPI | Python | Javascript | SQL | GoogleMaps`}
                    />
                    < ProjectCard
                        projectTitle={"RadCar Automobiles"}
                        completedDate={"June, 2023"}
                        imageUrls={[
                            "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186842/project_screenshots/rad_car/radcar_main_page_d6cpoa.png",
                            "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186842/project_screenshots/rad_car/service_history_ppbeum.png"
                        ]}
                        imageWidth={"170"}
                        techIcons={[
                            <SiReact />,
                            <TbBrandDjango />,
                            <SiPython />,
                            <SiJavascript />,
                            <SiDocker />
                        ]}
                        description={"This was a challenging project I took on in the second module of Hack Reactor. Many thanks to my partner Mac Stephens! Together we put together three microservices to handle an auto-dealership's inventory, services and sales. After completing a functional application, I did some experimenting with the user interface and gained some valuable experience incorporating bootstrap and custom css in React."}
                        liveLink={null}
                        repoLink={"https://github.com/SlySkillet/radcar/tree/layout-experiment"}
                        techStack={`Django | React | Python | Javascript | Docker`}
                    />
                    < ProjectCard
                        projectTitle={"Task Manager"}
                        completedDate={"April, 2023"}
                        imageUrls={[
                            "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186838/project_screenshots/task_manager/my_tasks_f1tqob.png",
                            "https://res.cloudinary.com/ddgt67wcb/image/upload/v1694186838/project_screenshots/task_manager/project_view_fv3vby.png"
                        ]}
                        imageWidth={"170"}
                        techIcons={[
                            <TbBrandDjango />,
                            <SiPython />,
                            <SiPlotly />
                        ]}
                        description={"This is the first application I built from scratch using Django. It is a task manager for a contributors to a project to organize and visualize team progress. This was my first try at implementing a 3rd party api (plotly) and data visualization. I built a full stack application from scratch giving a project manager the ability to assign and monitor progress through a clean user interface with Django 4 framework. I inncorporated gantt charts in the user interface to provide visual representation of project tasks, their due dates and progress towards completion by integrating Plotly API."}
                        liveLink={null}
                        repoLink={"https://github.com/SlySkillet/task-manager/tree/chart_experiment"}
                        techStack={`Django | Python | Plotly API`}
                    />
                </div>
            </div>
        )
    }
}

export default Projects
