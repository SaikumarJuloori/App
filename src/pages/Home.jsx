import React from "react";
function Home() {
    return (
      <motion.div 
        className="home-container"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h1 className="title">Saikumar Juloori</h1>
        <p className="subtitle">Graduate Student | Full Stack Developer</p>
      </motion.div>
    );
  }
  export default Home;
