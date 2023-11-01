import "../Blog2.css";
import { Link } from "react-router-dom";
import { GiBrain } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";

function Post3() {
  return (
    <div className="blog-post-container notfirst left">
      <div className="timeline-icon left-icon">
        <div className="icon-wrapper GiBrain">
          <i className="icon">
            <GiBrain />
          </i>
        </div>
      </div>
      <div className="blog-post">
        <p className="post-date"> Oct 20, 2023</p>
        <h4 className="post-title">UK on AI threats</h4>
        <div className="inner-post-container">
          <SiHiveBlockchain className="thumbnail post1" />
          <p className="post-content">
            This document provides an overview of what threats of AI are going
            forward. Much talk of the threat posed by an 'AI future' doesn't go
            much deaper than stating that smart people are afraid of this
            technology. What we are looking at is potential for widely
            proliferated misinformation and potential for manipulation by bad
            actors.
          </p>
          <ui className="post-content">
            <li>
              something to say and a <Link className="blog-link">link</Link>
            </li>
            <li>something else</li>
            <li>some other stuff</li>
          </ui>
        </div>
        <div className="post-lower">
          <p className="tag"># technology, AI</p>
        </div>
      </div>
    </div>
  );
}

export default Post3;
