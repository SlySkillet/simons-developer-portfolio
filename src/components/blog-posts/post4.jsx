import "../Blog2.css";
import { Link } from "react-router-dom";
import { GiBrain, GiAbstract002 } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";
import { FaKeyboard } from "react-icons/fa6";
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
        <p className="post-date"> Oct 20, 2023</p>
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
            industry today and the future we are building. As a job seeker and
            student of code, I am doing extensive research and constantly
            learning while expanding my skills and portfolio. I find the
            discussion of software engineering is entrenched in circular banter
            about how profoundly difficult it is to enter the industry over the
            subject of technology itself. I intend for this blog to be a
            document of my journey and a source of information on interesting
            advances in the evolving technical landscape. I hope this inspires
            my colleagues to discover, experiment, and build more.
          </p>
          <p className="post-content">
            I hope you enjoy your visit to my site. Please stay tuned for mildly
            interesting content. Cheers.
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
