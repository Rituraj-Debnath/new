import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer';
import StyledComponentsRegistry from './registry'; // This file is missing
import { ThemeProvider } from '../context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rituraj Debnath - Portfolio',
  description: 'Cloud and DevOps Engineer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Script to prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const savedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                console.error('Theme initialization failed:', e);
              }
            })();
          `
        }} />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}