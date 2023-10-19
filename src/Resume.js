import React from "react";

function Resume() {
  return (
    <div className="component-container">
      <h2 className="project-title">Resume</h2>
      <div className="resume-container">
        <iframe
          className="resume-img"
          title="resume"
          src={require("./images/resume_current_portfoliosite.pdf")}
        />
      </div>
    </div>
  );
}

export default Resume;
