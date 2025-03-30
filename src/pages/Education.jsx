import React, { useState } from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master's in Computer Science",
    institution: "Texas Tech University",
    details: ["Expected Graduation: May 2025", "GPA: 3.6/4.0"]
  },
  {
    degree: "Bachelor of Technology in Civil Engineering",
    institution: "CMR College of Engineering and Technology, Hyderabad, India",
    details: ["Graduation: May 2022", "GPA: 9.25/10"]
  }
];

const Education = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="education">
      <motion.div
        className="education-container"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              onClick={() => toggleExpand(index)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>

              {expanded === index && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                  className="education-details"
                >
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
