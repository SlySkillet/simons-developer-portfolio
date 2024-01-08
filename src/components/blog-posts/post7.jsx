import "../Blog2.css";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt } from "react-icons/fa";

function Post7() {
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
        <p className="post-date"> Dec 18, 2023</p>
        <h4 className="post-title">
          Understanding GIS applications in web development
        </h4>
        <div className="inner-post-container">
          <img
            src={
              "https://res.cloudinary.com/ddgt67wcb/image/upload/v1702915981/EarthFromApollo17-58b849523df78c060e68ca36_mywt67.jpg"
            }
            alt="earth"
            className="thumbnail post7"
          />
          <p className="post-content">
            I’ve been interested in GIS, global positioning systems (GPS), and
            cartography from a young age. Since finishing Hack Reactor in
            August, I’ve been diving into different disciplines in programming
            and mapping has been at the top of my list. I recently finished an
            online course on GIS for climate solutions by ESRI, using their
            ArcGIS software. I was interested in learning what GIS software does
            and how it is applied for data analysis and visualization.
          </p>
          <p className="post-content">
            One use of GIS software I was unfamiliar with prior to this ESRI
            course was the story map. It is effectively a distilled walkthrough
            of data visualized on a map that the user can click through and view
            changes. It allows the developer to present the exact layers and
            data points on a simple and widely accessible platform. For the most
            part, the processing of data and actual creation of maps occurs on
            desktop application (ArcGIS in the case of this course). Developers
            can present their data online with interactive and story maps.
            Applications such as Google Maps use GIS technology, but focus the
            functionality to achieve a specific task, like directions. I
            understand the job of the GIS developer to be distilling data and
            functionality to be streamlined and understood by the user.
          </p>
          <p className="post-content">
            ArcGIS software is prohibitively expensive for my personal use, so I
            will be creating some small mapping projects to experiment and show
            off using QGIS (open source software) and possibly Google Earth
            Engine and related APIs.
          </p>
          <ui className="post-content">
            <li>
              <Link
                className="blog-link"
                to="https://mangomap.com/web-gis"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web GIS and the democratization of data
              </Link>
            </li>
            <li>
              Browse the{" "}
              <Link
                className="blog-link"
                to="https://www.esri.com/training/mooc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ESRI MOOC (Massive Open Online Course) program
              </Link>{" "}
              catalog here. The course I took is called{" "}
              <Link
                className="blog-link"
                to="https://www.esri.com/training/catalog/645d6a07eb82fb767bb0c012/gis-for-climate-action/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GIS for Climate Action
              </Link>
              . It is 6 weeks long and will be offered again in May. These
              courses are an excellent and cost-free way to get your feet wet in
              geospatial data!
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

export default Post7;
