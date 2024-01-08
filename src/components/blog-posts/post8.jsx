import "../Blog2.css";
import { Link } from "react-router-dom";
import { GiBrain } from "react-icons/gi";

function Post8() {
  return (
    <div className="blog-post-container left">
      <div className="timeline-icon left-icon">
        <div className="icon-wrapper GiBrain">
          <i className="icon GiBrain">
            <GiBrain />
          </i>
        </div>
      </div>
      <div className="blog-post">
        <p className="post-date"> January 8, 2024</p>
        <h4 className="post-title">
          The New York Times will take on OpenAI in 2024 over copyright
          infringement
        </h4>
        <div className="inner-post-container">
          <p className="post-content">
            The New York Times is claiming that Open AI has unlawfully used
            unique material from their publication to train their models and
            will reproduce original text from the newspaper for ChatGPT users.
            Given the correct prompt, ChatGPT could return content reserved for
            paying subscribers, allowing the user to get around the New York
            Times paywall.
          </p>
          <p className="post-content">
            New York Times lawyers are seeking compensation for copyright
            infringement and to prevent further training of their models on NYT
            content. The counter argument is that if an individual has the right
            to browse and learn from online content, so does OpenAI’s web
            crawler.
          </p>
          <p className="post-content">
            This ruling has potential to go to the supreme court and will be
            significant for journalism and AI business going forward.
          </p>
          <ui className="post-content">
            <li>
              Podcast from{" "}
              <Link
                className="blog-link"
                to="https://www.nytimes.com/2024/01/05/podcasts/nyt-lawsuit-openai-imessage-new-years-tech.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hard Fork
              </Link>{" "}
              on the lawsuit (episode 64 - January 5, 2023). I believe this is a
              good summary of the issues of the case, though do note that Hard
              Fork is produced by the New York Times.
            </li>
            <li>
              <Link
                className="blog-link"
                to="https://www.theverge.com/2023/12/27/24016212/new-york-times-openai-microsoft-lawsuit-copyright-infringement"
                target="_blank"
                rel="noopener noreferrer"
              >
                The New York Times is suing OpenAI and Microsoft for copyright
                infringement
              </Link>{" "}
              - The Verge
            </li>
            <li>
              <Link
                className="blog-link"
                to="https://venturebeat.com/ai/why-nyt-vs-openai-will-be-the-copyright-fight-to-watch-in-2024-the-ai-beat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Why NYT vs. OpenAI will be the copyright fight to watch in 2024
              </Link>{" "}
              - Venture Beat
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

export default Post8;
