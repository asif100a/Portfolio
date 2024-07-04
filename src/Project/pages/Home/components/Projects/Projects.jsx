const Projects = () => {
    return (
        <section className="my-16 mx-32">
            <div>
                <h1 className="text-4xl font-semibold">My Projects</h1>
            </div>
        </section>
    );
};

const projects = [
    {
      title: 'Blood Donor Unity',
      description: 'A platform designed to connect blood donors with those in need of blood, facilitating easier and quicker donations.',
      technologies: 'React, Redux, Firebase, Material-UI',
      features: [
        'User authentication and profile management',
        'Real-time search for blood donors',
        'Interactive maps for locating nearby donors',
        'Notifications and alerts for urgent requests',
      ],
      showImage: `${''}`,
      liveDemo: 'https://example.com',
      sourceCode: 'https://github.com/yourusername/blood-donor-unity',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website showcasing my skills, projects, and experience as a front-end web developer.',
      technologies: 'HTML, CSS, JavaScript, React',
      features: [
        'Responsive design',
        'Interactive projects section',
        'Contact form with email integration',
        'Smooth scrolling and animations',
      ],
      showImage: `${''}`,
      liveDemo: 'https://example.com',
      sourceCode: 'https://github.com/yourusername/portfolio-website',
    },
    {
      title: 'Task Manager App',
      description: 'A task management application to help users organize their daily tasks and boost productivity.',
      technologies: 'React, Node.js, Express, MongoDB',
      features: [
        'User authentication and profile management',
        'Create, edit, and delete tasks',
        'Task categorization and prioritization',
        'Deadline reminders and notifications',
      ],
      showImage: `${''}`,
      liveDemo: 'https://example.com',
      sourceCode: 'https://github.com/yourusername/task-manager-app',
    },
  ];

export default Projects;