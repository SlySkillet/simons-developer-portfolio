import React from 'react'


function Projects(){
    return(
        <div className="projects-container">
            <h2 className="project-title">Projects</h2>
            <div className="project-container left">
                <div className="project-content">
                    <h5 className="project-description title">Plunge</h5>
                    <div className="screeshots-container">
                        <img className="screenshot" src={ require('./images/main-page.png') } alt="main page" width="175"/>
                        <img className="screenshot" src={ require('./images/location-page.png') } alt="location page" width="175"/>
                        <img className="screenshot" src={ require('./images/categories-page.png') } alt="categories page" width="175"/>
                    </div>
                    <p>I created this peer-to-peer marketplace application from scratch in a team of four cohort-mates at Hack Reactor. We began with the idea to build a platform housing informal classes for local people to share their knowledge, acquire new skills and foster community. This was my first experience taking a full stack application from seed to deployment. Over 6 weeks we wire-framed our vision for the application, built a development environment with docker, created our backend using Fast API and a SQL database, and created a dynamic user interface with React.js. This was a lesson in iterative development and agile methodology. Working in a team like this was a hands on lesson in Git workflow and general project organization. We used Linear to create and assign tickets and linked it up with Git Lab where we filled our merge requests. I am particularly proud of my work in implementing the Google Maps API and Redux toolkit into this project. The map centers on the authenticated user's address provided in their account information and accessed through the Redux store. Learning to work with global state and Google API were my highest priority learning goals in this project and I'm very happy with our product.</p>
                </div>
            </div>
            <div className="project-container right">
                <div className="project-content">
                    <h5 className="project-description title">RadCar Automobiles</h5>
                    <p>This was a challenging project I took on in the second module of Hack Reactor. Many thanks to my partner Mac Stephens! Together we put together three microservices to handle an auto-dealership's inventory, services and sales. After completing a functional application, I did some experimenting with the user interface and gained some valuable experience incorporating bootstrap and custom css in React.</p>
                </div>
                <div className="project-content">
                    <h5 className="project-description title">Task Manager</h5>
                    <p>This is the first application I built from scratch using Django. It is a task manager for a contributors to a project to organize and visualize team progress. This was my first try at implementing a 3rd party api (plotly) and data visualization. I built a full stack application from scratch giving a project manager the ability to assign and monitor progress through a clean user interface with Django 4 framework. I inncorporated gantt charts in the user interface to provide visual representation of project tasks, their due dates and progress towards completion by integrating Plotly API.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects
