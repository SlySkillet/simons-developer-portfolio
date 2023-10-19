import React from "react";
import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub } from "react-icons/si";

function Footer() {
  return (
    <div className="footer">
      <p className="thanks">Thanks for visiting!</p>
      <Link className="nav-link contact" to="/contact">
        Contact Me
      </Link>
      <div className="footer-link">
        <Link
          className="nav-link"
          to="https://www.linkedin.com/in/simon-conrad/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin />
        </Link>
        <Link
          className="nav-link"
          to="https://github.com/SlySkillet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
