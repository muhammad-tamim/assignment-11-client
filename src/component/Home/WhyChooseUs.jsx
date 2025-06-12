import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import { IoCarSportSharp } from 'react-icons/io5';
import { MdOutlineSupportAgent } from 'react-icons/md';

const WhyChooseUs = () => {
    return (
        <div className='max-w-screen-2xl mx-auto px-4 lg:px-10 my-20'>
            <h1 className='text-center text-4xl mb-10'>Why Choose Us?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 '>
                <div className="flex flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800" bis_skin_checked="1">
                    <div className='flex flex-col items-center justify-center w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square'>
                        <IoCarSportSharp className='text-8xl' />
                    </div>
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300" bis_skin_checked="1">
                        <div className="my-2 space-y-1" bis_skin_checked="1">
                            <h2 className="text-xl font-semibold sm:text-2xl border-b border-gray-300 pb-2">Wide Variety of Cars</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">From budget-friendly options to luxury vehicles.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800" bis_skin_checked="1">
                    <div className='flex flex-col items-center justify-center w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square'>
                        <GiTakeMyMoney className='text-8xl' />
                    </div>
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300" bis_skin_checked="1">
                        <div className="my-2 space-y-1" bis_skin_checked="1">
                            <h2 className="text-xl font-semibold sm:text-2xl border-b border-gray-300 pb-2">Affordable Prices</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">Competitive daily rates you can count on.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800" bis_skin_checked="1">
                    <div className='flex flex-col items-center justify-center w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square'>
                        <FaCalendarCheck className='text-8xl' />
                    </div>
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300" bis_skin_checked="1">
                        <div className="my-2 space-y-1" bis_skin_checked="1">
                            <h2 className="text-xl font-semibold sm:text-2xl border-b border-gray-300 pb-2">Easy Booking Process</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">Seamlessly book your ride in just a few clicks.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800" bis_skin_checked="1">
                    <div className='flex flex-col items-center justify-center w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square'>
                        <MdOutlineSupportAgent className='text-8xl' />
                    </div>
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300" bis_skin_checked="1">
                        <div className="my-2 space-y-1" bis_skin_checked="1">
                            <h2 className="text-xl font-semibold sm:text-2xl border-b border-gray-300 pb-2">Customer Support</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">24/7 assistance for all your queries.</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default WhyChooseUs;


