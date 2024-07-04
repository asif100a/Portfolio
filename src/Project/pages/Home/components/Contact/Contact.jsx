import { useForm } from "react-hook-form";
import { CiLinkedin } from "react-icons/ci";
import { MdWhatsapp } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section id="contact" className="my-16 mx-32">
            <div className="container px-6 mx-auto">
                <div>
                    <h1 className="text-4xl font-semibold">Contact Me</h1>

                    <div className="mt-6">
                        <h1 className="mt-2 text-xl font-semibold text-gray-800 md:text-2xl dark:text-white">{"Let's"} Connect!</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-400 w-[36rem]">{"I'm"} always open to new opportunities and collaborations. Feel free to reach out to me through the form below or connect with me on social media.</p>
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Name</label>
                                    <input type="text" placeholder="Your name" {...register("exampleRequired", { required: true })} className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                <input type="email" placeholder="Email address" {...register("exampleRequired", { required: true })} className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>

                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                <textarea {...register("exampleRequired", { required: true })} className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>

                            <input type="submit" value={'Send message'} className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;