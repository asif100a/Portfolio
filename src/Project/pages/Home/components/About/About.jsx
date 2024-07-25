import roundImg from "../../../../../assets/asif_round.png";
import web_developmentImg from "../../../../../assets/web-development.jpeg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const About = () => {
    return (
        <section id="about" className="my-16 lg:mx-32 md:mx-6 mx-3">
            <div>
                <h1 className="text-4xl font-semibold">About Me</h1>
            </div>
            <div className="my-6">
                <div className="flex lg:flex-row flex-col lg:gap-32 gap-6">
                    <div>
                        <img src={web_developmentImg} alt="" className="lg:pt-12 pt-2 w-[430px] h-[230px] lg:w-auto lg:h-auto" />
                    </div>
                    <div>
                        <div>
                            <img src={roundImg} alt="N.M. Asif Sheikh" className="h-40" />
                        </div>
                        <div className="my-6 space-y-3">
                            <h3 className="text-lg font-medium mb-2">Hi,</h3>
                            <p className="lg:w-[24rem]">{"I'm"} N.M. Asif Sheikh, a passionate front-end web developer with a love for crafting beautiful and functional websites. With a strong foundation in React, I bring user-centric designs to life.</p>
                        </div>

                        <div>
                            <Tabs>
                                <TabList>
                                    <Tab>Skills</Tab>
                                    <Tab>Interests</Tab>
                                    <Tab>Get in Touch</Tab>
                                </TabList>

                                <TabPanel>
                                    <ul className="list-disc ml-12">
                                        <li>HTML, CSS, JavaScript</li>
                                        <li>React</li>
                                        <li>Responsive Design</li>
                                        <li>Version Control (Git)</li>
                                        <li>UI/UX Principles</li>
                                    </ul>
                                </TabPanel>
                                <TabPanel>
                                    <div>
                                        <p className="w-full sm:w-[24rem]">I interest to write code and exploring new technologies.  When {"I'm"} not coding, I enjoy reading books, exploring youtube or google to improve my skills, and doing personal works. I believe that a balanced life fuels creativity and productivity.</p>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <p className="w-full sm:w-[24rem]">{"I'm"} always open to new opportunities and collaborations. Feel free to <a href="mailto:your-email@example.com" className="text-green-600 hover:underline">contact me</a> or connect with me on <a href="https://www.linkedin.com/your-profile" className="text-green-600 hover:underline">LinkedIn</a>.</p>
                                    <p className="mt-2 pb-3">{"Let's"} create something amazing together!</p>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
