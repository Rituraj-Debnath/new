'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      id: 1,
      title: "Cloud & IaC",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Terraform", icon: "🏗️" }
      ]
    },
    {
      id: 2,
      title: "CI/CD & Automation",
      skills: [
        { name: "Jenkins", icon: "🔄" },
        { name: "GitHub Actions", icon: "🔧" },
        { name: "ArgoCD", icon: "🚢" },
        { name: "Ansible", icon: "📚" }
      ]
    },
    {
      id: 3,
      title: "Containers & Orchestration",
      skills: [
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚓" },
        { name: "Helm", icon: "⎈" }
      ]
    },
    {
      id: 4,
      title: "Monitoring",
      skills: [
        { name: "Prometheus", icon: "📊" },
        { name: "CloudWatch", icon: "👁️" }
      ]
    },
    {
      id: 5,
      title: "Languages",
      skills: [
        { name: "Python", icon: "🐍" }
      ]
    },
    {
      id: 6,
      title: "Version Control",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "🐙" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-space-grotesk">
            My technical skills and areas of expertise in Cloud and DevOps technologies.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h3 className="heading-md mb-6 text-center font-space-grotesk">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, index) => (
                  <div key={index} className="relative">
                    {/* Badge Style */}
                    <motion.div
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                                rounded-full flex items-center gap-2 hover:shadow-md transition-all duration-300
                                hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                      }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                    
                    {/* Tooltip on hover */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 
                                  text-white px-3 py-1 rounded text-sm whitespace-nowrap z-10"
                      >
                        {skill.name}
                        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 
                                      bg-gray-900 dark:bg-gray-700 rotate-45"></div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;