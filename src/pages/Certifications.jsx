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
  
            <a href="https://www.credly.com/badges/c65f6fa2-0bde-468f-9410-0f246b1ea33b/linked_in_profile" className="certificate-link">View Certificate</a>
          </motion.div>

          <motion.div
            className="certification-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>IBM Full-Stack JavaScript Developer Professional Certificate</h3>
           
            <a href="#" className="certificate-link">View Certificate</a>
          </motion.div>

          <motion.div
            className="certification-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h3>Meta Front-End Developer Professional Certificate</h3>
           
            <a href="https://coursera.org/share/efe4bf77fdd6fa22a099ba075e6469e8" className="certificate-link">View Certificate</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
