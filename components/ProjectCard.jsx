'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6 flex flex-col h-full">
        <h3 className="heading-sm mb-3">{project.title}</h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-4">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              GitHub
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label={`Live demo for ${project.title}`}
            >
              Live Demo
            </a>
          )}
          
          {project.article && (
            <a 
              href={project.article}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label={`Article about ${project.title}`}
            >
              Read Article
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;