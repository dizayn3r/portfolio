import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Skills        from "./components/Skills";
import Projects      from "./components/Projects";
import Blog          from "./components/Blog";
import Experience    from "./components/Experience";
import Education     from "./components/Education";
import Contact       from "./components/Contact";
import Footer        from "./components/Footer";
import ThemeToggle   from "./components/ThemeToggle";

export default function App() {
    return (
        <div className="bg-white dark:bg-[#0f0f17] text-gray-900 dark:text-white min-h-screen antialiased transition-colors duration-300">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Blog />
            <Experience />
            <Education />
            <Contact />
            <Footer />
            <ThemeToggle />
        </div>
    );
}
