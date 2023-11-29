import "./Blog2.css";
import Post1 from "./blog-posts/post1";
import Post2 from "./blog-posts/post2";
import Post3 from "./blog-posts/post3";
import Post4 from "./blog-posts/post4";
import Post5 from "./blog-posts/post5";
import Post6 from "./blog-posts/post6";

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
          <Post6 />
          <Post5 />
          <Post1 />
          <Post3 />
          <Post2 />
          <Post4 />
        </div>
      </div>
    </div>
  );
}

export default Blog2;
