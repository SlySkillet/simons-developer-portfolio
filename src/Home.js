import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import About2 from "./About2";

function Home() {
  return (
    <div className="home-container">
      <About />
      <div id="projects" className="divider"></div>
      <Projects />
      <About2 />
      <Footer />
    </div>
  );
}

export default Home;
