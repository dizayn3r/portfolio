import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Hero() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.3 } },
        tap: { scale: 0.95 },
    };

    return (
        <motion.section
            className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-center px-6 overflow-x-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Profile Image */}
            <motion.img
                rel="preload"
                src="/photo.jpg" // Replace with actual path
                alt="Profile"
                className="w-56 h-56 object-cover rounded-full shadow-lg mb-4"
                variants={itemVariants}
            />

            {/* Heading */}
            <motion.h2
                className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center gap-2"
                variants={itemVariants}
            >
                Hi, I'm Shashi Kant <span>👋</span>
            </motion.h2>

            {/* Title */}
            <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mt-2"
                variants={itemVariants}
            >
                Full Stack Developer
            </motion.h1>

            {/* Description */}
            <motion.p
                className="text-gray-600 dark:text-white mt-4 text-lg max-w-screen-lg"
                variants={itemVariants}
            >
                A passionate{" "}
                <span className="font-bold text-blue-600">Mobile / Web Developer</span>{" "}
                and{" "}
                <span className="font-bold text-purple-600">UI/UX</span> enthusiast specialized
                in building stunning pixel-perfect interactive websites/applications.
            </motion.p>

            {/* Call-to-Action Button */}
            <motion.button
                className="mt-6 px-6 py-3 cursor-pointer bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300 hover:bg-red-700"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => window.open("mailto:skantin21@gmail.com")}
            >
                Reach Out
            </motion.button>
        </motion.section>
    );
}

export default Hero;