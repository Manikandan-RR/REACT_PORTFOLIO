import { Routes, Route, Link, useNavigate } from "react-router-dom";


import { AppHeader } from "./pages/appheader"
import { HomePage } from "./pages/home";
import { AboutUs } from "./pages/aboutus";
import { Skills } from "./pages/skills";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <header className="app-header">
          <div className="container">
            <div className="d-flex align-item-center justify-content-between noto-sans-regular">
              <div className="name">
                <h1>MANIKANDAN R</h1>
              </div>
              <ul className="app-menu">
                <li><Link to="home">Home</Link></li>
                <li><Link to="aboutus">About Us</Link></li>
                <li><Link to="skills">Skills</Link></li>
                <li><Link to="projects">Projects</Link></li>
                <li><Link to="contact">Contact</Link></li>
              </ul>
              <button className="btn btn-contact" onClick={() => { navigate('/contact') }} >
                Let's Talk
              </button>
            </div>
          </div>
        </header>
      </div>

      <Routes>
        <Route path="" element={
          <>
            < HomePage />
            < AboutUs />
            < Skills />
            < Projects />
            < Contact />
          </>
        } />

        <Route path="/home" element={< HomePage />} />
        <Route path="/aboutus" element={< AboutUs />} />
        <Route path="/skills" element={< Skills />} />
        <Route path="/projects" element={< Projects />} />
        <Route path="/contact" element={< Contact />} />

      </Routes>
    </>
  )
}


export default App


{/* <Routes>
        <Route path="" element={
          <>
            < HomePage />
            < AboutUs />
            < Skills />
            < Projects />
            < Contact />
          </>
        } />

        <Route path="/home" element={
          <>
            < HomePage />
            < AboutUs />
            < Skills />
            < Projects />
            < Contact />
          </>

        } />


        <Route path="/aboutus" element={
          <>
            < AboutUs />
            < Skills />
            < Projects />
            < Contact />
            </>


        } />


        <Route path="/skills" element={< Skills />} />
        <Route path="/projects" element={< Projects />} />
        <Route path="/contact" element={< Contact />} />
    </Routes> */}
