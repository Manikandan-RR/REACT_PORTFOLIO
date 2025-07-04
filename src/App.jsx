import { BrowserRouter, Route, Routes, Link } from "react-router"
import { useNavigate } from "react-router-dom"


import { AppHeader } from "./pages/appheader"
import { HomePage } from "./pages/home"
import { AboutUs } from "./pages/aboutus"
import { Skills } from "./pages/skills"
import { Projects } from "./pages/projects"
import { Contact } from "./pages/contact"



function App() {
  const navigate = useNavigate();
  return (

    <BrowserRouter>

      <div>
        <header class="app-header">
          <div class="container">
            <div class="d-flex align-item-center justify-content-between noto-sans-regular">
              <div class="name">
                <h1>MANIKANDAN R</h1>
              </div>
              <ul class="app-menu">
                <li><Link to="home">Home</Link></li>
                <li><Link to="aboutus">About Us</Link></li>
                <li><Link to="skills">Skills</Link></li>
                <li><Link to="projects">Projects</Link></li>
                <li><Link to="contact">Contact</Link></li>
              </ul>
              <button className="btn btn-contact" onClick={() => navigate('/contact')} > Lets Talk </button>
            </div>
          </div>
        </header>
      </div>

      <Routes>
        <Route path="" element={< HomePage />} />
        <Route path="/home" element={< HomePage />} />
        <Route path="/aboutus" element={< AboutUs />} />
        <Route path="/skills" element={< Skills />} />
        <Route path="/projects" element={< Projects />} />
        <Route path="/contact" element={< Contact />} />

      </Routes>
     

    </BrowserRouter>


  )
}

export default App
