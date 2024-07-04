import Footer from "../../sharedFile/footer/Footer";
import Navber from "../../sharedFile/navber/Navber";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Navber />
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;