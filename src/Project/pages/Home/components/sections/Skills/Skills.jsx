import Skill_1 from "./components/Skill_1";
import Skill_2 from "./components/Skill_2";
import Skill_3 from "./components/Skill_3";

const Skills = () => {
    return (
        <section id="skills" className="my-16 xl:mx-32 md:mx-6 mx-3">
            <div className="w-fit px-6 py-2 border border-gray-400 rounded-lg shadow-lg">
                <h1 className="text-4xl font-semibold">🧠 My Skills</h1>
            </div>

            <div className="lg:mt-16 mt-6 space-y-6">
                <Skill_1 />
                <Skill_2 />
                <Skill_3 />               
            </div>
        </section>
    );
};

export default Skills;