import "./blog.css";

function Blog() {
  return (
    <div className="blog-container">
      <div className="blog header">
        <p className="blog title">:: Blog ::</p>
        <p className="blog subtext">
          come here for your daily dose of the goods
        </p>
      </div>
      <div className="main-blog">
        <div className="blog-col1">
          <div className="left blog-post">
            <p className="blog-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="blog-col2">
          <div className="right blog-post"></div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
