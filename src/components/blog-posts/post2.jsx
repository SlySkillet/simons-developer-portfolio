import "../Blog2.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiGoogleearth } from "react-icons/si";

function Post2() {
  return (
    <div className="blog-post-container notfirst right">
      <div className="timeline-icon right-icon">
        <div className="icon-wrapper FaMapMarkedAlt">
          <i className="icon FaMapMarkedAlt">
            <FaMapMarkedAlt />
          </i>
        </div>
      </div>
      <div className="blog-post">
        <p className="post-date"> Oct 14, 2023</p>
        <h4 className="post-title">Beyond maps, Google's Environment APIs</h4>
        <div className="inner-post-container">
          <SiGoogleearth className="thumbnail post1" />
          <p className="post-content">
            Google’s recently released{" "}
            <Link
              className="blog-link"
              to="https://cloud.google.com/blog/products/maps-platform/powering-future-our-new-solar-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solar API
            </Link>
            , made public in August, lets users gauge the potential power
            generation from their buildings to make a calculated transition to
            renewable energy. Solar energy is often prohibitively expensive for
            homeowners, businesses and cities. Although it is not feasible as a
            standalone solution for renewable power in many cases, it is an
            opportunity to drastically reduce dependence on polluting energy
            sources depending on the local conditions and possible orientation
            of the panels. This product offers a planning platform for
            landowners, architects, engineers and city planners to visualize
            those possibilities for their existing structures and predict power
            outputs accordingly.
          </p>
          <p className="post-content">
            The{" "}
            <Link
              className="blog-link"
              to="https://cloud.google.com/blog/products/maps-platform/introducing-air-quality-api-promoting-resilience-changing-climate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Air Quality
            </Link>{" "}
            and{" "}
            <Link
              className="blog-link"
              to="https://cloud.google.com/blog/products/maps-platform/announcing-pollen-api-providing-actionable-info-about-airborne-pollen-levels-worldwide"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pollen APIs
            </Link>{" "}
            focus on individual health and safety, offering valuable data
            visualization on pollutants. Users can access informative heat maps
            and air pollution data to make informed decisions on outdoor
            exercise, commuting and indoor air filter usage. With the threat of
            worsening air quality due to climate change, understanding and
            monitoring air quality is sure to be a critical aspect of public
            health going forward.
          </p>
          <ui className="post-content">
            <li>
              <Link
                className="blog-link"
                to="https://cloud.google.com/blog/products/maps-platform/going-beyond-map-introducing-environment-apis?_gl=1*3q4tbi*_ga*MjgyMTM5ODkwLjE2OTM3NjE3MDk.*_ga_NRWSTWS78N*MTY5ODY5ODM4NC4yLjEuMTY5ODY5ODM5Ni4wLjAuMA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google's overview of Environment APIs
              </Link>
            </li>
          </ui>
        </div>
        <div className="post-lower">
          <p className="tag"># mapping</p>
        </div>
      </div>
    </div>
  );
}

export default Post2;
