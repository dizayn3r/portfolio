import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationExperience from "./components/EducationExperience";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {

  return (
    <div className="bg-white dark:bg-black">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    {/* <EducationExperience/> */}
    <Experience />
    <Education />
    <Contact />
    <Footer />
    <ThemeToggle />
</div>
  );
}
