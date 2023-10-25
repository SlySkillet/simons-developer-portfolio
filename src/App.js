import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Nav";
import Resume from "./Resume";
import Contact from "./Contact";
import Home from "./Home";
import Blog2 from "./Blog2";

function App() {
  return (
    <div className="grid-container" id="home">
      <BrowserRouter>
        <NavBar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="resume/" element={<Resume />} />
            <Route path="contact/" element={<Contact />} />
            <Route path="blog/" element={<Blog2 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
