'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';
import { FiUser, FiMail } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResumeDownloadSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [focused, setFocused] = useState({
    name: false,
    email: false
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
    const toastId = toast.loading("Processing your download...");
    
    // For Formspree, it's better to use their recommended approach
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('form_type', 'resume_download');
    
    // Send to Formspree
    fetch('https://formspree.io/f/xeogqrav', {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      },
      mode: 'cors'
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
      }
    })
    .then(data => {
      toast.update(toastId, {
        render: "Thank you! Your resume download is starting...",
        type: "success",
        isLoading: false,
        autoClose: 3000
      });
      
      // Trigger the actual download after form submission
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Rituraj_Debnath_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);
      
      setFormData({ name: '', email: '' });
      setFocused({ name: false, email: false });
      setShowForm(false);
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

  const handleButtonClick = (e) => {
    if (e) e.preventDefault(); // Prevent default behavior if event exists
    setShowForm(true); // Just show the form without scrolling
  };

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
          
          {!showForm ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                type="button"
                onClick={handleButtonClick}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
              >
                Download Resume
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20 dark:border-gray-700/30 shadow-purple-500/10 dark:shadow-purple-400/5 ring-1 ring-purple-500/20 dark:ring-purple-400/10 max-w-md mx-auto"
            >
              <h3 className="heading-sm mb-6">Enter Your Details</h3>
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
                
                <div className="flex space-x-4 justify-center mt-6">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Download
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
      <ToastContainer position="bottom-right" />
    </section>
  );
};

export default ResumeDownloadSection;