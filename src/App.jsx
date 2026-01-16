import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';
import { Link, animateScroll as scroll } from 'react-scroll';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-gray-800 dark:text-gray-100 transition-colors duration-300 font-poppins relative">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>© {new Date().getFullYear()} Bharathi R. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-accent">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-accent">GitHub</a>
          <a href="mailto:ravibharathi0108@gmail.com" className="hover:text-primary dark:hover:text-accent">Email</a>
        </div>
      </footer>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
