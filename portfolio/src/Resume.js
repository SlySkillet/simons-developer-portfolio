import React from 'react'
// import { Document } from 'react-pdf'

function Resume (){
    return (
        <div className="projects-container">
            <h2 className="project-title">Resume</h2>
            <div className="resume-container">
                <img className="resume-img" alt="resume" src={require('./images/resume-screenshot.png')} />
            </div>
        </div>
    )
}

export default Resume
