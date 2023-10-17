import About from "./About";
import Projects from "./Projects";

function Home (){
    return(
        <div className="home-container">
            <About />
            <div id="projects" className="divider"></div>
            <Projects />
        </div>
    )
}

export default Home
