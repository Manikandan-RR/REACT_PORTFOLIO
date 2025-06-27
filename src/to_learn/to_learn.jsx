App.jsx


import { AppHeader } from "./pages/appheader"
import { HomePage } from "./pages/home"
import { AboutUs } from "./pages/aboutus"
import { Skills } from "./pages/skills"
import { Projects } from "./pages/projects"
import { Contact } from "./pages/contact"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        < AppHeader />
        
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Router>
      
    </div>
  )
}

export default App




Main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}

  </StrictMode>,
)
