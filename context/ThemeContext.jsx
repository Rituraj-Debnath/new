'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check if we have a theme preference in localStorage
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme) {
      // If we have a stored preference, use it
      setDarkMode(storedTheme === 'dark');
    } else {
      // Otherwise default to dark mode
      setDarkMode(true);
    }
    
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Update localStorage when theme changes
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
      
      // Update the document class for Tailwind
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}