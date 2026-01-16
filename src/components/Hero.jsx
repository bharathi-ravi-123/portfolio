import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-light to-blue-50 dark:from-dark dark:to-slate-900 pt-16 relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-accent mb-4">
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                        BHARATHI R
                    </h1>
                    <h3 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8">
                        Software Developer | Computer Science Engineer
                    </h3>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10">
                        Passionate about building scalable web applications and solving complex problems.
                        Skilled in Python, Flask, React, and Data Structures.
                    </p>

                    <div className="flex justify-center space-x-6 mb-12">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-accent transition-transform hover:scale-110">
                            <Github size={32} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-accent transition-transform hover:scale-110">
                            <Linkedin size={32} />
                        </a>
                        <a href="mailto:ravibharathi0108@gmail.com" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-accent transition-transform hover:scale-110">
                            <Mail size={32} />
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="projects" smooth={true} duration={500} offset={-70}>
                            <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all hover:shadow-xl transform hover:-translate-y-1">
                                View My Work
                            </button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500} offset={-70}>
                            <button className="px-8 py-3 border-2 border-primary text-primary dark:border-accent dark:text-accent rounded-full font-semibold hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-gray-900 transition-all">
                                Contact Me
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
