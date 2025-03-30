import React from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaTasks, // Alternative for Agile Methodologies
} from "react-icons/fa"; 
import { SiMysql, SiPostgresql, SiJest } from "react-icons/si"; // Removed SiAgile (does not exist)

const skills = [
  { name: "JavaScript", icon: <FaJs size={50} color="#F7DF1E" /> },
  { name: "React.js", icon: <FaReact size={50} color="#61DAFB" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} color="#83CD29" /> },
  { name: "MongoDB", icon: <FaDatabase size={50} color="#47A248" /> },
  { name: "AWS", icon: <FaAws size={50} color="#FF9900" /> },
  { name: "MySQL", icon: <SiMysql size={50} color="#4479A1" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={50} color="#336791" /> },
  { name: "DSA", icon: <SiJest size={50} color="#C21325" /> }, 
  { name: "Agile Methodologies", icon: <FaTasks size={50} color="#FF4500" /> }, // Replaced SiAgile with FaTasks
  { name: "Integrated Testing", icon: <SiJest size={50} color="#15A23F" /> },
];

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
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {skill.icon}
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
