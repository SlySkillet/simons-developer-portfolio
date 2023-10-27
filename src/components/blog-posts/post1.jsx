import "../Blog2.css";
import { FaEarlybirds } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiCyberEye } from "react-icons/gi";

function Post1() {
  return (
    <div className="blog-post-container left">
      <div className="timeline-icon left-icon">
        <div className="icon-wrapper">
          <i className="icon">
            <FaEarlybirds />
          </i>
        </div>
      </div>
      <div className="blog-post">
        <p className="post-date"> Oct 20, 2023</p>
        <h4 className="post-title">
          Blogging - it shows you give a shit about something
        </h4>
        <div className="inner-post-container">
          <GiCyberEye className="thumbnail post1" />
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
            <li>something else</li>
            <li>some other stuff</li>
          </ui>
        </div>
        <div className="post-lower">
          <p className="tag">#technology</p>
        </div>
      </div>
    </div>
  );
}

export default Post1;
