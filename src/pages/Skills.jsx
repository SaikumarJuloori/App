import React from 'react';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Import relevant icons

const Skills = () => {
  return (
    <section id="skills">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Skills</h2>
        <div className="skills-list">
          <motion.div
            className="skill"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaJs size={50} /> {/* JavaScript Icon */}
            <h3>JavaScript</h3>
          </motion.div>
          <motion.div
            className="skill"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaReact size={50} /> {/* React.js Icon */}
            <h3>React.js</h3>
          </motion.div>
          <motion.div
            className="skill"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaNodeJs size={50} /> {/* Node.js Icon */}
            <h3>Node.js</h3>
          </motion.div>
          <motion.div
            className="skill"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaDatabase size={50} /> {/* MongoDB Icon */}
            <h3>MongoDB</h3>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;

