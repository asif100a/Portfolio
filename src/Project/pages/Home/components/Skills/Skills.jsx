const Skills = () => {
    return (
        <section id="skills" className="my-16 lg:mx-32 md:mx-6 mx-3">
            <div>
                <h1 className="text-4xl font-semibold">My Skills</h1>
            </div>

            <div className="lg:mt-16 mt-6 space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold">Front-End Development</h2>
                    <ul className="mt-4">
                        <li>HTML5 & CSS3: Expertise in building responsive, accessible, and well-structured web pages.</li>
                        <li>JavaScript (ES6+): Proficient in modern JavaScript features and best practices.</li>
                        <li>React: Skilled in developing dynamic single-page applications using React, including Hooks, Context API, and state management etc.</li>
                        <li>Responsive Design: Strong ability to create responsive layouts using CSS Flexbox, Grid, and media queries.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">UI/UX Design</h2>
                    <ul className="mt-4">
                        <li>User-Centric Design: Focus on creating intuitive and user-friendly interfaces.</li>
                        <li>Wireframing & Prototyping: Experience with tools like Figma and Adobe XD for designing and prototyping user interfaces.</li>
                        <li>Accessibility: Knowledge of web accessibility standards and practices to ensure inclusive user experiences.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">Tools & Technologies</h2>
                    <ul className="mt-4">
                        <li>Version Control: Proficient in Git and GitHub for version control and collaborative development.</li>
                        <li>Build Tools: Experience with Webpack, Babel, and npm/Yarn for optimizing and managing project dependencies.</li>
                        <li>Testing: Familiarity with testing frameworks like Jest and React Testing Library for ensuring code quality and reliability.</li>
                        <li>RESTful APIs: Ability to integrate and interact with RESTful APIs to fetch and manipulate data.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;