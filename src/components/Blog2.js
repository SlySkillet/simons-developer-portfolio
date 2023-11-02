import "./Blog2.css";
import { FaEarlybirds } from "react-icons/fa";
import { Link } from "react-router-dom";
import Post1 from "./blog-posts/post1";
import Post2 from "./blog-posts/post2";
import Post3 from "./blog-posts/post3";
import Post4 from "./blog-posts/post4";

function Blog2() {
  return (
    <div className="blog-container">
      <div className="blog header">
        <p className="blog title"> Blog </p>
        <p className="blog subtext">
          come here for your daily dose of the goods
        </p>
      </div>
      <div className="main-blog">
        <div className="timeline">
          <Post1 />
          <Post2 />
          <Post3 />
          <Post4 />
          {/* <div className="blog-post-container notfirst left">
            <div className="timeline-icon left-icon">
              <div className="icon-wrapper">
                <i className="icon">
                  <FaEarlybirds />
                </i>
              </div>
            </div>
            <div className="blog-post">
              <h4 className="post-title">header</h4>
              <p className="post-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ui className="post-content">
                <li>
                  something to say and a <Link>link</Link>
                </li>
                <li>something else</li>
                <li>some other stuff</li>
              </ui>
            </div>
          </div> */}
          {/* <div className="blog-post-container notfirst right last">
            <div className="timeline-icon right-icon">
              <div className="icon-wrapper">
                <i className="icon">
                  <FaEarlybirds />
                </i>
              </div>
            </div>
            <div className="blog-post">
              <h4 className="post-title">header</h4>
              <p className="post-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ui className="post-content">
                <li>
                  something to say and a <Link>link</Link>
                </li>
                <li>something else</li>
                <li>some other stuff</li>
              </ui>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Blog2;
