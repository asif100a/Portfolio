import projectPhoto1 from '../../../../../assets/Intern-project-1.png';
import projectPhoto2 from '../../../../../assets/Intern-project-2a.jpg';
import projectPhoto3 from '../../../../../assets/Intern-project-2b.png';

const WorkExperience = () => {
    return (
        <section id="work-experience" className="my-16 xl:mx-32 md:mx-6 mx-3">
            <div>
                <h1 className="text-4xl font-semibold">Work Experience</h1>
            </div>

            <div className="lg:mt-12 mt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <p><b>Company Name:</b> NextVision (Internship)</p>
                    <p><b>Position Title:</b> Fullstack Engineer Intern</p>
                    <p><b>Duration:</b> 10th October, 2024 – Present</p>
                    <p><b>Location:</b> Remote/Bangladesh</p>
                </div>

                <h3 className="text-2xl font-semibold">Responsibilities:</h3>
                <ul className="mt-4 list-circle ml-12">
                    <li>Designed AI chatbot interface, and custom theme(upload from devices) for the chatbot page.</li>
                    <li>Made an academic web app and worked on both frontend and backend tasks.</li>
                    <li>Implemented payment system with SSLcommerz.</li>
                    <li>Developed organized, and maintained efficient, reusable code.</li>
                    <li>Troubleshooted and debugged issues in both frontend and backend environments.</li>
                </ul>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-6 mt-6'>
                <img
                    src={projectPhoto1}
                    alt="Intern-project-1"
                    className='w-full lg:w-72 h-auto lg:h-40 rounded-md'
                />
                <img
                    src={projectPhoto2}
                    alt="Intern-project-2a"
                    className='w-full lg:w-72 h-auto lg:h-40 rounded-md'
                />
                <img
                    src={projectPhoto3}
                    alt="Intern-project-2b"
                    className='w-full lg:w-72 h-auto lg:h-40 rounded-md'
                />
            </div>
        </section>
    );
};

export default WorkExperience;