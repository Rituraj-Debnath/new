'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would normally connect to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is just a UI demo - no actual message was sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-lg text-center mb-12">Contact Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="heading-sm mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-xl">📧</span>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:rituraj2003debnath@gmail.com" className="text-gray-600 dark:text-gray-400 hover:underline">
                        rituraj2003debnath@gmail.com
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="mr-3 text-xl">📱</span>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+918902947556" className="text-gray-600 dark:text-gray-400 hover:underline">
                        +91 8902947556
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="mr-3 text-xl">📍</span>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Kolkata, India
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="heading-sm mb-4">Connect With Me</h3>
                <p className="mb-4">Feel free to reach out for collaborations or just a friendly chat.</p>
                <p className="text-gray-600 dark:text-gray-400">
                  I'm currently open to new opportunities and interesting projects.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;