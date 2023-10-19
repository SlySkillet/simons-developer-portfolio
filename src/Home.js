import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About2 from "./components/About2";

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
