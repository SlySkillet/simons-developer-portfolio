import "../Blog2.css";
import { Link } from "react-router-dom";
import { GiKiwiBird } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";

function Post1() {
  return (
    <div className="blog-post-container left">
      <div className="timeline-icon left-icon">
        <div className="icon-wrapper SiHiveBlockchain">
          <i className="icon">
            <SiHiveBlockchain />
          </i>
        </div>
      </div>
      <div className="blog-post">
        <p className="post-date"> Nov 10, 2023</p>
        <h4 className="post-title">
          Blockchain technology for the carbon crediting
        </h4>
        <div className="inner-post-container">
          <GiKiwiBird className="thumbnail post1" />
          <p className="post-content">
            Carbon credits are a way for companies to fund environmental
            projects to offset their polluting practices, allowing them to claim
            net zero emissions. The methodology for quantifying carbon
            sequestration varies by project and meaningful environmental
            improvements are often questionable. Startups are looking to
            blockchain technology to create a more accurate and{" "}
            <Link
              className="blog-link"
              to="https://www.businessinsider.com/startups-blockchain-carbon-credits-topl-toucan-verra-gold-standard-2023-4?op=1
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              transparent system
            </Link>{" "}
            of issuing and trading credits. Proponents believe applying the
            cryptocurrency framework to carbon credits would facilitate
            evaluation by multiple parties, create incentives for studies, and
            establish specific criteria. Additionally,{" "}
            <Link
              className="blog-link"
              to="https://rmi.org/what-can-blockchain-do-for-carbon-markets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              double-counting
            </Link>
            , an error where one credit is sold to offset the emissions of
            multiple companies, could be prevented by establishing a system of
            encrypted tokens.
          </p>
          <p className="post-content">
            Energy conscious companies are looking to the Ethereum Blockchain to
            develop a decentralized carbon marketplace. Ethereum claims to have{" "}
            <Link
              className="blog-link"
              to="https://ethereum.org/en/energy-consumption/"
              target="_blank"
              rel="noopener noreferrer"
            >
              drastically reduced the energy consumption of their blockchain
            </Link>
            .
          </p>
          <p className="post-content">
            The bottom line issue to address in carbon crediting is quality.
            On-chain crediting is not, in itself, a solution but rather a
            platform for greater transparency, collaboration, and sound
            validation.
          </p>
          <ui className="post-content">
            <li>
              <Link
                className="blog-link"
                to="https://www.businessinsider.com/startups-blockchain-carbon-credits-topl-toucan-verra-gold-standard-2023-4?op=1
              "
                target="_blank"
                rel="noopener noreferrer"
              >
                Business Insider - blockchain technology
              </Link>
            </li>
            <li>
              <Link
                className="blog-link"
                to="https://rmi.org/what-can-blockchain-do-for-carbon-markets/"
                target="_blank"
                rel="noopener noreferrer"
              >
                RMI - Beyond the Buzz: What Can Blockchain Do for Carbon
                Markets?
              </Link>
            </li>
            <li>
              <Link
                className="blog-link"
                to="https://ethereum.org/en/energy-consumption/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ethereum blockchain energy consumption
              </Link>
            </li>
          </ui>
        </div>
        <div className="post-lower">
          <p className="tag"># blockchain</p>
        </div>
      </div>
    </div>
  );
}

export default Post1;
