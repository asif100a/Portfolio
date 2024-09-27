import { SlSettings } from "react-icons/sl";
import codingLaptop from "../../../../../assets/Coding-laptop.png";
import DownloadResume from "../downloadResume/DownloadResume";
import "./banner.css";
import { Link } from "react-scroll";
import Marquee from "./component/Marquee";

const Banner = () => {
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

    const navItems1 = <>
        {
            items.slice(0, 3).map((item, i) => (
                <li key={i} className="hover:cursor-pointer gradient-link-border font-medium font-text-lora lg:text-base xl:text-lg"><Link to={item?.path} smooth={true} duration={600}>{item?.title}</Link></li>
            ))
        }
    </>;
    const navItems2 = <>
        {
            items.slice(3).map((item, i) => (
                <li key={i} className="hover:cursor-pointer gradient-link-border font-medium font-text-lora lg:text-base xl:text-lg"><Link to={item?.path} smooth={true} duration={600}>{item?.title}</Link></li>
            ))
        }
    </>;

    return (
        <section className="w-auto h-full banner-background">
            <div className="w-auto h-full bg-black bg-opacity-40">
                {/* Icon and Welcome */}
                <div className="flex items-start justify-center gap-6 lg:gap-10 py-0 pt-8 lg:py-12 px-3 md:px-6 xl:px-32">
                    <SlSettings className="w-10 md:w-14 lg:w-14 xl:w-20 h-10 md:h-14 lg:h-14 xl:h-20 text-[#fb7185] rounded-full rotate-animation" />
                    <div className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-bold md:flex md:flex-row justify-start gap-6">
                        <h1 className="gradient-text font-text-lora">Welcome to</h1>
                        <div className="hidden lg:block">
                            <h1 className="jacques-francois-shadow gradient-text">N.M. Asif Sheikh</h1>
                            <p className="text-sm md:text-base lg:text-xl xl:text-3xl font-semibold font-text-lora bg-gradient-to-r from-rose-400 to-orange-300 px-4 py-1 w-fit rounded-full mt-1">Front-End Developer & UI/UX Enthusiast</p>
                        </div>
                    </div>
                </div>
                {/* Only for small devices */}
                <div className="lg:hidden px-3 mt-3 flex flex-col justify-center items-center space-y-1 mb-6">
                    <h1 className="jacques-francois-shadow gradient-text text-3xl md:text-5xl">N.M. Asif Sheikh</h1>
                    <p className="text-sm md:text-xl font-semibold font-text-lora bg-gradient-to-r from-rose-400 to-orange-300 px-2 md:px-4 py-1 w-fit rounded-full mt-1">Front-End Developer & UI/UX Enthusiast</p>
                </div>

                <div className="flex md:flex-row flex-col justify-center items-center gap-6 ">
                    {/* Code Shower Laptop */}
                    <div className="block hover:cursor-not-allowed relative w-fit h-fit">
                        <img src={codingLaptop} alt="N.M. Asif Sheikh" className="h-56 md:h-56 xl:h-80 w-[318px] md:w-auto mx-auto" />

                        {/* gif */}
                        <div className="absolute top-[26px] md:top-[26px] xl:top-[38px] left-[58px] md:left-[60px] xl:left-[86px] flex gap-0">
                            <div className="bg-[#282828] w-[26px] md:w-[31px] xl:w-[46px] h-[137px] md:h-[137px] xl:h-[195px]"></div>
                            <iframe
                                src="https://giphy.com/embed/xT9IgzoKnwFNmISR8I"
                                frameBorder="0"
                                className="giphy-embed w-[156px] md:w-[156px] xl:w-[220px] h-[137px] md:h-[137px] xl:h-[195px]"
                                allowFullScreen
                            ></iframe>
                            <div className="bg-[#282828] w-[26px] md:w-[31px] xl:w-[46px] h-[137px] md:h-[137px] xl:h-[195px]"></div>
                        </div>
                    </div>

                    {/* Developer Showcase */}
                    <div className="hidden text-white px-3 lg:flex lg:flex-col gap-3 lg:gap-4 xl:gap-6 items-center">
                        <ul className="flex items-center gap-3 lg:gap-4 xl:gap-6">
                            {navItems1}
                        </ul>

                        <ul className="flex items-center gap-3 lg:gap-4 xl:gap-6">
                            {navItems2}
                        </ul>

                        <div className="lg:mt-6 xl:mt-8 md:mt-4 mt-3">
                            <DownloadResume />
                        </div>
                    </div>
                </div>
                {/* Technologies Logo */}
                <div className="px-3 md:px-6 xl:px-32">
                    <Marquee />
                </div>
            </div>
        </section>
    );
};

export default Banner;