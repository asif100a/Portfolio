import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import skill_1 from "../../../../../../../assets/skill-1.jpg";
import { useInView } from 'react-intersection-observer';

const Skill_1 = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({triggerOnce: true});

    // Implement inview functionality 
    React.useEffect(() => {
        if(inView) {
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
                variants={leftVarients}
                initial="hidden"
                animate={controls}
            >
                <h2 className="text-2xl font-semibold">Front-End Development</h2>
                <ul className="mt-4 list-circle ml-12">
                    <li><span className="font-bold">HTML5 & CSS3:</span> Expertise in building responsive, accessible, and well-structured web pages.</li>
                    <li><span className="font-bold">JavaScript (ES6+):</span> Proficient in modern JavaScript features and best practices.</li>
                    <li><span className="font-bold">React:</span> Skilled in developing dynamic single-page applications using React, including Hooks, Context API, and state management etc.</li>
                    <li><span className="font-bold">Responsive Design:</span> Strong ability to create responsive layouts using CSS Flexbox, Grid, and media queries.</li>
                </ul>
            </motion.div>

            <motion.div
                variants={rightVarients}
                initial="hidden"
                animate={controls}
            >
                <img src={skill_1} alt="Skill photo 1" className="w-full md:w-[520px] lg:w-[420px] h-[272px]" />
            </motion.div>
        </div>
    );
};

export default Skill_1;