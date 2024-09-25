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
        <header className="w-full h-full bg-[#0d1117] px-28">
            <div className="navbar gradient-border-nav px-8">
                <div className="lg:navbar-start flex-row-reverse lg:flex-row lg:w-1/2 w-full">
                    <nav className="dropdown flex flex-row-reverse justify-between lg:inline-block lg:w-auto w-full">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
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

                        <p className="sm:text-3xl text-2xl font-semibold gradient-text flex justify-center items-center">Front-End Developer</p>
                    </nav>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <Link to="contact" smooth={true} duration={600}>
                        <button className="btn btn-sm text-lg font-medium px-6 h-10 min-h-10 bg-white hover:bg-white shadow-none border-none bg-gradient-to-r from-[#fb7185] to-[#eea75b] text-white hover:bg-gradient-to-r hover:from-[#fb7185] hover:to-[#eea75b] rounded-3xl">Contact Me</button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navber;