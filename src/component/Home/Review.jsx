import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCarSide, FaCalendarCheck, FaUsers, FaStar, FaHandshake } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';


const timelineEvents = [
    {
        year: "2015",
        title: "Company Founded",
        description: "Drive Your Dreams was established with a mission to simplify car rentals.",
    },
    {
        year: "2017",
        title: "Launched Online Platform",
        description: "Introduced our easy-to-use website to book cars seamlessly.",
    },
    {
        year: "2019",
        title: "Expanded Fleet",
        description: "Increased our vehicle options to over 300 cars across multiple cities.",
    },
    {
        year: "2021",
        title: "Reached 1 Million Bookings",
        description: "A major milestone showing our trusted service.",
    },
    {
        year: "2023",
        title: "24/7 Customer Support",
        description: "Launched round-the-clock customer support for all users.",
    },
];

const Review = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <Fade>
            <section className="">
                <h1 className='text-center text-4xl font-bold mb-10'>Our Achievements</h1>
                <section
                    ref={ref}
                    className="p-6 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 rounded-3xl mb-24 max-w-6xl mx-auto"
                >
                    <div className="grid justify-center grid-cols-2 gap-6 text-center lg:grid-cols-3">
                        <div className="flex flex-col justify-center m-2">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">
                                {inView ? <CountUp end={1200} duration={2} separator="," /> : "0"}+
                            </p>
                            <p className="text-sm sm:text-base">Happy Customers</p>
                        </div>
                        <div className="flex flex-col justify-center m-2">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">
                                {inView ? <CountUp end={500} duration={2} separator="," /> : "0"}+
                            </p>
                            <p className="text-sm sm:text-base">Cars Available</p>
                        </div>
                        <div className="flex flex-col justify-center m-2">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">
                                {inView ? <CountUp end={10000} duration={2} separator="," /> : "0"}+
                            </p>
                            <p className="text-sm sm:text-base">Bookings Completed</p>
                        </div>
                        <div className="flex flex-col justify-center m-2">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">4.9/5</p>
                            <p className="text-sm sm:text-base">Average Customer Rating</p>
                        </div>
                        <div className="flex flex-col justify-center m-2">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">
                                {inView ? <CountUp end={8} duration={2} /> : "0"}
                            </p>
                            <p className="text-sm sm:text-base">Years in Business</p>
                        </div>
                        <div className="flex flex-col justify-center m-2">
                            <p className="text-4xl font-bold leading-none lg:text-6xl">24/7</p>
                            <p className="text-sm sm:text-base">Customer Support</p>
                        </div>
                    </div>
                </section>
            </section>
        </Fade>
    );
};

export default Review;
