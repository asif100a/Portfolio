import { useInterSectionObserver } from "../../../hooks/useIntersectionObserver";
import Footer from "../../sharedFile/footer/Footer";
import Navbar from "../../sharedFile/navbar/Navbar";
import About from "./components/sections/About/About";
import Banner from "./components/sections/Banner/Banner";
import Contact from "./components/sections/Contact/Contact";
import Education from "./components/sections/Education/Education";
import Projects from "./components/sections/Projects/Projects";
import Skills from "./components/sections/Skills/Skills";
import WorkExperience from "./components/sections/WorkExperience/WorkExperience";

const Home = () => {
    const [sectionRef, isIntersecting] = useInterSectionObserver();

    return (
        <div className="overflow-hidden">
            <Navbar isIntersecting={isIntersecting} />
            <div className="bg-[#0d1117] text-white">
                <Banner sectionRef={sectionRef} />
                <About />
                <Education />
                <Skills />
                <WorkExperience />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default Home;