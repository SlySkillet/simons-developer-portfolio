import "../Blog2.css";
import { GrKeyboard } from "react-icons/gr";

function Post4() {
  return (
    <div className="blog-post-container notfirst right">
      <div className="timeline-icon right-icon">
        <div className="icon-wrapper GrKeyboard">
          <i className="icon">
            <GrKeyboard />
          </i>
        </div>
      </div>
      <div className="blog-post">
        <p className="post-date"> Oct 9, 2023</p>
        <h4 className="post-title">
          Blogging: my intentions for mildly interesting content
        </h4>
        <div className="inner-post-container">
          <img
            src={require("./focus_on_science.png")}
            alt="focus on science"
            className="thumbnail post4"
          />
          <p className="post-content">
            I'm creating this blog to share my technical research as I continue
            to grow my understanding of computer programming, the state of the
            industry today and the future we are building. As a student of code,
            I am doing extensive research and continuing to study computer
            science, programming language, and software to expand my skills and
            build my portfolio. I intend for this blog to be a document of my
            journey and a source of information on interesting advances in the
            evolving technical landscape. I hope this inspires my colleagues to
            discover, experiment, and build more.
          </p>
          <p className="post-content">
            I hope you enjoy reading my blog. Please stay tuned for more entries
            and projects. Cheers.
          </p>
        </div>
        <div className="post-lower">
          <p className="tag"># simon</p>
        </div>
      </div>
    </div>
  );
}

export default Post4;
