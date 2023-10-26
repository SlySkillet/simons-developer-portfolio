import "./Blog2.css";
import { FaEarlybirds } from "react-icons/fa";

function Blog2() {
  return (
    <div className="blog-container">
      <div className="blog header">
        <p className="blog title">:: Blog ::</p>
        <p className="blog subtext">
          come here for your daily dose of the goods
        </p>
      </div>
      <div className="main-blog">
        <div className="timeline">
          <div className="blog-post-container left">
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
              </p>
            </div>
          </div>
          <div className="blog-post-container notfirst right">
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="blog-post-container notfirst left">
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
              </p>
            </div>
          </div>
          <div className="blog-post-container notfirst right">
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog2;
