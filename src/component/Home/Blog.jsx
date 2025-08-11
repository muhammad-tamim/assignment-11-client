import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Blog = () => {
    return (
        <Fade>
            <section className=" ">
                <h1 className='text-center text-4xl font-bold mb-10'>Recent Blogs</h1>
                <div className="container max-w-[1920px] p-6 mx-auto space-y-6 sm:space-y-12">
                    {/* Featured Blog Post */}
                    {/* Featured Blog Post with YouTube iframe */}
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
                    >
                        {/* YouTube Video Embed */}
                        <div className="w-full h-64 sm:h-96 lg:col-span-7">
                            <iframe
                                className="w-full h-full rounded"
                                src="https://www.youtube.com/embed/e9IjCGB1WnQ?si=chUXxJ1hmEmbHXUF"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Text Content */}
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                                How to Choose the Perfect Car for Your Next Trip
                            </h3>
                            <span className="text-xs dark:text-gray-600">August 5, 2025</span>
                            <p>
                                Planning a vacation or a business trip? Here’s a complete guide to selecting the right rental
                                car that matches your needs, budget, and style — now with expert video tips!
                            </p>
                        </div>
                    </a>

                    {/* Grid Blog Posts */}
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <a
                            target='_blank'
                            rel="noopener noreferrer"
                            href="https://monzaexotics.com/top-5-sports-cars-you-can-rent-for-an-unforgettable-drive/"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                        >
                            <img
                                role="presentation"
                                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                src="https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/performance/gt/features/3_2/GT_TertreRouge_P15_219.jpg/jcr:content/renditions/cq5dam.web.1440.1440.jpeg"
                                alt="Sports car"
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    Top 5 Sports Cars You Can Rent This Summer
                                </h3>
                                <span className="text-xs dark:text-gray-600">July 28, 2025</span>
                                <p>
                                    From sleek convertibles to high-performance coupes, discover the most exciting sports
                                    cars available for rent this season.
                                </p>
                            </div>
                        </a>

                        <a
                            target='_blank'
                            rel="noopener noreferrer"
                            href="https://www.europcar.com/en-us/p/car-rental/fleet/type/electric/benefits"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                        >
                            <img
                                role="presentation"
                                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSNZ8UXPU1TpfmxMpr3l0YXlQKGs66LpNPDQ&s"
                                alt="Electric car charging"
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    Why Renting an Electric Car is the Future
                                </h3>
                                <span className="text-xs dark:text-gray-600">July 15, 2025</span>
                                <p>
                                    Learn about the benefits of electric car rentals, from eco-friendliness to lower
                                    running costs and cutting-edge technology.
                                </p>
                            </div>
                        </a>

                        <a
                            target='_blank'
                            rel="noopener noreferrer"
                            href="https://www.caranddriver.com/rankings/best-family-cars"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                        >
                            <img
                                role="presentation"
                                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                src="https://67cdn.co.uk/157/6/172009060566867fede1373_family-car-hero.png?width=1440&height=756&crop=auto"
                                alt="Family car"
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    Best Family Cars for Road Trips
                                </h3>
                                <span className="text-xs dark:text-gray-600">July 5, 2025</span>
                                <p>
                                    Need space, comfort, and safety for your family vacation? Check out our top family car
                                    rental recommendations.
                                </p>
                            </div>
                        </a>

                        <a
                            target='_blank'
                            rel="noopener noreferrer"
                            href="https://cars.usnews.com/cars-trucks/advice/most-comfortable-luxury-suvs"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
                        >
                            <img
                                role="presentation"
                                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                src="https://hips.hearstapps.com/hmg-prod/images/2025-genesis-gv80-149-6642229d26dcf.jpg?crop=0.748xw:0.632xh;0.172xw,0.163xh&resize=700:*"
                                alt="Luxury SUV"
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    Luxury SUVs That Combine Comfort and Style
                                </h3>
                                <span className="text-xs dark:text-gray-600">June 25, 2025</span>
                                <p>
                                    Discover the ultimate blend of elegance and practicality with our top luxury SUV
                                    rentals.
                                </p>
                            </div>
                        </a>

                        <a
                            target='_blank'
                            rel="noopener noreferrer"
                            href="https://www.toyotabaracarrental.com/en/blog/basic-car-knowledge/7867753453453453/"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
                        >
                            <img
                                role="presentation"
                                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglImdei7ablw16c6QFfHXocSC4q87P3h5gw&s"
                                alt="Car interior"
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    10 Tips to Keep Your Rental Car in Top Condition
                                </h3>
                                <span className="text-xs dark:text-gray-600">June 10, 2025</span>
                                <p>
                                    Simple maintenance tips and care guidelines to ensure a smooth rental experience every
                                    time.
                                </p>
                            </div>
                        </a>

                        <a
                            target='_blank'
                            rel="noopener noreferrer"
                            href="https://www.enterprise.com/en/road-trips/planning.html"
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
                        >
                            <img
                                role="presentation"
                                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                                src="https://focus.independent.ie/thumbor/W4EbVhQol-Zdivw2PLcTSvf5t-I=/0x37:1500x864/960x640/prod-mh-ireland/ff6d2948-c0da-11ed-a4fe-0210609a3fe2.jpg"
                                alt="Road trip"
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    Planning the Perfect Road Trip with a Rental Car
                                </h3>
                                <span className="text-xs dark:text-gray-600">May 30, 2025</span>
                                <p>
                                    From route planning to car selection, here’s how to make your road trip unforgettable.
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Load More Button */}
                    <div className="flex justify-center">
                        <a
                            target='_blank'
                            href='https://www.cars.com/news/'
                            type="button"
                            className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
                        >
                            View More Blogs
                        </a>
                    </div>
                </div>
            </section>
        </Fade>
    );
};

export default Blog;
