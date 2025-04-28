'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8" id="main-footer">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://github.com/Rituraj-Debnath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rituraj-debnath-168540204/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a 
              href="https://medium.com/@rituraj-debnath-2003" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="Medium Profile"
            >
              <FaMedium className="text-2xl" />
            </a>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Rituraj Debnath. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;