import { CiLinkedin } from "react-icons/ci";
import { LiaFacebook } from "react-icons/lia";
import { MdWhatsapp } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About</a>
                <a className="link link-hover">Skills</a>
                <a className="link link-hover">Projects</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
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