import asifImg from "../../../../../assets/asif.png";
import DownloadResume from "../downloadResume/DownloadResume";
import "./banner.css";

const Banner = () => {
    return (
        <div className="w-auto h-screen banner-background">
            <div className="w-auto h-screen bg-black bg-opacity-40">
                <div className="flex justify-around items-center pt-32">
                    <div className="">
                        <img src={asifImg} alt="N.M. Asif Sheikh" className="h-80 w-auto img-gradient-border" />
                    </div>

                    <div className="text-white">
                        <h1 className="text-5xl font-semibold mb-3">N.M. Asif Sheikh</h1>
                        <h2 className="text-3xl font-semibold">Front-End Developer & UI/UX Enthusiast</h2>

                        <div className="mt-10">
                            <h4 className="text-xl font-medium mb-3">Hi, there</h4>
                            <p className="w-[48rem]">I am N.M. Asif Sheikh, <i>Front-End Developer</i> with the experience of <i>HTML</i>, <i>CSS</i>, <i>JavaScript</i> and frameworks like <i>React</i>, <i>TailwindCSS</i> to create the best user inteface design, flexible, version control system management and user experience based website. I am passionate about creating visually stunning and highly functional websites. I transform ideas into seamless digital experiences.</p>
                        </div>

                        <div className="mt-10">
                            <DownloadResume />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;