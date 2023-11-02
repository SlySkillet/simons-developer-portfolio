import "../Blog2.css";
import { Link } from "react-router-dom";
import { GiBrain, GiSpy } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";

function Post3() {
  return (
    <div className="blog-post-container notfirst left">
      <div className="timeline-icon left-icon">
        <div className="icon-wrapper GiBrain">
          <i className="icon">
            <GiBrain />
          </i>
        </div>
      </div>
      <div className="blog-post">
        <p className="post-date"> Oct 20, 2023</p>
        <h4 className="post-title">UK on AI threats</h4>
        <div className="inner-post-container">
          <GiSpy className="thumbnail post3" />
          <p className="post-content">
            There is no shortage of discourse on AI and the fear around what the
            new technology means for our future as a species. At this point,
            threat and benefit are both speculative. A future where we are
            slaves to autonomous machine overlords remains the realm of science
            fiction (though maybe we’re getting closer…). A very real and
            plausible threat is in the propagation of misinformation across the
            internet or in focused and deliberate attacks. Foreign meddling in
            US elections, to use a recent example, could be achieved with
            greater efficiency and to greater effect with the automation of
            content creation.
          </p>
          {/* <ui className="post-content">
            <li>
              something to say and a <Link className="blog-link">link</Link>
            </li>
            <li>something else</li>
            <li>some other stuff</li>
          </ui> */}
        </div>
        <div className="post-lower">
          <p className="tag"># technology, AI</p>
        </div>
      </div>
    </div>
  );
}

export default Post3;
