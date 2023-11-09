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
        <p className="post-date"> Nov 9, 2023</p>
        <h4 className="post-title">
          Research and design underway for expansion of Ethereum's blockchain to
          the carbon industry
        </h4>
        <div className="inner-post-container">
          <GiKiwiBird className="thumbnail post1" />
          <p className="post-content">
            There is growing interest in the carbon industry around the use of
            tokenized credits, minted and stored on the blockchain. Carbon
            credits give polluting companies a chance to claim net zero
            emissions by funding projects that sequester carbon dioxide from the
            atmosphere. Proponents of the system believe creating a
            decentralized process of accreditation could promote scientific
            rigor in the evaluation of carbon crediting by creating a{" "}
            <Link
              className="blog-link"
              to="https://www.businessinsider.com/startups-blockchain-carbon-credits-topl-toucan-verra-gold-standard-2023-4?op=1
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              transparent system
            </Link>{" "}
            to create a token through validation by multiple sources including
            companies, nonprofits and local scientists.
          </p>
          <p className="post-content">
            Creating a unique minted token for a credit attaches it to a
            securely encrypted code, potentially guarding against{" "}
            <Link
              className="blog-link"
              to="https://rmi.org/what-can-blockchain-do-for-carbon-markets/"
              target="_blank"
              rel="noopener noreferrer"
            >
              double-counting
            </Link>{" "}
            , an error where one credit is used to offset multiple instances of
            polluting practice and thus negating its effect. It would
            effectively be a data driven version of digital art NFTs
            (non-fungible tokens) which minted a unique piece of digital art. In
            this case, an encrypted code would be tied to a dataset documenting
            and monitoring the performance of one or many projects.
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
            potential platform for greater transparency and sound validation.
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
