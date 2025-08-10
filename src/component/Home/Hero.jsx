import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div
            className="hero min-h-screen my-5"
            style={{
                backgroundImage:
                    "url(https://www.bmwmotorcyclesoftemecula.com/wp-content/uploads/2023/04/BMW-banner-image.jpeg)",
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
                        Drive Your Dreams Today!
                    </motion.h1>

                    <motion.p
                        className="mb-5 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Affordable, reliable, and ready when you are.
                        Choose from our wide range of premium cars
                        and hit the road in style.
                    </motion.p>

                    <motion.div
                        className="flex gap-3 justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <Link to="/AvailableCars">
                            <button className="btn btn-primary">
                                View Available Cars
                            </button>
                        </Link>
                        <Link to="/about">
                            <button className="btn btn-outline btn-primary text-white">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
