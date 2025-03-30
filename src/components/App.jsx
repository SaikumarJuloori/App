import React, { useState } from "react";
import { motion } from "framer-motion";
import About from '../pages/About';
import Skills from '../pages/Skills';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Certifications from '../pages/Certifications';
import Education from '../pages/Education';
import Contact from '../pages/Contact';
import Navbar from "../pages/Navbar"
function App() {
  {/*const [expandedExperience, setExpandedExperience] = useState(null);

  const ha ndleClick = (index) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };
*/}
  return (
    <div className="app">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      

   

     

     
    </div>
  );
}

export default App;
