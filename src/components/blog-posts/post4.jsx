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
            I'm creating this blog to shed share my research in the tech
            industries as I continue to grow my understanding of the state of
            the industry today and the future of technology we are building. As
            a junior engineer, I am doing extensive research and constantly
            learning while expanding my skills and portfolio. I have found that
            a lot of the discussion around software engineering focuses on the
            challenges of finding a job over the actual subject of technology
            and human potential. I intend for this blog to be a source of
            information on the latter. I hope this inspires other junior
            engineers to discover and build more.
          </p>
          <p className="post-content">
            With large language models out on the market, is writing finished?
            Writing remains the way to develop ideas and view our thinking in
            plane language. Formulating thoughts for presentation is critical in
            the development of goals, plans and theories. My intent is to share
            my process and my brand. Please stay tuned for mildly interesting
            content and mostly functional projects. Cheers 🍻
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
