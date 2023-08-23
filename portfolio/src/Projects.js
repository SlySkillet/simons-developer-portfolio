import { React, useState } from 'react'
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
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel';


function Projects(){
    const [showPlunge, setShowPlunge] = useState(false)
    const [showRadCar, setShowRadCar] = useState(false)
    const [showTaskManager, setShowTaskManager] = useState(false)

    const handleClosePlunge = () => setShowPlunge(false)
    const handleShowPlunge = () => setShowPlunge(true)
    const handleCloseRadCar = () => setShowRadCar(false)
    const handleShowRadCar = () => setShowRadCar(true)
    const handleCloseTaskManager = () => setShowTaskManager(false)
    const handleShowTaskManager = () => setShowTaskManager(true)

    return(
        <div className="projects-container">
            <h2 className="project-title">Projects</h2>
            <div className="project-container left">
                <div className="project-content">
                    <div className="project-header">
                    <h5 className="project-description title">Plunge</h5>
                    <p className="shaded-text">August, 2023</p>
                    </div>
                    <div className="screenshots-container">
                        <Button onClick={handleShowPlunge}>
                            <img className="screenshot" src={"https://media.licdn.com/dms/image/D562DAQE6ayHFI2SwyQ/profile-treasury-image-shrink_1280_1280/0/1691459202712?e=1693429200&v=beta&t=WZcZ8_lmKEdL9ZTXDIJ-IeEYddaRuzZxDLDbgNP1W34"} alt="main page" width="170"/>
                        </Button>
                        <Button onClick={handleShowPlunge}>
                            <img className="screenshot" src={"https://media.licdn.com/dms/image/D562DAQETpzlu-UP0hQ/profile-treasury-image-shrink_1280_1280/0/1691459175346?e=1693429200&v=beta&t=nZwinJl889CVJ_gI6LGR98QES2RXovYBHm0koxWgpuc"} alt="location page" width="170"/>
                        </Button>
                        <Button onClick={handleShowPlunge}>
                            <img className="screenshot" src={"https://media.licdn.com/dms/image/D562DAQHxXEuRP777dA/profile-treasury-image-shrink_1280_1280/0/1691459254501?e=1693429200&v=beta&t=0HnCHvxj47IkxuBLqVrn1Vw-XzAzdyx0V3NSj7yq-8I"} alt="categories page" width="170"/>
                        </Button>
                    </div>
                    <Modal show={showPlunge} onHide={handleClosePlunge} size="xl">
                            <Modal.Header closeButton>
                            <Modal.Title>Plunge</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Carousel data-bs-theme="dark" indicators={false}>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://media.licdn.com/dms/image/D562DAQE6ayHFI2SwyQ/profile-treasury-image-shrink_1280_1280/0/1691459202712?e=1693429200&v=beta&t=WZcZ8_lmKEdL9ZTXDIJ-IeEYddaRuzZxDLDbgNP1W34"
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://media.licdn.com/dms/image/D562DAQETpzlu-UP0hQ/profile-treasury-image-shrink_1280_1280/0/1691459175346?e=1693429200&v=beta&t=nZwinJl889CVJ_gI6LGR98QES2RXovYBHm0koxWgpuc"
                                    alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://media.licdn.com/dms/image/D562DAQHxXEuRP777dA/profile-treasury-image-shrink_1280_1280/0/1691459254501?e=1693429200&v=beta&t=0HnCHvxj47IkxuBLqVrn1Vw-XzAzdyx0V3NSj7yq-8I"
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                                </Carousel>
                            </Modal.Body>
                    </Modal>
                    <div className="tech-icons-container">
                        <SiFastapi className="tech-icon"/>
                        <SiReact className="tech-icon"/>
                        <SiPython className="tech-icon"/>
                        <SiJavascript className="tech-icon" />
                        <SiPostgresql className="tech-icon" />
                        <SiGooglecloud className="tech-icon" />
                        <SiDocker className="tech-icon" />
                    </div>
                    <p className="project-description">I created this peer-to-peer marketplace application from scratch in a team of four cohort-mates at Hack Reactor. We began with the idea to build a platform housing informal classes for local people to share their knowledge, acquire new skills and foster community. This was my first experience taking a full stack application from seed to deployment. Over 6 weeks we wire-framed our vision for the application, built a development environment with docker, created our backend using Fast API and a SQL database, and created a dynamic user interface with React.js. This was a lesson in iterative development and agile methodology. Working in a team like this was a hands on lesson in Git workflow and general project organization. We used Linear to create and assign tickets and linked it up with Git Lab where we filled our merge requests. I am particularly proud of my work in implementing the Google Maps API and Redux toolkit into this project. The map centers on the authenticated user's address provided in their account information and accessed through the Redux store. Learning to work with global state and Google API were my highest priority learning goals in this project and I'm very happy with our product.</p>
                    <div className="project-detail-container">
                        <p className="project-detail">Deployed app: <Link className="project-link" to="https://luckythirteen.gitlab.io/plunge/">Plunge</Link> | Repo: <Link className="project-link" to="https://gitlab.com/luckythirteen/plunge">GitLab</Link></p>
                    </div>
                    <div className="project-detail-container">
                        <p className="project-detail">React | FastAPI | Python | Javascript | SQL | Google Cloud Platform</p>
                    </div>
                </div>
            </div>
            <div className="project-container right">
                <div className="project-content">
                <div className="project-header">
                    <h5 className="project-description title">RadCar Automobiles</h5>
                    <p className="shaded-text">June, 2023</p>
                </div>
                    <div className="screenshots-container">
                        <Button onClick={handleShowRadCar}>
                            <img className="screenshot" src={"https://media.licdn.com/dms/image/D562DAQG8LH2utQWWhg/profile-treasury-image-shrink_800_800/0/1687635427725?e=1693429200&v=beta&t=UWehSGzUd1jSjyW_ZeHUvy-Ufj3G2KmobHGrX42tsF0"} alt="main page" width="170"/>
                        </Button>
                        <Button onClick={handleShowRadCar}>
                            <img className="screenshot" src={"https://media.licdn.com/dms/image/D562DAQHvEMs6fkP8pQ/profile-treasury-image-shrink_800_800/0/1687635161251?e=1693429200&v=beta&t=putz3gZsI8rbsTWJWrhxENc8RrqjXixR-rWi3GfOiYI"} alt="location page" width="170"/>
                        </Button>
                    </div>
                    <Modal show={showRadCar} onHide={handleCloseRadCar} size="xl">
                            <Modal.Header closeButton>
                            <Modal.Title>RadCar Automobiles</Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                            <Carousel data-bs-theme="dark" indicators={false}>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100 radcar-modal-img"
                                    src="https://media.licdn.com/dms/image/D562DAQG8LH2utQWWhg/profile-treasury-image-shrink_800_800/0/1687635427725?e=1693429200&v=beta&t=UWehSGzUd1jSjyW_ZeHUvy-Ufj3G2KmobHGrX42tsF0"
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://media.licdn.com/dms/image/D562DAQHvEMs6fkP8pQ/profile-treasury-image-shrink_800_800/0/1687635161251?e=1693429200&v=beta&t=putz3gZsI8rbsTWJWrhxENc8RrqjXixR-rWi3GfOiYI"
                                    alt="Second slide"
                                    />
                                </Carousel.Item>
                                </Carousel>
                            </Modal.Body>
                    </Modal>
                    <div className="tech-icons-container">
                        <SiReact className="tech-icon" />
                        <TbBrandDjango className="tech-icon" />
                        <SiPython className="tech-icon" />
                        <SiJavascript className="tech-icon" />
                        <SiDocker className="tech-icon" />
                    </div>
                    <p className="project-description">This was a challenging project I took on in the second module of Hack Reactor. Many thanks to my partner Mac Stephens! Together we put together three microservices to handle an auto-dealership's inventory, services and sales. After completing a functional application, I did some experimenting with the user interface and gained some valuable experience incorporating bootstrap and custom css in React.</p>
                    <div className="project-detail-container">
                        <p className="project-detail">Repo: <Link className="project-link" to="https://gitlab.com/macstephens/project-beta/-/tree/layout-experiment">GitLab</Link></p>
                    </div>
                    <div className="project-detail-container">
                        <p className="project-detail">Django | React | Python | Javascript | Docker</p>
                    </div>
                </div>
                <div className="project-content">
                <div className="project-header">
                    <h5 className="project-description title">Task Manager</h5>
                    <p className="shaded-text">April, 2023</p>
                </div>
                    <div className="screenshots-container">
                        <Button onClick={handleShowTaskManager}>
                            <img className="screenshot" src={"https://media.licdn.com/dms/image/D562DAQGFa_TGDYSuYQ/profile-treasury-image-shrink_800_800/0/1688572545192?e=1693429200&v=beta&t=d4z8MpdH_2FrQgxRTjPSPFaa5SjR0cAY8QX1NS8YC3I"} alt="main page" width="170"/>
                        </Button>
                        <Button onClick={handleShowTaskManager}>
                            <img className="screenshot" src={"https://media.licdn.com/dms/image/D562DAQF-7M0Lsy7MPw/profile-treasury-image-shrink_800_800/0/1688572501813?e=1693429200&v=beta&t=QB7nPdqMX3J8TFqgiht7iYvL9s40vnLGKW94ype17NA"} alt="location page" width="170"/>
                        </Button>
                    </div>
                    <Modal show={showTaskManager} onHide={handleCloseTaskManager} size="xl">
                            <Modal.Header closeButton>
                            <Modal.Title>Task Manager</Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                            <Carousel data-bs-theme="dark" indicators={false}>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://media.licdn.com/dms/image/D562DAQGFa_TGDYSuYQ/profile-treasury-image-shrink_800_800/0/1688572545192?e=1693429200&v=beta&t=d4z8MpdH_2FrQgxRTjPSPFaa5SjR0cAY8QX1NS8YC3I"
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://media.licdn.com/dms/image/D562DAQF-7M0Lsy7MPw/profile-treasury-image-shrink_800_800/0/1688572501813?e=1693429200&v=beta&t=QB7nPdqMX3J8TFqgiht7iYvL9s40vnLGKW94ype17NA"
                                    alt="Second slide"
                                    />
                                </Carousel.Item>
                                </Carousel>
                            </Modal.Body>
                    </Modal>
                    <div className="tech-icons-container">
                        <TbBrandDjango className="tech-icon" />
                        <SiPython className="tech-icon" />
                        <SiPlotly className="tech-icon" />
                    </div>
                    <p className="project-description">This is the first application I built from scratch using Django. It is a task manager for a contributors to a project to organize and visualize team progress. This was my first try at implementing a 3rd party api (plotly) and data visualization. I built a full stack application from scratch giving a project manager the ability to assign and monitor progress through a clean user interface with Django 4 framework. I inncorporated gantt charts in the user interface to provide visual representation of project tasks, their due dates and progress towards completion by integrating Plotly API.</p>
                    <div className="project-detail-container">
                        <p className="project-detail">Repo: <Link className="project-link" to="https://gitlab.com/SlySkillet/project-alpha-apr/-/tree/chart_experiment?ref_type=heads">GitLab</Link></p>
                    </div>
                    <div className="project-detail-container">
                        <p className="project-detail">Django | Python | Plotly API</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
