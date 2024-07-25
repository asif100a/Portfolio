import { CiLinkedin } from "react-icons/ci";
import { LiaFacebook } from "react-icons/lia";
import { MdWhatsapp } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";
import {Link as Scroll} from "react-scroll";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-gray-100 gradient-horizontal text-base-content rounded p-3 sm:p-10">
            <nav className="grid grid-flow-col gap-4">
                <Scroll to="about" smooth={true} duration={600} className="hover:cursor-pointer gradient-border">About</Scroll>
                <Scroll to="education" smooth={true} duration={600} className="hover:cursor-pointer gradient-border">Education</Scroll>
                <Scroll to="skills" smooth={true} duration={600} className="hover:cursor-pointer gradient-border">Skills</Scroll>
                <Scroll to="projects" smooth={true} duration={600} className="hover:cursor-pointer gradient-border">Projects</Scroll>
                <Scroll to="contact" smooth={true} duration={600} className="hover:cursor-pointer gradient-border">Contact</Scroll>
            </nav>
            <nav>
                <div className="flex gap-6 justify-center items-center">
                    <Link to="https://www.linkedin.com/in/n-m-asif-sheikh" target="_blank">
                        <CiLinkedin className="w-8 h-8 text-blue-500" />
                    </Link>
                    <Link to="https://github.com/asif100a" target="_blank">
                        <VscGithub className="w-7 h-7 text-purple-500" />
                    </Link>
                    <Link to="https://www.facebook.com/?_rdc=2&_rdr" target="_blank">
                        <LiaFacebook className="w-9 h-9 text-indigo-500" />
                    </Link>
                    <Link>
                        <MdWhatsapp className="w-8 h-8 text-green-500" />
                    </Link>
                </div>
            </nav>
            <aside>
                <p>Copyright ©{new Date().getFullYear()} - All right reserved by N.M. Asif Sheikh</p>
            </aside>
        </footer>
    );
};

export default Footer;