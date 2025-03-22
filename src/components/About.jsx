import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="py-20 flex items-center dark:from-gray-900 dark:to-gray-800"
        >
            <div className="container mx-auto px-6">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold dark:text-white text-center"
                >
                    About Me
                </motion.h2>

                {/* Flex Container for Photo and Text */}
                <div className="mt-8 flex flex-col md:flex-row items-center gap-8">
                    {/* Photo (Left Side) */}
                    <div className="flex-1 flex flex-col items-center md:items-start gap-6">
                        {/* Photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-64 h-80 md:w-72 md:h-96 rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src="/photo_2.jpg" // Replace with your photo path
                                alt="Shashi Kant"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* About Me Text (Right Side) */}
                    <div className="flex-3">
                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-gray-700 dark:text-gray-300"
                        >
                            Hi, my name is{" "}
                            <span className="font-semibold text-blue-600">Shashi Kant</span>. I am a Full Stack Developer with expertise in Flutter, React, and Node.js. I have experience in building mobile and web applications, managing deployments, and working with REST APIs. My goal is to work in a firm where I can utilize and apply my knowledge and skills to grow while fulfilling organizational goals. I have built many industry-grade projects from scratch and am armed with many technological skills useful for tech projects.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-4 text-gray-700 dark:text-gray-300"
                        >
                            I have worked on various projects, including Tyre Pulse, JK Mobility, and Video Collaboration apps, where I implemented clean architecture, WebRTC, and Auth0 authentication. I am passionate about building scalable and innovative solutions.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}