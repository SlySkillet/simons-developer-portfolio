import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Nav'
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact'
import Home from './Home';

function App() {
  return (
<div className="grid-container">
    <HashRouter>
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={ <Home /> } />
          {/* <Route path="projects/" element={ <Projects />} /> */}
          <Route path="resume/" element={ <Resume />} />
          <Route path="contact/" element={ <Contact /> }/>
        </Routes>
      </div>
      {/* <Footer /> */}
    </HashRouter>
</div>
  );
}

export default App;
