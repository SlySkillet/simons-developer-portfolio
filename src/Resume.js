import React from 'react'

function Resume (){
    return (
        <div className="projects-container">
            <h2 className="project-title">Resume</h2>
            <div className="resume-container">
                <iframe className="resume-img" title="resume" src={require('./images/simon_conrad_resume_current.pdf')}/>
            </div>
        </div>
    )
}

export default Resume
