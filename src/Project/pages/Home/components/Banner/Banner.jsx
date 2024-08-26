import asifImg from "../../../../../assets/asif.png";
import DownloadResume from "../downloadResume/DownloadResume";
import "./banner.css";

const Banner = () => {
    return (
        <div className="w-auto h-screen banner-background">
            <div className="w-auto h-screen bg-black bg-opacity-40">
                <div className="flex md:flex-row flex-col justify-around items-center lg:pt-32 pt-10">
                    <div className="md:block hidden">
                        <img src={asifImg} alt="N.M. Asif Sheikh" className="lg:h-80 md:h-48 w-auto img-gradient-border" />
                    </div>

                    <div className="text-white px-3">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold mb-3">N.M. Asif Sheikh</h1>
                        <h2 className="lg:text-3xl md:text-2xl font-semibold">Front-End Developer & UI/UX Enthusiast</h2>

                        <div className="lg:mt-10 md:mt-5 mt-6">
                            <h4 className="text-xl font-medium mb-3">Hi! there,</h4>
                            <p className="lg:w-[48rem] md:w-[32rem] w-auto">I am N.M. Asif Sheikh, <i>Front-End Developer</i> with experience in <i>HTML</i>, <i>CSS</i>, <i>JavaScript,</i> and frameworks like <i>React</i>, and <i>TailwindCSS</i> to create the best user interface design, flexible, version control system management, and user experience-based website. I am passionate about creating visually stunning and highly functional websites. I transform ideas into seamless digital experiences.</p>
                        </div>

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