import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Error = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to="/">
                            <button className="btn text-white bg-[#2b87ff] rounded-lg hover:bg-transparent hover:border-[#2b87ff] hover:text-[#2b87ff]">Back to Homepage</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;