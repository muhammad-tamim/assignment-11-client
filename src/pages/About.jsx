import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCarSide, FaCalendarCheck, FaUsers, FaStar, FaHandshake } from 'react-icons/fa';


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

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <section className=" max-w-[1920px] mx-auto min-h-screen py-16 px-6 sm:px-12 lg:px-24 pt-40">
            {/* Page header */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
                    About Rapid Ride
                </h1>
                <p className="text-lg  max-w-3xl mx-auto leading-relaxed">
                    Empowering your journeys with reliable vehicles, seamless booking, and
                    exceptional customer service. Wherever life takes you, drive your dreams
                    with confidence.
                </p>
            </div>

            {/* Why Choose Us */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 mb-24">
                <img
                    src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
                    alt="Person picking up a rental car at dealership"
                    className="rounded-2xl shadow-xl w-full md:w-1/2 object-cover"
                    loading="lazy"
                    decoding="async"
                    role="img"
                    aria-label="Person picking up a rental car at dealership"
                />

                <article className="md:w-1/2 space-y-6 text-center">
                    <h2 className="text-4xl font-bold">Why Choose Us?</h2>
                    <p className=" leading-relaxed">
                        We combine modern technology with a personal touch to make your car
                        rental experience seamless and enjoyable. Our easy-to-use platform
                        allows you to browse, book, and manage your rentals with just a few clicks.
                    </p>
                    <p className=" leading-relaxed">
                        Safety and quality are our top priorities. Each vehicle undergoes regular
                        maintenance and thorough cleaning to ensure your peace of mind.
                    </p>
                </article>
            </div>

            <section className=" mb-24 px-4">
                <h2 className="text-4xl font-bold text-center mb-10">Our Company Timeline</h2>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        contentStyle={{ background: 'bg-gray-50', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                        contentArrowStyle={{ borderRight: '7px solid #e5e7eb' }} // gray-50 hex
                        date="2019 - Present"
                        iconStyle={{ background: 'rgb(67, 56, 202)', color: '#fff' }}
                        icon={<FaCarSide />}
                    >
                        <h3 className="vertical-timeline-element-title text-black">Company Founded</h3>
                        <h4 className="vertical-timeline-element-subtitle text-black">Global</h4>
                        <p className="text-black">Started Drive Your Dreams with a vision to simplify car rentals worldwide.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{ background: '#f9fafb', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} // bg-gray-50 hex
                        contentArrowStyle={{ borderRight: '7px solid #e5e7eb' }}
                        date="2021"
                        iconStyle={{ background: 'rgb(67, 56, 202)', color: '#fff' }}
                        icon={<FaCalendarCheck />}
                    >
                        <h3 className="vertical-timeline-element-title text-black">Launched Online Booking Platform</h3>
                        <h4 className="vertical-timeline-element-subtitle text-black">Worldwide</h4>
                        <p className="text-black">Introduced an intuitive website for seamless car rental bookings anytime, anywhere.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{ background: '#f9fafb', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                        contentArrowStyle={{ borderRight: '7px solid #e5e7eb' }}
                        date="2022"
                        iconStyle={{ background: 'rgb(67, 56, 202)', color: '#fff' }}
                        icon={<FaUsers />}
                    >
                        <h3 className="vertical-timeline-element-title text-black">Surpassed 1,000 Happy Customers</h3>
                        <h4 className="vertical-timeline-element-subtitle text-black">Customer Milestone</h4>
                        <p className="text-black">Gained loyal customers by prioritizing safety, quality, and exceptional service.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{ background: '#f9fafb', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                        contentArrowStyle={{ borderRight: '7px solid #e5e7eb' }}
                        date="2024"
                        iconStyle={{ background: 'rgb(67, 56, 202)', color: '#fff' }}
                        icon={<FaHandshake />}
                    >
                        <h3 className="vertical-timeline-element-title text-black">Partnered with Leading Car Dealers</h3>
                        <h4 className="vertical-timeline-element-subtitle text-black">Partnerships</h4>
                        <p className="text-black">Expanded our fleet and improved service through key partnerships nationwide.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        contentStyle={{ background: '#f9fafb', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                        contentArrowStyle={{ borderRight: '7px solid #e5e7eb' }} // yellow-400 hex for arrow border
                        date="2025"
                        iconStyle={{ background: 'rgb(67, 56, 202)', color: '#fff' }}
                        icon={<FaStar />}
                    >
                        <h3 className="vertical-timeline-element-title text-black">Awarded Best Customer Service</h3>
                        <h4 className="vertical-timeline-element-subtitle text-black">Industry Recognition</h4>
                        <p className="text-black">Recognized for 24/7 support and outstanding customer satisfaction ratings.</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </section>



            {/* Call to Action */}
            <div className="text-center">
                <a href="/AvailableCars" className="btn btn-primary lg:btn-xl">
                    Browse Available Cars
                </a>
            </div>
        </section>
    );
};

export default About;
