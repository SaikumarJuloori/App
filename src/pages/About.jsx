import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white p-10">
      {/* Laptop Screen with Animated Code */}
      <div className="w-1/2 flex justify-center items-center">
        <motion.div 
          className="bg-black p-6 rounded-lg shadow-lg w-96 h-64 border-2 border-gray-700"
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <pre className="text-green-400 text-sm">
            {`const hello = "Welcome!";
console.log(hello);

function greet(name) {
  return \`Hello, \${name}!\`;
}

greet("Visitor");`}
          </pre>
        </motion.div>
      </div>
      
      {/* About Me Section */}
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-300">
          Hi, I'm Saikumar Juloori, a passionate full-stack developer with expertise in React, Node.js, AWS, and more.
          I love building scalable applications and exploring new technologies to create impactful digital solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;