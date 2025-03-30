import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Contact</h2>
        <form className="contact-form">
          <motion.input
            type="text"
            placeholder="Your Name"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.textarea
            placeholder="Your Message"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
