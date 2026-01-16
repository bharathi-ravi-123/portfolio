import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        window.location.href = `mailto:ravibharathi0108@gmail.com?subject=Contact from Portfolio&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    };

    return (
        <section id="contact" className="py-20 bg-light dark:bg-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary dark:bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss new opportunities? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 dark:bg-gray-800 p-4 rounded-full">
                                <Phone className="text-primary dark:text-accent" size={24} />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                                <p className="text-gray-600 dark:text-gray-400">+91 99400 30596</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 dark:bg-gray-800 p-4 rounded-full">
                                <Mail className="text-primary dark:text-accent" size={24} />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                                <p className="text-gray-600 dark:text-gray-400">ravibharathi0108@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 dark:bg-gray-800 p-4 rounded-full">
                                <MapPin className="text-primary dark:text-accent" size={24} />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                                <p className="text-gray-600 dark:text-gray-400">Chennai, India</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h3>
                            <div className="flex space-x-4">
                                <a href="https://github.com/bharathi-ravi-123" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-gray-900 transition-colors">
                                    <Github size={24} />
                                </a>
                                <a href="www.linkedin.com/in/bharathi-r-99a400b30s596" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-gray-900 transition-colors">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition-colors"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition-colors resize-none"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-primary hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center transform hover:-translate-y-1"
                            >
                                <Send className="mr-2" size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
