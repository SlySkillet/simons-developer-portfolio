import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Nav'
import About from './About'
import Footer from './Footer'
import Projects from './Projects';
import Resume from './Resume';

function App() {
  return (
<div className="grid-container">
    <BrowserRouter>
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={ <About /> } />
          <Route path="projects/" element={ <Projects />} />
          <Route path="resume/" element={ <Resume />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
</div>
  );
}

export default App;
