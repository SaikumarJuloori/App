import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Full Stack (MERN) Developer",
    company: "Accenture, Hyderabad, Telangana",
    duration: "June 2022 – Aug 2023",
    details: [
      "Developed and maintained scalable web applications using the MERN stack.",
      "Collaborated with teams to enhance user experience and performance.",
      "Built RESTful APIs using Node.js and Express.js.",
      "Implemented state management using Redux.",
      "Deployed applications on AWS for scalability."
    ]
  },
  {
    title: "Intern – Java/J2EE Development",
    company: "Wipro Private Ltd",
    duration: "July 2021 – May 2022",
    details: [
      "Developed a Ship Reservation System during an academic internship.",
      "Worked with Java, J2EE, JSP, Servlets, MySQL, and HTML/CSS to create a web app.",
      "Implemented user authentication, booking, cancellation, and availability tracking.",
      "Applied MVC architecture for scalability and maintainability.",
      "Collaborated with mentors to enhance software development processes."
    ]
  }
];

const Experience = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="experience">
      <motion.div
        className="experience-container"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="experience-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              onClick={() => toggleExpand(index)}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.duration}</p>

              {expanded === index && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                  className="experience-details"
                >
                  {exp.details.map((detail, i) => (
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

export default Experience;
