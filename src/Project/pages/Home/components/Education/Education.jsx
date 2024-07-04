import webLearner from '../../../../../assets/web-developer.png';

const Education = () => {
    const educationData = [
        {
            institution: 'Programming Hero',
            degree: 'Web Development',
            startYear: '31 December, 2023',
            endYear: '22 July, 2024',
            description: 'Completed an intensive web development program focusing on modern front-end technologies. The curriculum included hands-on projects and real-world applications, covering HTML, CSS, JavaScript, React and some idea on Node.js, Express.js and MongoDB. Developed skills in building responsive and dynamic web applications, enhancing web applications, and working collaboratively in team environments.',
        }
        // Add more education entries as needed
    ];

    return (
        <section id='education' className="my-16 mx-32">
            <h1 className="text-4xl font-semibold">My Education</h1>
            <div className='flex items-center mt-12'>
                <div>
                    <img src={webLearner} alt="" />
                </div>
                <div>
                    {educationData.map((edu, index) => (
                        <div key={index} className="mt-12 space-y-2">
                            <h2 className='text-2xl'><span className='font-semibold'>Subject of Education:</span> {edu.degree}</h2>
                            <h3 className='text-lg'><span className='font-semibold'>Institution:</span> {edu.institution}</h3>
                            <p className='font-medium'>({edu.startYear} - {edu.endYear})</p>
                            <p className='w-[32rem] pt-1'><span className='font-bold'>About this education:</span> {edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
