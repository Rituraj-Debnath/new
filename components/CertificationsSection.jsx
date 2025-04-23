'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: "/icons/aws.svg" // Replace with your actual filename
    },
    {
      id: 2,
      title: "IEEE Conference Paper",
      issuer: "IEEE",
      date: "2024",
      icon: "/icons/ieee.svg" // Replace with your actual filename
    },
    {
      id: 3,
      title: "Kubernetes for Beginners",
      issuer: "KodeKloud",
      date: "2024",
      icon: "/icons/kubernetes.svg" // Replace with your actual filename
    },
    {
      id: 4,
      title: "Microsoft Career Essentials – System Administration",
      issuer: "Microsoft",
      date: "2023",
      icon: "/icons/microsoft.svg" // Replace with your actual filename
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
    <section id="certifications" className="section-padding">
      <div className="container mx-auto container-padding">
        <h2 className="heading-lg text-center mb-12">Certifications</h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-4 h-12 w-12 relative">
                <Image 
                  src={cert.icon}
                  alt={`${cert.issuer} icon`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="heading-sm mb-2">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">{cert.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;