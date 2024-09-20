import { SlSettings } from "react-icons/sl";
import codingLaptop from "../../../../../assets/Coding-laptop.png";
import DownloadResume from "../downloadResume/DownloadResume";
import "./banner.css";
import { Link } from "react-scroll";

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
                <li key={i} className="hover:cursor-pointer gradient-link-border font-medium font-text-lora text-lg"><Link to={item?.path} smooth={true} duration={600}>{item?.title}</Link></li>
            ))
        }
    </>;
    const navItems2 = <>
        {
            items.slice(3).map((item, i) => (
                <li key={i} className="hover:cursor-pointer gradient-link-border font-medium font-text-lora text-lg"><Link to={item?.path} smooth={true} duration={600}>{item?.title}</Link></li>
            ))
        }
    </>;

    return (
        <section className="w-auto h-screen banner-background">
            <div className="w-auto h-full bg-black bg-opacity-40">
                {/* Icon and Welcome */}
                <div className="flex items-start justify-center gap-10 py-12 px-36">
                    <SlSettings className="w-20 h-20 text-[#fb7185] rounded-full rotate-animation" />
                    <div className="text-7xl font-bold flex justify-start gap-6">
                        <h1 className="gradient-text font-text-lora">Welcome to</h1>
                        <div>
                            <h1 className="jacques-francois-shadow gradient-text">N.M. Asif Sheikh</h1>
                            <p className="text-3xl font-semibold font-text-lora bg-gradient-to-r from-rose-400 to-orange-300 px-4 w-fit rounded-full mt-1">Front-End Developer & UI/UX Enthusiast</p>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center gap-6 ">
                    {/* Code Shower Laptop */}
                    <div className="md:block hidden hover:cursor-not-allowed relative w-fit h-fit">
                        <img src={codingLaptop} alt="N.M. Asif Sheikh" className="lg:h-80 md:h-56 w-auto" />

                        {/* gif */}
                        <div className="absolute top-[26px] lg:top-[38px] left-[57px] lg:left-[86px] flex">
                            <div className="bg-[#282828] w-[28px] lg:w-[42px] xl:w-[46px] h-[138px] lg:h-[195px]"></div>
                            <iframe
                                src="https://giphy.com/embed/xT9IgzoKnwFNmISR8I"
                                frameBorder="0"
                                className="giphy-embed w-[156px] lg:w-[220px] h-[137.5px] lg:h-[195px]"
                                allowFullScreen
                            ></iframe>
                            <div className="bg-[#282828] w-[28px] lg:w-[42px] xl:w-[46px] h-[138px] lg:h-[195px]"></div>
                        </div>
                    </div>

                    {/* Developer Showcase */}
                    <div className="text-white px-3 flex flex-col gap-6 items-center">
                        <ul className="flex items-center gap-6">
                            {navItems1}
                        </ul>

                        <ul className="flex items-center gap-6">
                            {navItems2}
                        </ul>

                        <div className="lg:mt-10 md:mt-6 mt-3">
                            <DownloadResume />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;