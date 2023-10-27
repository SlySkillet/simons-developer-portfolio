import "../Blog2.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiTreasureMap } from "react-icons/gi";

function Post2() {
  return (
    <div className="blog-post-container notfirst right">
      <div className="timeline-icon right-icon">
        <div className="icon-wrapper FaMapMarkedAlt">
          <i className="icon FaMapMarkedAlt">
            <FaMapMarkedAlt />
          </i>
        </div>
      </div>
      <div className="blog-post">
        <p className="post-date"> Oct 14, 2023</p>
        <h4 className="post-title">
          Google releases new suite of mapping software
        </h4>
        <div className="inner-post-container">
          <GiTreasureMap className="thumbnail post1" />
          <p className="post-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <ui className="post-content">
            <li>
              something to say and a <Link className="blog-link">link</Link>
            </li>
            <li>
              <Link className="blog-link">Something else to read</Link>
            </li>
            <li>some other stuff</li>
          </ui>
        </div>
        <div className="post-lower">
          <p className="tag">#mapping</p>
        </div>
      </div>
    </div>
  );
}

export default Post2;
