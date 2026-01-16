import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import netflixCover from '../assets/netflix_cover.jpg';
import iotDashboardCover from '../assets/iot_dashboard.png';
import landingPageCover from '../assets/landing_page_design.jpg';
import todoAppCover from '../assets/todo_app.jpg';
import dashboardCover from '../assets/dashboard_cover.jpg';
import courseRegistrationCover from '../assets/course_registration.jpg';

const Projects = () => {
    const deployedProjects = [
        {
            title: "Netflix Clone",
            description: "A pixel-perfect clone of Netflix with TMDB integration.",
            tech: ["React", "TMDB API", "CSS"],
            live: "https://netpluss-clone.netlify.app/",
            repo: "#", // User didn't provide repo link explicitly
            image: netflixCover
        },
        {
            title: "IoT Sensor Dashboard",
            description: "Real-time dashboard for monitoring IoT sensor data.",
            tech: ["PHP", "MySQL", "JS"],
            live: "https://web.iitm.ac.in/iot/",
            repo: "#",
            image: iotDashboardCover
        },
        {
            title: "Landing Page",
            description: "A responsive landing page for BluePeak.",
            tech: ["HTML", "CSS", "JS"],
            live: "https://landingpagebluepeak.netlify.app/",
            repo: "#",
            image: landingPageCover
        },
        {
            title: "To-Do App",
            description: "A simple and elegant To-Do application.",
            tech: ["React", "Tailwind"],
            live: "https://todo-webapp-com.lovable.app/",
            repo: "#",
            image: todoAppCover
        }
    ];

    const githubProjects = [
        {
            title: "Dashboard",
            description: "A comprehensive dashboard for data visualization.",
            tech: ["React", "Chart.js"],
            repo: "https://github.com",
            image: dashboardCover
        },
        {
            title: "Course Registration Website",
            description: "Full-stack system with auth and role-based access.",
            tech: ["Flask", "MySQL"],
            repo: "https://github.com",
            image: courseRegistrationCover
        }
    ];

    const ProjectCard = ({ project, isDeployed }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
        >
            <div className="relative overflow-hidden h-48">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {isDeployed && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-md">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="projects" className="py-20 bg-light dark:bg-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary dark:bg-accent mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on, ranging from web applications to IoT dashboards.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...deployedProjects, ...githubProjects].map((project, index) => (
                        <ProjectCard key={index} project={project} isDeployed={deployedProjects.includes(project)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
