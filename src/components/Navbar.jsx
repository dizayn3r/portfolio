import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const links = [
    { label: "About",       href: "#about"      },
    { label: "Skills",      href: "#skills"     },
    { label: "Projects",    href: "#projects"   },
    { label: "Blog",        href: "#blog"       },
    { label: "Experience",  href: "#experience" },
    { label: "Certificates",href: "#education"  },
    { label: "Contact",     href: "#contact"    },
];

export default function Navbar() {
    const [isOpen,    setIsOpen]    = useState(false);
    const [scrolled,  setScrolled]  = useState(false);
    const [active,    setActive]    = useState("");
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Highlight active nav link based on scroll position
    useEffect(() => {
        const ids = links.map((l) => l.href.slice(1));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <motion.header
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0,   opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/90 dark:bg-[#0f0f17]/90 backdrop-blur-lg border-b border-gray-200 dark:border-white/8 shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-extrabold text-lg tracking-tight">
                    <span className="text-gray-900 dark:text-white">SK</span>
                    <span className="text-blue-600 dark:text-blue-400">.</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                                active === l.href.slice(1)
                                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                            }`}
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                {/* Right controls */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="p-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
                    >
                        {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                    </button>

                    <a
                        href="mailto:skantin@sknt.in"
                        className="hidden md:inline-flex text-sm font-semibold px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200"
                    >
                        Hire me
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{   opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-[#13131f] border-b border-gray-200 dark:border-white/8"
                    >
                        <div className="px-4 py-3 flex flex-col gap-1">
                            {links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="mailto:skantin@sknt.in"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 px-3 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg text-center transition-colors"
                            >
                                Hire me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
