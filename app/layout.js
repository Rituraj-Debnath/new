import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { ThemeScript } from './theme-script';

// Initialize the Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: 'Rituraj Debnath - Portfolio',
  description: 'Cloud and DevOps Engineer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}