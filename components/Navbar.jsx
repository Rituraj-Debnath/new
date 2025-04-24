'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto container-padding">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-black dark:text-white">Rituraj</span>
            <span className="text-gray-500">.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link href="#about" className="nav-link">About</Link>
              <Link href="#skills" className="nav-link">Skills</Link>
              <Link href="#projects" className="nav-link">Projects</Link>
              <Link href="#resume" className="nav-link">Resume</Link>
              <Link href="#contact" className="nav-link">Contact</Link>
            </div>
            
            {/* Theme Toggle */}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Theme Toggle for Mobile */}
            <div className="mr-4">
              <ThemeToggle />
            </div>
            
            <button 
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
              <Link href="#about" className="nav-link-mobile" onClick={closeMenu}>About</Link>
              <Link href="#skills" className="nav-link-mobile" onClick={closeMenu}>Skills</Link>
              <Link href="#projects" className="nav-link-mobile" onClick={closeMenu}>Projects</Link>
              <Link href="#resume" className="nav-link-mobile" onClick={closeMenu}>Resume</Link>
              <Link href="#contact" className="nav-link-mobile" onClick={closeMenu}>Contact</Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;