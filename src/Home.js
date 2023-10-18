import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

function Home (){
    return(
        <div className="home-container">
            <About />
            <div id="projects" className="divider"></div>
            <Projects />
            <Footer />
        </div>
    )
}

export default Home
