'use client';
import { motion } from 'framer-motion';

const ResumeDownloadSection = () => {
  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-lg mb-6">Download My Resume</h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            For more details about my background and experience, download my resume below.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeDownloadSection;