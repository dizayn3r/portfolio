import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > (window.innerHeight / 2)) {
            setHasShadow(true);
        } else {
            setHasShadow(false);
        }
    };

    // Add scroll event listener on component mount
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`bg-white dark:bg-black fixed w-full z-50 top-0 transition-shadow duration-300 ${hasShadow ? "shadow-md" : "shadow-none"
                }`} style={{ maxHeight: "var(--navbar-height))" }}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo on the left */}
                <Logo />

                {/* Hamburger menu for mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-800 focus:outline-none dark:text-white"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>

                {/* Navigation items on the right */}
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } md:flex md:space-x-6 absolute md:relative top-full left-0 w-full md:w-auto bg-white dark:bg-black shadow-md md:shadow-none transition-all duration-300 ease-in-out`}
                >
                    <a
                        href="#about"
                        className="block py-2 px-4 font-bold text-gray-800 dark:text-white hover:text-red-600"
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        className="block py-2 px-4 font-bold text-gray-800 dark:text-white hover:text-red-600"
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="block py-2 px-4 font-bold text-gray-800 dark:text-white hover:text-red-600"
                    >
                        Projects
                    </a>
                    <a
                        href="#education-experience"
                        className="block py-2 px-4 font-bold text-gray-800 dark:text-white hover:text-red-600"
                    >
                        Experience
                    </a>
                    <a
                        href="#contact"
                        className="block py-2 px-4 font-bold text-gray-800 dark:text-white hover:text-red-600"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}