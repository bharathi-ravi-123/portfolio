import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile_final_v4.jpg';

const About = () => {
    const skills = [
        { category: "Programming", items: ["Python", "JavaScript", "PHP"] },
        { category: "Web Technologies", items: ["HTML5", "CSS3", "React", "Flask", "Node.js"] },
        { category: "Databases", items: ["MySQL", "phpMyAdmin"] },
        { category: "Core CS", items: ["Data Structures", "Algorithms", "OOP"] },
        { category: "Tools & Systems", items: ["Git", "GitHub", "Linux"] },
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary dark:bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:w-1/3 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 border-4 border-primary dark:border-accent rounded-full animate-spin-slow opacity-20 transform rotate-45"></div>
                            <img
                                src={profileImg}
                                alt="Bharathi R"
                                className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white dark:border-gray-800"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="md:w-2/3"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            I'm a <span className="text-primary dark:text-accent">Software Developer</span> based in Chennai, India.
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Final-year Computer Science Engineering student with strong fundamentals in Data Structures, Algorithms, and OOP.
                            I have hands-on experience in building scalable web applications using HTML, CSS, JavaScript, Python, Flask, PHP, and MySQL.
                            I possess strong problem-solving ability with a keen interest in backend and system-oriented development.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {skills.map((skillGroup, index) => (
                                <div key={index}>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{skillGroup.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-accent transition-colors cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
