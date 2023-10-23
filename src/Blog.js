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
        <div className="blog-col1"></div>
        <div className="blog-col2"></div>
      </div>
    </div>
  );
}

export default Blog;
