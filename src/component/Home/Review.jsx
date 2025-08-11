import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";

const Review = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <Fade>
            <section
                className="bg-cover bg-center bg-no-repeat py-12 mb-20 max-w-[1920px] mx-auto"
                style={{
                    backgroundImage:
                        "url('https://lightingequipmentsales.com/wp-content/uploads/2017/12/LED-Street-Light-740x416.jpg')",
                }}
            >
                {/* Dark overlay to improve text contrast */}
                <div className="bg-black/60 py-12 px-5 rounded-3xl max-w-6xl mx-auto text-white">
                    <h1 className='text-center text-4xl font-bold mb-10'>Our Achievements</h1>

                    <section ref={ref} className="p-6 rounded-3xl">
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
                </div>
            </section>
        </Fade>
    );
};

export default Review;
