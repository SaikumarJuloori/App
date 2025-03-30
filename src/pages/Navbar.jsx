import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaTools, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaCertificate, FaEnvelope } from 'react-icons/fa';


const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="navbar-name">Saikumar Juloori</h1>
      <ul>
        <li><a href="#about"><FaUser /> About</a></li>
        <li><a href="#skills"><FaTools /> Skills</a></li>
        <li><a href="#experience"><FaBriefcase /> Experience</a></li>
        <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
        <li><a href="#education"><FaGraduationCap /> Education</a></li>
        <li><a href="#certifications"><FaCertificate /> Certifications</a></li>
        <li><a href="#contact"><FaEnvelope /> Contact</a></li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
