'use client';
import { motion } from 'framer-motion';

const ResumeSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Cloud DevOps Intern",
      company: "XYZ Tech Solutions",
      period: "May 2023 - Present",
      description: "Implementing CI/CD pipelines using Jenkins and GitHub Actions. Deploying and managing containerized applications with Docker and Kubernetes. Automating infrastructure provisioning with Terraform on AWS."
    },
    {
      id: 2,
      title: "AWS Student Ambassador",
      company: "Amazon Web Services",
      period: "Jan 2023 - Present",
      description: "Organizing workshops and events to promote AWS services and cloud computing. Helping students learn about cloud technologies and AWS certifications."
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Institute of Engineering & Management, Kolkata",
      period: "2020 - 2024",
      description: "Specializing in Cloud Computing and DevOps. Relevant coursework includes Distributed Systems, Cloud Architecture, and Network Security."
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">Resume</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="heading-md mb-6 text-center lg:text-left">Experience</h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {experiences.map((exp) => (
                <motion.div 
                  key={exp.id}
                  variants={itemVariants}
                  className="border-l-2 border-gray-300 dark:border-gray-600 pl-6 relative"
                >
                  <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full -left-[7px] top-2"></div>
                  <h4 className="heading-sm mb-1">{exp.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Education Section */}
          <div>
            <h3 className="heading-md mb-6 text-center lg:text-left">Education</h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {education.map((edu) => (
                <motion.div 
                  key={edu.id}
                  variants={itemVariants}
                  className="border-l-2 border-gray-300 dark:border-gray-600 pl-6 relative"
                >
                  <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full -left-[7px] top-2"></div>
                  <h4 className="heading-sm mb-1">{edu.degree}</h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;