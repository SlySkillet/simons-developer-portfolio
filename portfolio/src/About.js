import React from 'react'

function About(){
    return(
        <div className="about-container">
            <div className="about-content-name-container">
                <h1 className="about-content name">Simon</h1>
                <h1 className="about-content name">Conrad</h1>
            </div>
            <div className="about-content-sub-container">
                <h5 className="about-content profession">Software Engineer</h5>
                <p className="sub-text">Python | Javascript | React | Django | FastAPI | SQL | Docker</p>
            </div>
            <img className="portrait" alt="simon" src={require('./images/portrait.JPEG')}/>
            <p className="about-content bio">I am a creative developer with a background in art and fine dining. My interest in software began as a desire to create and solve complex puzzles in the process. I find that code combines mathematical logic with imaginitive design. I'm excited to keep creating and exploring new possibilities in the tech industry.</p>
            <p className="about-content bio two">Away from the computer, you’ll find me running, diving in deep water, snowboarding or whipping up a good meal.</p>
            <p className="sub-text">Hack Reactor Graduate - 2023 | BA Earlham College - 2014</p>

        </div>
    )
}

export default About
