import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/10 shadow-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-500/30 transition-colors duration-200 flex items-center justify-center"
        >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>
    );
}
