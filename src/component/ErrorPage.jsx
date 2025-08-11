import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const ErrorPage = () => {
    return (

        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://img.freepik.com/free-photo/horror-scene-with-eerie-warehouse_23-2150975186.jpg?t=st=1754889774~exp=1754893374~hmac=dc15dfdf01fb4ed4ef9ea456cdb35146025a10f62df5dcf706ed69ab76a24232&w=1060)",
            }}
        >
            {/* Dark overlay */}
            <div className="hero-overlay bg-opacity-10"></div>

            {/* Hero content */}
            <div className="hero-content text-neutral-content text-center">
                <motion.div
                    className="max-w-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.h1
                        className="mb-5 text-5xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        404
                    </motion.h1>
                    <motion.h1
                        className="mb-5 text-5xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Page Not Found
                    </motion.h1>

                    <motion.p
                        className="mb-5 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Sorry, the page you are looking for does not exist or has been moved.
                        Please check the URL or return to the homepage.
                    </motion.p>

                    <motion.div
                        className="flex gap-3 justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <Link to="/">
                            <button className="btn btn-primary">
                                Go Home
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ErrorPage;