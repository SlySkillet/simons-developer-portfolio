import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Nav'
import About from './About'

function App() {
  return (
<div className="grid-container">
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={ <About /> } />
        </Routes>
      </div>
    </BrowserRouter>
</div>
  );
}

export default App;