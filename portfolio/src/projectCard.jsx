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
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel';

function ProjectCard({
    projectTitle,
    completedDate,
    imageUrls,
    imageWidth,
    techStack,
    description,
    liveLink,
    repoLink
}) {
    const [projectModal, setProjectModal] = useState(false)

    // const handleCloseProjectModal = () => setProjectModal(false)
    const handleShowProjectModal = () => setProjectModal(true)
    return(
    <div className="project-content">
        <div className="project-header">
            <h5 className="project-description title">{projectTitle}</h5>
            <p className="shaded-text">{completedDate}</p>
        </div>
    <div className="screenshots-container">
        {imageUrls.map((url) => {
            return (<Button onClick={handleShowProjectModal} key={url}>
                <img className="screenshot" src={url} alt="screenshot" width={imageWidth}/>
            </Button>)
})}
    </div>
    {/* <Modal show={projectModal} onHide={handleCloseProjectModal} size="xl">
            <Modal.Header closeButton>
            <Modal.Title>{projectTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Carousel data-bs-theme="dark" indicators={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imageUrls[0]}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imageUrls[1]}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imageUrls[2]}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            </Modal.Body>
    </Modal> */}
    {/* <div className="tech-icons-container">
        {techStack.map((icon) => (
            <div key={idx} >{icon}</div>
        ))}
    </div> */}
    {/* <p className="project-description">{description}</p>
    <div className="project-detail-container">
        <p className="project-detail">Deployed app: <Link className="project-link" to="https://luckythirteen.gitlab.io/plunge/" target="_blank" rel="noopener noreferrer">Plunge</Link> | Repo: <Link className="project-link" to="https://gitlab.com/luckythirteen/plunge" target="_blank" rel="noopener noreferrer">GitLab</Link></p>
    </div>
    <div className="project-detail-container">
        <p className="project-detail">React | FastAPI | Python | Javascript | SQL | GoogleMaps</p>
    </div> */}
</div>
)
}

export default ProjectCard
