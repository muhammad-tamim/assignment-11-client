import React from 'react';

const Review = () => {
    return (
        <div className='max-w-screen-2xl mx-auto px-4 lg:px-10 my-20'>
            <h1 className='text-center text-4xl mb-10'>Our Customers Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20'>

                <div className="shadow-md container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://i.ibb.co/0R6CRJCN/myImage.jpg" alt="Customer" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Muhammad Tamim</h4>
                                <span className="text-xs dark:text-gray-600">2 days ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                        <p>Absolutely loved the experience! The interface was clean and the process was very smooth.</p>
                        <p>I’ll definitely recommend this to my friends and family. Excellent customer support as well!</p>
                    </div>
                </div>

                <div className="shadow-md container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://i.ibb.co/JwWtRj3F/14860.jpg" alt="Customer" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Sara Thompson</h4>
                                <span className="text-xs dark:text-gray-600">4 days ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                        <p>I had a small issue while signing up, but it was resolved quickly. The team was super helpful.</p>
                        <p>The platform is intuitive and works seamlessly across devices. Love it!</p>
                    </div>
                </div>

                <div className="shadow-md container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://i.ibb.co/4wSxfg4r/17.jpg" alt="Customer" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">James Miller</h4>
                                <span className="text-xs dark:text-gray-600">1 week ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                        <p>At first, I was skeptical, but after using the service for a few weeks, I’m genuinely impressed.</p>
                        <p>They really care about feedback and constantly improve the platform. Highly recommended.</p>
                    </div>
                </div>

                <div className="shadow-md container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-xl dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://i.ibb.co/TMGw6dwc/14848.jpg" alt="Customer" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Aisha Rahman</h4>
                                <span className="text-xs dark:text-gray-600">3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                        <p>The design is beautiful, and everything loads super fast. I appreciate how smooth everything feels.</p>
                        <p>Keep up the great work! Looking forward to new features in the next update.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;
