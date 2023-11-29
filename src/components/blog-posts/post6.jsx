import "../Blog2.css";
import { Link } from "react-router-dom";
import { RiGhostSmileLine } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";

function Post6() {
  return (
    <div className="blog-post-container left">
      <div className="timeline-icon left-icon">
        <div className="icon-wrapper GiBrain">
          <i className="icon">
            <GiBrain />
          </i>
        </div>
      </div>
      <div className="blog-post">
        <p className="post-date"> Nov 25, 2023</p>
        <h4 className="post-title">
          OpenAI Board couldn't get rid of him that easily...
        </h4>
        <div className="inner-post-container">
          <RiGhostSmileLine className="thumbnail post6" />
          <p className="post-content">
            Sam Altman has returned as CEO of OpenAI. In the confusing drama
            around Sam Altman’s dismissal and now reinstatement as CEO we have
            seen the delicate balance of profit and safety in AI development.
            OpenAI is a non profit company with a for-profit (capped) wing.
            Investors in the company have a limit to their returns with
            remaining profits to be re-invested in the company. In this way, Sam
            Altman has attempted to adequately fund advancements in AI
            technology while staying committed to the company’s mission of
            benefiting humanity.
          </p>
          <p className="post-content">
            The board appears to have lost their faith in Altman’s ability to
            honor this mission. Something the board could not ignore was the 702
            out of 770 employees at OpenAI pledging to leave the company
            (possibly joining a new project with Altman at Microsoft) if he was
            not brought back on.
          </p>
          <ui className="post-content">
            <li>
              <Link
                className="blog-link"
                to="https://www.npr.org/2023/11/24/1215015362/chatgpt-openai-sam-altman-fired-explained"
                target="_blank"
                rel="noopener noreferrer"
              >
                Making some sense of what happened here - NPR
              </Link>
            </li>
          </ui>
        </div>
        <div className="post-lower">
          <p className="tag"># AI</p>
        </div>
      </div>
    </div>
  );
}

export default Post6;
