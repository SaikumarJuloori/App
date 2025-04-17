import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_avltf67',
        'template_sckcl56',
        formRef.current,
        'sZF4WgM8vbllwjrMV'
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('Email error:', error.text);
        }
      );
  };

  return (
    <section id="contact" className="p-6 text-center">
      <motion.div
        className="contact-container max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4">Contact</h2>

        {!submitted ? (
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form flex flex-col gap-4">
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-2 border rounded-md"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-2 border rounded-md"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-2 border rounded-md"
              rows="4"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            />
            <motion.button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Send Message
            </motion.button>
          </form>
        ) : (
          <motion.div
            className="thank-you-message text-lg font-semibold text-green-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Thank you, {formData.name || 'friend'}! We'll get back to you soon.
          </motion.div>
        )}

        <div className="social-links flex justify-center gap-6 mt-6">
          <motion.a
            href="https://www.linkedin.com/in/juloorisai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl hover:text-blue-800 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/your-instagram-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-2xl hover:text-pink-700 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="tel:+1234567890"
            className="text-green-600 text-2xl hover:text-green-800 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <FaPhone />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
