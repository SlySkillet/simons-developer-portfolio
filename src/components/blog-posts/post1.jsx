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
        <p className="post-date"> Oct 20, 2023</p>
        <h4 className="post-title">
          Blockchain beyond cryptocurrency: decentralized climate data for the
          carbon industry
        </h4>
        <div className="inner-post-container">
          <GiKiwiBird className="thumbnail post1" />
          <p className="post-content">
            Blockchain technology offers promising solutions to the challenges
            faced by the voluntary carbon market (VCM). The VCM lacks trust and
            transparency, with a multitude of certifying options causing
            skepticism about carbon credit quality. Blockchain can address these
            issues by providing a secure, decentralized ledger that ensures
            transparency and trust. Blockchain's smart contracts enable the
            creation of tradable units for carbon credits, streamlining
            transactions and reducing costs. It also supports asset
            tokenization, making it easy to access and trade carbon credits.
            This approach attracts investors seeking innovative solutions for
            carbon markets. Additionally, blockchain can create a meta-registry,
            aggregating data for greater transparency, preventing
            double-counting, and improving identity verification. Open-source
            blockchains facilitate tracking climate projects globally.
          </p>
          <p className="post-content">
            However, it's crucial to acknowledge blockchain's limitations, as it
            cannot inherently distinguish between good and bad data. It empowers
            users to verify data but doesn't assess data quality. To scale a
            high-quality voluntary carbon market, blockchain should focus on
            differentiating carbon credits and providing transparent
            information. While the buzz around blockchain's potential may seem
            exaggerated, ongoing initiatives show promise in addressing carbon
            market challenges. The key lies in establishing consensus on
            standards and systems to enhance the overall integrity of the chain.
            This is especially crucial as carbon credits evolve into diverse
            formats.{" "}
          </p>
          <p className="post-content">
            The Carbon Markets Initiative is actively exploring blockchain use
            cases to enhance trust in on-chain carbon credits and invites
            collaboration in this endeavor. Blockchain has the potential to
            revolutionize the VCM, provided it can address quality, diversity,
            and transparency effectively.
          </p>
          <ui className="post-content">
            <li>
              something to say and a <Link className="blog-link">link</Link>
            </li>
            <li>something else</li>
            <li>some other stuff</li>
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
