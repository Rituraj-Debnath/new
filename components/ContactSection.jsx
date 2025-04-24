'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (field) => {
    setFocused(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocused(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show loading toast
    const toastId = toast.loading("Sending your message...");
    
    // For Formspree, it's better to use their recommended approach
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    
    // Send to Formspree
    fetch('https://formspree.io/f/xeogqrav', {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      },
      mode: 'cors' // Explicitly set CORS mode
    })
    .then(response => {
      if (response.ok) {
        return response.json(); // Parse the JSON response
      } else {
        throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
      }
    })
    .then(data => {
      toast.update(toastId, {
        render: "Message sent successfully! Thank you for reaching out.",
        type: "success",
        isLoading: false,
        autoClose: 5000
      });
      setFormData({ name: '', email: '', message: '' });
      setFocused({ name: false, email: false, message: false });
    })
    .catch(error => {
      console.error('Formspree error:', error);
      toast.update(toastId, {
        render: "Something went wrong. Please try again later.",
        type: "error",
        isLoading: false,
        autoClose: 5000
      });
    });
  };

  // Animation for form elements
  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Blob SVG Background */}
      <div className="absolute -bottom-32 -left-40 w-80 h-80 opacity-20 dark:opacity-10 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8A63D2" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.1C64.8,55,53.7,66.2,40.2,74.6C26.7,83,13.3,88.5,-0.7,89.6C-14.7,90.7,-29.4,87.3,-43.5,80.7C-57.5,74.1,-70.9,64.4,-79.3,51.4C-87.7,38.5,-91.1,22.3,-89.2,7.2C-87.3,-7.9,-80.2,-22.9,-72.2,-37.2C-64.2,-51.5,-55.3,-65,-43.1,-72.5C-30.9,-80,-15.4,-81.5,-0.2,-81.1C15,-80.8,30.5,-78.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute top-20 right-0 w-72 h-72 opacity-20 dark:opacity-10 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F2A365" d="M47.4,-73.2C59.9,-66.7,68,-51.8,74.9,-36.7C81.7,-21.6,87.2,-6.2,85.4,8.3C83.5,22.8,74.3,36.3,63.2,47.3C52.1,58.2,39.2,66.5,24.9,71.7C10.7,76.9,-4.9,79,-18.2,75.2C-31.5,71.5,-42.5,62,-53.2,51.2C-63.9,40.5,-74.2,28.5,-78.9,14.1C-83.5,-0.3,-82.5,-17.1,-76.6,-31.9C-70.7,-46.7,-60,-59.5,-46.5,-65.5C-33,-71.5,-16.5,-70.7,0.2,-71C16.8,-71.4,33.7,-73,47.4,-73.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-lg text-center mb-12">Contact Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form with Glassmorphism */}
            <motion.div
              variants={formAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20 dark:border-gray-700/30 shadow-purple-500/10 dark:shadow-purple-400/5 ring-1 ring-purple-500/20 dark:ring-purple-400/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className={`absolute left-3 top-1/2 transform ${focused.name ? '-translate-y-8 text-purple-500 dark:text-purple-400' : '-translate-y-1/2 text-gray-400'} transition-all duration-300`}>
                    <FiUser className="text-lg" />
                  </div>
                  <label 
                    htmlFor="name" 
                    className={`absolute left-10 transition-all duration-300 ${
                      focused.name 
                        ? 'transform -translate-y-5 text-xs text-purple-500 dark:text-purple-400' 
                        : 'transform -translate-y-1/2 top-1/2 text-gray-500'
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    required
                    className="w-full px-10 pt-5 pb-2 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <div className={`absolute left-3 top-1/2 transform ${focused.email ? '-translate-y-8 text-purple-500 dark:text-purple-400' : '-translate-y-1/2 text-gray-400'} transition-all duration-300`}>
                    <FiMail className="text-lg" />
                  </div>
                  <label 
                    htmlFor="email" 
                    className={`absolute left-10 transition-all duration-300 ${
                      focused.email 
                        ? 'transform -translate-y-5 text-xs text-purple-500 dark:text-purple-400' 
                        : 'transform -translate-y-1/2 top-1/2 text-gray-500'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    required
                    className="w-full px-10 pt-5 pb-2 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <div className={`absolute left-3 top-6 transform ${focused.message ? 'translate-y-0 text-purple-500 dark:text-purple-400' : 'translate-y-0 text-gray-400'} transition-all duration-300`}>
                    <FiMessageSquare className="text-lg" />
                  </div>
                  <label 
                    htmlFor="message" 
                    className={`absolute left-10 transition-all duration-300 ${
                      focused.message 
                        ? 'transform -translate-y-5 text-xs text-purple-500 dark:text-purple-400' 
                        : 'transform translate-y-0 top-6 text-gray-500'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    required
                    rows="5"
                    className="w-full px-10 pt-5 pb-2 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-purple-600/20 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            
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
      
      {/* Toast Container for Notifications */}
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default ContactSection;