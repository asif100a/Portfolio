import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Projects />
        </div>
    );
};

export default Home;