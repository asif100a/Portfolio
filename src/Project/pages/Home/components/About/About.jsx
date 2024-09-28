import { useState } from "react";
import roundImg from "../../../../../assets/asif_round.png";
import web_developmentImg from "../../../../../assets/web-development.jpeg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import './about.css';

const About = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section id="about" className="my-16 xl:mx-32 md:mx-6 mx-3">
            <div className="">
                <div>
                    <h1 className="text-4xl font-semibold">About Me</h1>
                </div>
                <div className="my-6">
                    <div className="flex lg:flex-row flex-col lg:gap-12 gap-6">
                        {/* Development Image */}
                        <div>
                            <img src={web_developmentImg} alt="" className="lg:pt-12 pt-2 w-[430px] h-[230px] lg:w-auto lg:h-auto" />
                        </div>
                        {/* About Me content */}
                        <div>
                            <div>
                                {/* My image */}
                                <img src={roundImg} alt="N.M. Asif Sheikh" className="h-40" />
                            </div>
                            <div className="my-6 space-y-3">
                                <h4 className="text-xl font-medium mb-3">Hi! there,</h4>
                                <p className="xl:w-[42rem] lg:w-[32rem] md:w-full w-auto">{"I'm"} N.M. Asif Sheikh, is a Junior Software Developer skilled in <i>React</i>, <i>Next.js</i>, <i>JavaScript</i>, <i>TypeScript</i>, <i>HTML</i>, <i>CSS</i>, and <i>TailwindCSS</i>, with hands-on experience in back-end technologies like <i>Node.js</i>, <i>Express.js</i>, and <i>MongoDB</i>. I craft dynamic, user-centric websites with stunning visuals and seamless functionality. Driven by a passion for delivering exceptional user experiences, I bring ideas to life by transforming them into polished, interactive digital solutions.</p>
                            </div>

                            <div>
                                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} selectedTabClassName="custom-style">
                                    <TabList className={'flex gap-6 hover:cursor-pointer pb-3'}>
                                        <Tab className={'border-2 border-transparent px-3 py-1'}>Skills</Tab>
                                        <Tab className={'border-2 border-transparent px-3 py-1'}>Interests</Tab>
                                        <Tab className={'border-2 border-transparent px-3 py-1'}>Get in Touch</Tab>
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
                                        <p className="w-full sm:w-[24rem]">{"I'm"} always open to new opportunities and collaborations. Feel free to <a href="mailto:your-email@example.com" className="text-[#eea75b] hover:underline">contact me</a> or connect with me on <a href="https://www.linkedin.com/your-profile" className="text-[#eea75b] hover:underline">LinkedIn</a>.</p>
                                        <p className="mt-2 pb-3">{"Let's"} create something amazing together!</p>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
