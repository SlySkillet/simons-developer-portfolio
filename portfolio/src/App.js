import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Nav'
import About from './About'
import Footer from './Footer'
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact'

function App() {
  return (
<div className="grid-container">
    <BrowserRouter>
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path="simons-developer-portfolio/" element={ <About /> } />
          <Route path="projects/" element={ <Projects />} />
          <Route path="resume/" element={ <Resume />} />
          <Route path="contact/" element={ <Contact /> }/>
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
</div>
  );
}

export default App;
