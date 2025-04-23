'use client';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-lg mb-8">About Me</h2>
          
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 font-space-grotesk">
            <p>
              I am a passionate Computer Science student specializing in Cloud, DevOps, and Automation. 
              With a strong foundation in modern infrastructure technologies, I focus on building 
              scalable and efficient cloud solutions that leverage the power of automation.
            </p>
            
            <p>
              My hands-on experience includes working with Docker for containerization, Jenkins for 
              continuous integration and deployment, Kubernetes for orchestration, and AWS for cloud 
              infrastructure. I'm also proficient with infrastructure as code using Terraform, allowing 
              me to create reproducible and maintainable cloud environments.
            </p>
            
            <p>
              I'm constantly exploring new technologies and methodologies in the DevOps space, 
              with a particular interest in automating complex workflows and optimizing cloud resources 
              for performance and cost-efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
