import "../Blog2.css";
import { Link } from "react-router-dom";
import { GiBrain, GiSummits } from "react-icons/gi";

function Post3() {
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
        <p className="post-date"> Nov 3, 2023</p>
        <h4 className="post-title">
          Britain hosts AI Safety Summit discussing frontier AI and risks posed
          by new technology
        </h4>
        <div className="inner-post-container">
          <GiSummits className="thumbnail post3" />
          <p className="post-content">
            Representatives from 28 governments met and signed the{" "}
            <Link
              className="blog-link"
              to="https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration/the-bletchley-declaration-by-countries-attending-the-ai-safety-summit-1-2-november-2023"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bletchley Declaration
            </Link>{" "}
            on Wednesday, Nov 1, agreeing to cooperate on research and policy
            around advances in AI technology.
          </p>
          <p className="post-content">
            A plausible threat posed by AI systems is the potential for
            propagation of misinformation across the internet or in focused and
            deliberate attacks. Foreign meddling in US elections, to use a
            recent example, could be done with greater efficiency and to greater
            effect with the automation of content creation and its release to
            target demographics.
          </p>
          <p className="post-content">
            Ahead of the conference, the British government released a{" "}
            <Link
              className="blog-link"
              to="https://assets.publishing.service.gov.uk/media/65395abae6c968000daa9b25/frontier-ai-capabilities-risks-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              report
            </Link>{" "}
            on frontier AI summarizing the current state of the technology and
            potential risk factors in consideration including manipulation of
            persons information diet, promotion of radical views, increase in
            political divisiveness and potential to incite violence and
            exacerbate public health crises.
          </p>
          <p className="post-content">
            With executives from leading technology companies, including Elon
            Musk, in attendance, UK Prime Minister Rishi Sunak hopes to
            establish Britain as a leader in{" "}
            <Link
              className="blog-link"
              to="https://www.nytimes.com/2023/11/01/world/europe/uk-ai-summit-sunak.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              regulating and safely developing AI
            </Link>
            .
          </p>
          <ui className="post-content">
            <li>
              <Link
                className="blog-link"
                to="https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration/the-bletchley-declaration-by-countries-attending-the-ai-safety-summit-1-2-november-2023"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Bletchley Declaration
              </Link>
            </li>
            <li>
              <Link
                className="blog-link"
                to="https://assets.publishing.service.gov.uk/media/65395abae6c968000daa9b25/frontier-ai-capabilities-risks-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                UK Frontier AI Report
              </Link>
            </li>
          </ui>
        </div>
        <div className="post-lower">
          <p className="tag"># technology, AI</p>
        </div>
      </div>
    </div>
  );
}

export default Post3;
