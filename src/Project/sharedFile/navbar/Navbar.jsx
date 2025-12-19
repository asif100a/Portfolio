import { Link } from "react-scroll";
import "./navbar.css";
import { CgMenuRound } from "react-icons/cg";
import { items } from "../../../utils/utils";
import { useEffect, useState, useCallback } from "react";
import PropTypes from 'prop-types';
import { RxCrossCircled } from "react-icons/rx";

const Navbar = ({ isIntersecting }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down and past 100px - hide navbar
            setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
            // Scrolling up - show navbar
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const navItems = <>
        {
            items.map((item, i) => (
                <li key={i} className="cursor-pointer font-medium font-text-lora text-base gradient-btn text-nowrap">
                    <Link to={item?.path} smooth={true} duration={600}>
                        <button onClick={() => setShowDropdown(false)}>{item?.title}</button>
                    </Link>
                </li>
            ))
        }
    </>;

    return (
        <header className={`w-full h-fit bg-[#0d1117] relative`}>
            <div className={`w-full px-0 md:px-6 xl:px-28 pt-3 lg:pt-6 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="w-full h-fit px-3 md:px-4 py-2 md:py-4 gradient-border-nav">
                    <div className="flex justify-between items-center">
                        <h3 className="sm:text-3xl text-xl font-semibold gradient-text ml-3 text-nowrap">React/React Native Developer</h3>
                        <nav className="text-white relative">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                {showDropdown ? (
                                    <RxCrossCircled
                                        onClick={() => setShowDropdown(false)}
                                        className="text-[#eea75b] text-2xl"
                                    />
                                ) : (
                                    <CgMenuRound
                                        onClick={() => setShowDropdown(true)}
                                        className="text-[#eea75b] text-2xl"
                                    />
                                )}
                            </div>

                            {!isIntersecting && (
                                <ul className="hidden lg:flex items-center gap-3 lg:gap-4 xl:gap-6">
                                    {navItems}
                                </ul>
                            )}

                            <ul
                                tabIndex={0}
                                className={`lg:hidden ${showDropdown ? 'block' : 'hidden'} absolute right-0 space-y-3 bg-transparent backdrop-blur-md p-4 rounded-md shadow-sm`}
                            >
                                {navItems}
                            </ul>
                        </nav>

                        <div className="hidden lg:flex">
                            <Link to="contact" smooth={true} duration={600}>
                                <button className="btn btn-sm text-lg font-medium px-6 h-10 min-h-10 bg-white hover:bg-white shadow-none border-none bg-gradient-to-r from-[#fb7185] to-[#eea75b] text-white hover:bg-gradient-to-r hover:from-[#fb7185] hover:to-[#eea75b] rounded-3xl">Contact Me</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

Navbar.propTypes = {
    isIntersecting: PropTypes.bool.isRequired
};

export default Navbar;