import { Link } from "react-router-dom";
import { SiReact, SiJavascript } from "react-icons/si";

function DevPortfolio() {
  return (
    <div className="project-content">
      <div className="project-header">
        <h5 className="project-description title">Developer Portfolio</h5>
        <p className="shaded-text">September, 2023</p>
      </div>
      <div className="tech-icons-container">
        <SiReact className="tech-icon" />
        <SiJavascript className="tech-icon" />
      </div>
      <p className="project-description">
        I built the site you are viewing now from scratch using React and
        deployed it with Vercel. I really enjoyed putting this together and
        trying out some new design ideas in the process. This is a work in
        progress, one I will continue to iterate and expand. See my code at the
        repo-link below.
      </p>
      <div className="project-detail-container">
        <p className="project-detail">
          Repo:{" "}
          <Link
            className="project-link"
            to="https://github.com/SlySkillet/simons-developer-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </p>
      </div>
      <div className="project-detail-container">
        <p className="project-detail">React | Javascript </p>
      </div>
    </div>
  );
}

export default DevPortfolio;
