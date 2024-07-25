import Footer from "../../sharedFile/footer/Footer";
import Navber from "../../sharedFile/navber/Navber";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Navber />
            <div className="bg-[#f0f5ee]">
                <Banner />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default Home;