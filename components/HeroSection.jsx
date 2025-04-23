'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      <div className="container mx-auto container-padding z-10 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            {/* Profile Image */}
            <div className="mb-6 rounded-full overflow-hidden w-40 h-40 mx-auto border-4 border-gray-200 dark:border-gray-700 shadow-lg">
              <Image 
                src="/profile.jpg" 
                alt="Rituraj Debnath" 
                width={160} 
                height={160}
                className="object-cover"
                priority
              />
            </div>
            
            <h1 className="heading-xl mb-4">Rituraj Debnath</h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              Cloud and DevOps Enthusiast | AWS Certified
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Building scalable cloud solutions with DevOps automation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a 
              href="/resume.pdf" 
              download
              className="btn-primary"
            >
              Download Resume
            </a>
            <Link 
              href="#contact" 
              className="btn-secondary"
            >
              Contact Me
            </Link>
          </motion.div>
          
          {/* Removed the scroll indicator animation */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;