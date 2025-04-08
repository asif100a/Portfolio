import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import skill_3 from "../../../../../../../assets/skill-3.jpeg";
import { useInView } from 'react-intersection-observer';

const Skill_3 = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    // Implement inview functionality 
    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    // Left varients for the motion
    const leftVarients = {
        hidden: {
            x: '-100vw'
        },
        visible: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 20
            }
        }
    };

    // Right varients for the motion
    const rightVarients = {
        hidden: {
            x: '100vw'
        },
        visible: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 20
            }
        }
    };

    return (
        <div ref={ref} className="flex flex-col-reverse sm:flex-row gap-3 lg:gap-12 overflow-hidden">
            <motion.div
                initial='hidden'
                animate={controls}
                variants={leftVarients}
            >
                <h2 className="text-2xl font-semibold">Tools & Technologies</h2>
                <ul className="mt-4 list-circle ml-12">
                    <li><span className="font-bold">Version Control:</span> Proficient in Git and GitHub for version control and collaborative development.</li>
                    <li><span className="font-bold">Build Tools:</span> Experience with Webpack, Babel, and npm/Yarn for optimizing and managing project dependencies.</li>
                    <li><span className="font-bold">Testing:</span> Familiarity with testing frameworks like Jest and React Testing Library for ensuring code quality and reliability.</li>
                    <li><span className="font-bold">RESTful APIs:</span> Ability to integrate and interact with RESTful APIs to fetch and manipulate data.</li>
                </ul>
            </motion.div>

            <motion.div
                initial='hidden'
                animate={controls}
                variants={rightVarients}
            >
                <img src={skill_3} alt="Skill photo 3" className="w-full md:w-[520px] lg:w-[420px] h-[272px]" />
            </motion.div>
        </div>
    );
};

export default Skill_3;