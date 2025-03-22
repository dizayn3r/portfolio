import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationExperience from "./components/EducationExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import StatsSection from "./components/StatsSection";

export default function App() {

  return (
    <div className="bg-white dark:bg-black w-full">
    <Navbar />
    <Hero />
    <About />
    <StatsSection />
    <Skills />
    <Projects />
    <EducationExperience/>
    {/* <Education />
    <Experience /> */}
    <Contact />
    <Footer />
    <ThemeToggle />
</div>
  );
}
