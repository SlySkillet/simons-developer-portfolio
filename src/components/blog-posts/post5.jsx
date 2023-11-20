import "../Blog2.css";
import { Link } from "react-router-dom";
import { GiBrain, GiAxeInStump } from "react-icons/gi";

function Post5() {
  return (
    <div className="blog-post-container right">
      <div className="timeline-icon right-icon">
        <div className="icon-wrapper GiBrain">
          <i className="icon">
            <GiBrain />
          </i>
        </div>
      </div>
      <div className="blog-post">
        <p className="post-date"> Nov 20, 2023</p>
        <h4 className="post-title">Sam Altman fired as CEO of OpenAI</h4>
        <div className="inner-post-container">
          <GiAxeInStump className="thumbnail post5" />
          <p className="post-content">
            Altman’s abrupt dismissal last week for being “not consistently
            candid in communications” brought to light the divergent views on
            technological advancements in AI. Business Insider speculates that
            Altman’s running of Open AI{" "}
            <Link
              className="blog-link"
              to="https://www.businessinsider.com/ai-dangers-effective-altruism-sam-altman-openai-2023-11?op=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              was not in line with the ideals of Effective Altruism
            </Link>
            , favoring rapid development without adequate resources placed
            towards safety and ethics. His dismissal, potential rehire, and
            acquisition by Microsoft sent ripples through the tech industry and
            will undoubtedly be examined in depth in the coming weeks.
          </p>
          <p className="post-content">
            Concerns over responsible AI development are nothing new at Open AI.
            Wired reports that{" "}
            <Link
              className="blog-link"
              to="https://www.wired.com/story/what-openai-really-wants/?redirectURL=https%3A%2F%2Fwww.wired.com%2Fstory%2Fwhat-openai-really-wants%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elon Musk left the board in 2018{" "}
            </Link>{" "}
            citing inadequate consideration of safety in development.
          </p>
          <ui className="post-content">
            <li>
              <Link
                className="blog-link"
                to="https://www.businessinsider.com/elon-musk-sam-altman-fired-risk-of-ai-openai-board-2023-11?op=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elon Musk on Altman's ouster - Business Insider
              </Link>
            </li>
            <li>
              <Link
                className="blog-link"
                to="https://www.businessinsider.com/ai-dangers-effective-altruism-sam-altman-openai-2023-11?op=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sam Altman and Fear over AI - Business Insider
              </Link>
            </li>
            <li>
              <Link
                className="blog-link"
                to="https://www.forbes.com/sites/digital-assets/2023/11/19/the-openai-drama-sam-altman-and-the-struggle-for-ais-future/?sh=7c390fec75c6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Timeline of Sam Altman's removal - Forbes
              </Link>
            </li>
            <li>
              <Link
                className="blog-link"
                to="https://en.wikipedia.org/wiki/Effective_altruism"
                target="_blank"
                rel="noopener noreferrer"
              >
                Effective Altruisim - wikipedia
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

export default Post5;
