import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sliding Window Algorithms in K Clustering",
    details: [
      "Improved the overall execution time by 20% by implementing an algorithm to prune the centroids without compromising the accuracy of the existing open-source Google implementation of clustering algorithms.",
      "Devised clustering algorithms with MPI for parallel programming."
    ]
  },
  {
    title: "E-Commerce Platform (React, Redux, Node.js, Express.js, PostgreSQL)",
    details: [
      "Developed a full-stack e-commerce web application with dynamic product listing and user authentication.",
      "Designed and implemented secure authentication using JWT and user role-based access control.",
      "Implemented a shopping cart, order tracking, and payment gateway integration.",
      "Optimized API calls and lazy loading, reducing page load time by 30%."
    ]
  },
  {
    title: "HomeAway Airbnb Clone | Next.js, TypeScript, React, Node, Prisma, MongoDB",
    details: [
      "Developed Airbnb clone, a full-stack application using the latest technology tools.",
      "Implemented features for user login, profile creation, image upload, and booking of hotels, rooms, and resorts.",
      "Enabled user ratings, review deletion, and tracking all bookings and reservations.",
      "Created an Admin page where admins can view all bookings made in the last 6 months as a graph.",
      "Authentication using Clerk for secure user access."
    ]
  }
];

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            onClick={() => toggleExpand(index)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>

            {expanded === index && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
                className="project-details"
              >
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
