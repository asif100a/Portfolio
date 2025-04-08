import projectPhoto1 from '../../../../../../assets/Intern-project-1.png';
import projectPhoto2 from '../../../../../../assets/Intern-project-2a.jpg';
import projectPhoto3 from '../../../../../../assets/Intern-project-2b.png';

const WorkExperience = () => {
    return (
        <section id="work-experience" className="my-16 xl:mx-32 md:mx-6 mx-3">
            <div className="w-fit px-6 py-2 border border-gray-400 rounded-lg shadow-lg">
                <h1 className="text-4xl font-semibold">💼 Work Experience</h1>
            </div>

            <div className="lg:mt-12 mt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <p><b>Company Name:</b> NextVision (Internship)</p>
                    <p><b>Position Title:</b> Fullstack Engineer Intern</p>
                    <p><b>Duration:</b> 10th October, 2024 – Present</p>
                    <p><b>Location:</b> Remote/Bangladesh</p>
                </div>

                <h3 className="text-2xl font-semibold">Responsibilities:</h3>
                <ul className="mt-4 w-full lg:w-2/3 xl:w-1/2 list-circle ml-12">
                    <li>An AI SaaS Dashboard featuring dynamic widgets, a custom theme system, and a RAG chatbot interface with file upload functionality.</li>
                    <li>A School Management System with role-based dashboards (Student, Teacher, Admin), academic payment integration using SSLCommerz, and attendance tracking.</li>
                    <li>A Health AI Platform where users can update profiles, book specialists, generate and print prescriptions, and chat with doctors.</li>
                    <li>A CV Automation System that includes filtering, previewing, downloading, and exporting CVs in PDF/XLSX formats.</li>
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