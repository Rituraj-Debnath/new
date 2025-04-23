'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  // Sample project data - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Multi-Microservice E-commerce DevOps Implementation on AWS EKS",
      description: "Designed and implemented a complete DevOps pipeline for a microservice-based e-commerce application deployed on AWS EKS. Utilized Terraform for infrastructure as code, set up CI/CD with GitHub Actions, and implemented monitoring with Prometheus.",
      technologies: ["AWS EKS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Prometheus"],
      github: "#",
      article: "#"
    },
    {
      id: 2,
      title: "CI/CD Pipeline for Java App using Jenkins & Docker on EC2",
      description: "Built an end-to-end CI/CD pipeline for a Java application using Jenkins, Docker, and AWS EC2. Implemented automated testing, containerization, and deployment with zero-downtime strategies.",
      technologies: ["Jenkins", "Docker", "AWS EC2", "Java", "Maven", "Ansible"],
      github: "#",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in Cloud and DevOps technologies.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/RiturajDebnath" 
            className="btn-secondary inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;