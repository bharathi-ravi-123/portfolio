import React from 'react';
import { motion } from 'framer-motion';
import { Download, Book, Briefcase, Award } from 'lucide-react';

const Resume = () => {
    const education = [
        {
            institution: "Tagore Engineering College, Chennai",
            degree: "B.E. Computer Science and Engineering",
            year: "Nov 2022 – May 2026",
            score: "CGPA: 8.13 / 10"
        },
        {
            institution: "Higher Secondary Certificate (HSC)",
            degree: "State Board",
            year: "2022",
            score: "Percentage: 73%"
        },
        {
            institution: "Secondary School Leaving Certificate (SSLC)",
            degree: "State Board",
            year: "2020",
            score: "Percentage: 85%"
        }
    ];

    const experience = [
        {
            role: "Web Development Intern",
            company: "IIT Madras",
            location: "Chennai",
            duration: "Jun 2025 – Jul 2025",
            points: [
                "Developed backend modules using Flask and MySQL with proper data validation and control flow.",
                "Applied OOP concepts to structure reusable and maintainable code.",
                "Improved application performance through debugging and logical optimization."
            ]
        }
    ];

    const certifications = [
        "Revature Pre-Training Program (PEP – Python SQL Data)",
        "The Joy of Computing Using Python – Elite (NPTEL, IIT Madras), 86%",
        "Generative AI – GUVI (IIT-M & HCL Initiative)",
        "Kickstart Python – Code First Girls"
    ];

    return (
        <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
                    <div className="w-20 h-1 bg-primary dark:bg-accent mx-auto rounded-full mb-8"></div>

                    <a
                        href="/Bharathi_R_Resume.pdf"
                        download="Bharathi_R_Resume.pdf"
                        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                        <Download className="mr-2" size={20} />
                        Download Resume
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-8">
                            <Briefcase className="text-primary dark:text-accent mr-3" size={28} />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
                        </div>

                        <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-700 ml-3 pl-8 relative">
                            {experience.map((job, index) => (
                                <div key={index} className="relative">
                                    <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-gray-900 bg-primary dark:bg-accent"></span>
                                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{job.role}</h4>
                                    <p className="text-primary dark:text-accent font-medium mb-1">{job.company}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{job.duration} | {job.location}</p>
                                    <ul className="list-disc list-outside text-gray-600 dark:text-gray-300 ml-4 space-y-1">
                                        {job.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center mb-8 mt-12">
                            <Book className="text-primary dark:text-accent mr-3" size={28} />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                        </div>

                        <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-700 ml-3 pl-8">
                            {education.map((edu, index) => (
                                <div key={index} className="relative">
                                    <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-gray-900 bg-primary dark:bg-accent"></span>
                                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.institution}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                                        <span className="text-sm font-semibold text-primary dark:text-accent">{edu.score}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-8">
                            <Award className="text-primary dark:text-accent mr-3" size={28} />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <ul className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
