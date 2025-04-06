import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import skill_2 from "../../../../../../assets/skill-2.jpeg";
import { useInView } from 'react-intersection-observer';

const Skill_2 = () => {
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
        <div ref={ref} className="flex flex-col sm:flex-row gap-3 lg:gap-12 overflow-hidden">
            <motion.div
                initial={'hidden'}
                animate={controls}
                variants={leftVarients}
            >
                <img src={skill_2} alt="Skill photo 2" className="w-full md:w-[520px] lg:w-[420px] h-[272px]" />
            </motion.div>

            <motion.div
                initial='hidden'
                animate={controls}
                variants={rightVarients}
            >
                <h2 className="text-2xl font-semibold">UI/UX Design</h2>
                <ul className="mt-4 list-circle ml-12">
                    <li><span className="font-bold">User-Centric Design:</span> Focus on creating intuitive and user-friendly interfaces.</li>
                    <li><span className="font-bold">Wireframing & Prototyping:</span> Experience with tools like Figma and Adobe XD for designing and prototyping user interfaces.</li>
                    <li><span className="font-bold">Accessibility:</span> Knowledge of web accessibility standards and practices to ensure inclusive user experiences.</li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Skill_2;