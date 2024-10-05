import { useRef } from "react";
import { CiLinkedin } from "react-icons/ci";
import { MdWhatsapp } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import './contact.css';
import ContactForm from "./conponents/ContactForm";

const Contact = () => {
    const form = useRef();

    // Send the message
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_gsyvmua', 'template_3shoy0h', form.current, {
            publicKey: 'M8ZdPyX2WzkQORfB8',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              toast.success('Message has sent successfully');
            },
            (error) => {
              console.log('FAILED...', error.text);
              toast.error('Failed to sent message');
            },
          );
      };

    return (
        <section id="contact" className="mt-16 pb-12 xl:mx-32 md:mx-6 mx-3">
            <div className="container mx-auto">
                <div>
                    <h1 className="text-4xl font-semibold">Contact Me</h1>

                    <div className="mt-6">
                        <h1 className="mt-2 text-xl font-semibold md:text-2xl">{"Let's"} Connect!</h1>

                        <p className="mt-3 lg:w-[36rem] w-auto">{"I'm"} always open to new opportunities and collaborations. Feel free to reach out to me through the form below or connect with me on social media.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <div>
                            <span className="inline-block p-2 rounded-full gradient-background">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </span>

                            <h2 className="mt-4 text-base font-medium">Email</h2>
                            <p className="mt-2 text-sm">Contact me vai email.</p>
                            <Link to="https://mail.google.com/mail/u/1/?ogbl#inbox" target="_blank" className="mt-2 text-sm text-[#eea75b]">nmasifsheikh2003@gmail.com</Link>
                        </div>

                        <div>
                            <span className="inline-block p-2 rounded-full gradient-background dark:bg-gray-800">
                                <CiLinkedin className="w-8 h-8 text-white" />
                            </span>

                            <h2 className="mt-4 text-base font-medium">Linked in</h2>
                            <p className="mt-2 text-sm">Contact and explore my linked in profile.</p>
                            <Link to="https://www.linkedin.com/in/n-m-asif-sheikh" target="_blank" className="mt-2 text-sm text-[#eea75b]">Linked in profile</Link>
                        </div>

                        <div>
                            <span className="inline-block p-2 text-[#eea75b] rounded-full gradient-background dark:bg-gray-800">
                                <VscGithub className="w-7 h-7 text-white" />
                            </span>

                            <h2 className="mt-4 text-base font-medium">Github</h2>
                            <p className="mt-2 text-sm">Check my github account and contact me.</p>
                            <Link to="https://github.com/asif100a" target="_blank" className="mt-2 text-sm text-[#eea75b]">Github account</Link>
                        </div>

                        <div>
                            <span className="inline-block p-2 text-[#eea75b] rounded-full gradient-background dark:bg-gray-800">
                                <MdWhatsapp className="w-8 h-8 text-white" />
                            </span>

                            <h2 className="mt-4 text-base font-medium">{"What's"} app</h2>
                            <p className="mt-2 text-sm">Direct call or {"What's"} app:</p>
                            <span className="mt-2 text-sm text-[#eea75b]">+88 01608-898811</span>
                        </div>
                    </div>

                    <div className="p-4 rounded-lg bg-[#0d1117] text-white img-gradient-border md:p-8">
                        <ContactForm
                            form={form}
                            sendEmail={sendEmail}
                        />
                    </div>
                </div>
            </div>
            <Toaster />
        </section>
    );
};

export default Contact;