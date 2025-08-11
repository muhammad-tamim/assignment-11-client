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
            <section className="relative py-12 mb-20 max-w-[1920px] mx-auto overflow-hidden">
                {/* Video background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ zIndex: -2 }}
                    src="https://www.toyota.com/content/dam/toyota/homepage/tdr-marquee/2025/video/CAM_MY25_LCH_WelcomeMat_TCOM_Desktop_ENG_10_16x9_SSTY8794000H.mp4"
                    type="video/mp4"
                />

                {/* Dark overlay for better text visibility */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.80)',
                        zIndex: -1
                    }}
                ></div>

                {/* Content container */}
                <div
                    ref={ref}
                    className="relative bg-transparent text-white py-12 px-5 max-w-6xl mx-auto rounded-3xl"
                >
                    <h1 className="text-center text-4xl font-bold mb-10">Our Achievements</h1>

                    <section className="p-6 rounded-3xl">
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