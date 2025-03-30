import { motion } from "framer-motion";
import myImage from "../images/passport size.jpg"; // Replace with your actual image path

const AboutMe = () => {
  return (
    <div className="container">
      {/* Profile Image */}
      <motion.div 
        className="image-container"
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)" }}
        transition={{ duration: 0.3 }}
      >
        <img src={myImage} alt="Saikumar Juloori" />
      </motion.div>

      {/* About Me Content */}
      <motion.div 
        className="content"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold mb-3">About Me</h1>
        <p className="text-lg text-gray-300">
          Hi, I'm <span className="text-blue-400 font-semibold">Saikumar Juloori</span>, a passionate full-stack developer 
          with expertise in <span className="text-blue-400">React, Node.js, AWS, and more</span>.
          I love building scalable applications and exploring new technologies to create impactful digital solutions.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;