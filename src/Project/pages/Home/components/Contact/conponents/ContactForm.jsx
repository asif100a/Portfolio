import PropTypes from 'prop-types';

const ContactForm = ({form, sendEmail}) => {
    return (
        <form ref={form} onSubmit={sendEmail} className="">
            <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-semibold">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-[#0d1117] border border-gray-200 rounded-none dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {/* {errors.name && <span className="text-orange-600">This field is required</span>} */}
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-semibold">Email address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-[#0d1117] border border-gray-200 rounded-none dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {/* {errors.email && <span className="text-orange-600">This field is required</span>} */}
                </div>
            </div>

            <div className="mt-4">
                <label className="block mb-2 text-sm font-semibold">Subject</label>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="block w-full px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-[#0d1117] border border-gray-200 rounded-none dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {/* {errors.subject && <span className="text-orange-600">This field is required</span>} */}
            </div>

            <div className="w-full mt-4">
                <label className="block mb-2 text-sm font-semibold">Message</label>
                <textarea
                    name="message"
                    placeholder="Message"
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-white placeholder-gray-400 bg-[#0d1117] border border-gray-200 rounded-none md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                ></textarea>
                {/* {errors.message && <span className="text-orange-600">This field is required</span>} */}
            </div>

            <input type="submit" value={'Send message'} className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-none hover:bg-green-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            />
        </form>
    );
};

ContactForm.propTypes = {
    form: PropTypes.any,
    sendEmail: PropTypes.func,
};

export default ContactForm;