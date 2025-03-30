import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <section id="certifications">
      <motion.div
        className="certifications-container"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-list">
          <motion.div
            className="certification-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3>AWS Certified Developer – Associate</h3>
            <p>Validated expertise in developing, deploying, and debugging cloud-based applications on AWS. Demonstrated proficiency in AWS services, including Lambda, DynamoDB, API Gateway, and best practices for cloud security and cost optimization.</p>
            <a href="#" className="certificate-link">View Certificate</a>
          </motion.div>

          <motion.div
            className="certification-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>IBM Full-Stack JavaScript Developer Professional Certificate</h3>
            <p>Developed expertise in front-end and back-end web development using JavaScript, Node.js, Express.js, and databases. Covered REST APIs, cloud deployment, and DevOps practices.</p>
            <a href="#" className="certificate-link">View Certificate</a>
          </motion.div>

          <motion.div
            className="certification-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h3>Meta Front-End Developer Professional Certificate</h3>
            <p>Gained hands-on experience in React.js, JavaScript (ES6+), UI/UX design, and performance optimization. Learned best practices for responsive web development and accessibility.</p>
            <a href="#" className="certificate-link">View Certificate</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
