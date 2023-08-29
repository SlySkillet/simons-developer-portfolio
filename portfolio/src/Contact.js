import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Contact(){
    return(
        <div className="projects-container">
            <div className='about-content-name-container'>
                <h2 className="project-title">Contact</h2><h2 className="project-title">Me</h2>
            </div>
            <div className="resume-container">
                <h3 className="contact-subtitle">Social:</h3>
                <div className="contact-links-container">
                    <Link to="https://www.linkedin.com/in/simon-conrad/"><Button variant="outline-info">LinkedIn</Button></Link>
                    <Link to="https://github.com/SlySkillet"><Button variant="outline-info">GitHub</Button></Link>
                </div>
            </div>


        </div>
    )
}

export default Contact
