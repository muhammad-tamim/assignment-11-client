import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import { IoCarSportSharp } from 'react-icons/io5';
import { MdOutlineSupportAgent } from 'react-icons/md';
import WhyChooseUsCard from './WhyChooseUsCard';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <IoCarSportSharp className='text-8xl' />,
            title: 'Wide Variety of Cars',
            description: 'From budget-friendly options to luxury vehicles.',
        },
        {
            icon: <GiTakeMyMoney className='text-8xl' />,
            title: 'Affordable Prices',
            description: 'Competitive daily rates you can count on.',
        },
        {
            icon: <FaCalendarCheck className='text-8xl' />,
            title: 'Easy Booking Process',
            description: 'Seamlessly book your ride in just a few clicks.',
        },
        {
            icon: <MdOutlineSupportAgent className='text-8xl' />,
            title: 'Customer Support',
            description: '24/7 assistance for all your queries.',
        },
    ];
    return (
        <div className='max-w-screen-2xl mx-auto px-4 lg:px-10 my-20'>
            <h1 className='text-center text-4xl mb-10'>Why Choose Us?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 '>
                {
                    features.map((feature, i) => <WhyChooseUsCard feature={feature} key={i}></WhyChooseUsCard>)
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;


