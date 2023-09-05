import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {FaLinkedin
, FaGithubAlt
} from 'react-icons/fa'

function Contact(){
    return(
        <div className="projects-container">
            <div className='about-content-name-container'>
                <h2 className="project-title">Contact</h2><h2 className="project-title">Me</h2>
            </div>
            <div className="resume-container">
                <div className="project-content contact-container">
                    <h3 className="contact-subtitle">Social:</h3>
                    <div className="contact-links-container">
                        <Link to="https://www.linkedin.com/in/simon-conrad/" target="_blank" rel="noopener noreferrer"><Button variant="outline-info">LinkedIn < FaLinkedin /></Button></Link>
                        <Link to="https://github.com/SlySkillet" target="_blank" rel="noopener noreferrer"><Button variant="outline-info">GitHub < FaGithubAlt /></Button></Link>
                    </div>
                    <h3 className="contact-subtitle">Email:</h3>
                    <p className="contact-email" to="">simondbconrad@gmail.com</p>
                    <h3 className="contact-subtitle">Discord:</h3>
                    <p className="contact-email">SlySkillet#1031</p>
                    <div className="project-detail-container contact">
                        <p className="contact-detail">I am active on all of the above platforms. Please connect with me on LinkedIn and reach out by whatever method you prefer. I am open to collaborate on projects and open for work. Looking forward to hearing from you. Cheers! </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact
