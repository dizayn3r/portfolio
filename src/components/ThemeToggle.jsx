import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className=" cursor-pointer fixed bottom-6 left-6 p-4 bg-red-500 dark:bg-red-500 text-white rounded-full shadow-lg hover:bg-red-500 transition-all duration-300 hover:scale-110"
        >
            {isDarkMode ? <Sun className="w-4 h-4 text-gray-900" /> : <Moon className="w-4 h-4 text-gray-900" />}
        </button>
    );
}