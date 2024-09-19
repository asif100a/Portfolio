import { SlSettings } from "react-icons/sl";
import codingLaptop from "../../../../../assets/Coding-laptop.png";
import DownloadResume from "../downloadResume/DownloadResume";
import "./banner.css";

const Banner = () => {
    return (
        <div className="w-auto h-screen banner-background">
            <div className="w-auto h-full bg-black bg-opacity-40">
                <div className="py-12 px-36 flex items-center justify- gap-16">
                    <SlSettings className="w-20 h-20 text-[#c966f4] rotate-animation" />
                    <h1 className="text-6xl font-semibold space-x-6">
                        <span>Welcome to</span> <span>N.M. Asif Sheikh</span>
                    </h1>
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center gap-6 ">
                    {/* Code Shower Laptop */}
                    <div className="md:block hidden mt-3 hover:cursor-not-allowed relative w-fit h-fit">
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
                    <div className="text-white px-3">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold mb-3">N.M. Asif Sheikh</h1>
                        <h2 className="lg:text-3xl md:text-2xl font-semibold">Front-End Developer & UI/UX Enthusiast</h2>

                        {/*  */}

                        <div className="lg:mt-10 md:mt-5 mt-3">
                            <DownloadResume />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;