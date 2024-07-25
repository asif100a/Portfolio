import { Link } from "react-scroll";
import "./navber.css";

const Navber = () => {
    const items = [
        {
            path: 'about',
            title: 'About'
        },
        {
            path: 'education',
            title: 'Education'
        },
        {
            path: 'skills',
            title: 'Skills'
        },
        {
            path: 'projects',
            title: 'Projects'
        },
        {
            path: 'contact',
            title: 'Contact'
        },
    ];
    
    const navItems = <>
        {
            items.map((item, i) => (
                <li key={i}><Link to={item?.path} smooth={true} duration={600}>{item?.title}</Link></li>
            ))
        }
    </>;

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>

                    <p className="text-2xl font-semibold gradient-text">Front-End Developer</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="contact" smooth={true} duration={600} className="btn btn-sm bg-white hover:bg-white shadow-none border-none bg-gradient-to-r from-[#FF0000] to-[#00FF00] text-white hover:bg-gradient-to-r hover:from-[#FF00009A] hover:to-[#00FF009A]">Contact me</Link>
            </div>
        </div>
    );
};

export default Navber;