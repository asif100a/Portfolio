import { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { MdWhatsapp } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    // const [formData, setFormData] = useState({
    //     'name': '',
    //     'email': '',
    //     'subject': '',
    //     'message': ''
    // });

    const handleNameChange = e => {
        // setFormData({
        //     ...formData,
        //     [e.target.name]: e.target.value
        // });
        console.log(e.target.value);
        setName(e.target.value);
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    };
    
    const handleSubjectChange = e => {
        console.log(e.target.value);
        setSubject(e.target.value);
    };

    const handleMessageChange = e => {
        console.log(e.target.value);
        setMessage(e.target.value);
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(import.meta.env.VITE_EMAIL_SEND_PRIVATE_KEY)
        
        // Service id, template id, user id
        const service_id = `${import.meta.env.VITE_EMAIL_SEND_SERVICE_ID}`;
        const template_id = `${import.meta.env.VITE_EMAIL_SEND_TEMPLATE_ID}`;
        const public_key = `${import.meta.env.VITE_EMAIL_SEND_PUBLIC_KEY}`;

        const template = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };
        console.log(template);

        emailjs.send(service_id, template_id, template, public_key)
            .then(() => {
                toast.success('Message Sent Successfully!');

                // Reset the form
                // setFormData({
                //     'name': '',
                //     'email': '',
                //     'subject': '',
                //     'message': ''
                // });
            }).catch(error => {
                toast.error('Failed to send the message, please try again.');
                console.error('Error', error.message);
            });
    };

    return (
        <section id="contact" className="mt-16 pb-12 lg:mx-32 md:mx-6 mx-3">
            <div className="container mx-auto">
                <div>
                    <h1 className="text-4xl font-semibold">Contact Me</h1>

                    <div className="mt-6">
                        <h1 className="mt-2 text-xl font-semibold text-gray-800 md:text-2xl dark:text-white">{"Let's"} Connect!</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-400 lg:w-[36rem] w-auto">{"I'm"} always open to new opportunities and collaborations. Feel free to reach out to me through the form below or connect with me on social media.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <div>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Contact me vai email.</p>
                            <Link to="https://mail.google.com/mail/u/1/?ogbl#inbox" target="_blank" className="mt-2 text-sm text-blue-500 dark:text-blue-400">nmasifsheikh2003@gmail.com</Link>
                        </div>

                        <div>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                <CiLinkedin className="w-8 h-8 text-blue-500" />
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Linked in</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Contact and explore my linked in profile.</p>
                            <Link to="https://www.linkedin.com/in/n-m-asif-sheikh" target="_blank" className="mt-2 text-sm text-blue-500 dark:text-blue-400">Linked in profile</Link>
                        </div>

                        <div>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                <VscGithub className="w-7 h-7 text-purple-500" />
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Github</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Check my github account and contact me.</p>
                            <Link to="https://github.com/asif100a" target="_blank" className="mt-2 text-sm text-blue-500 dark:text-blue-400">Github account</Link>
                        </div>

                        <div>
                            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                <MdWhatsapp className="w-8 h-8 text-green-500" />
                            </span>

                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">{"What's"} app</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Message me or call me vai {"What's"} app or call directly.</p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+88 01608-898811</p>
                        </div>
                    </div>

                    <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                        <form onSubmit={handleSubmit}>
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={name}
                                        onChange={handleNameChange}
                                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                    {/* {errors.name && <span className="text-orange-600">This field is required</span>} */}
                                </div>
                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                    {/* {errors.email && <span className="text-orange-600">This field is required</span>} */}
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={subject}
                                    onChange={handleSubjectChange}
                                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                {/* {errors.subject && <span className="text-orange-600">This field is required</span>} */}
                            </div>

                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={message}
                                    onChange={handleMessageChange}
                                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                ></textarea>
                                {/* {errors.message && <span className="text-orange-600">This field is required</span>} */}
                            </div>

                            <input type="submit" value={'Send message'} className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <Toaster />
        </section>
    );
};

export default Contact;