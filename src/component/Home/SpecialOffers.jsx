import React from 'react';
import SpecialOffersCard from './SpecialOffersCard';
import { Slide } from 'react-awesome-reveal';
import { Fade } from 'react-awesome-reveal';

const SpecialOffers = () => {
    const offers = [
        {
            title: 'Economy Drive',
            price: '$19.99',
            description: 'Perfect for quick trips and budget-friendly rides.',
            image: 'https://shorturl.at/swB3Y',
        },

        {
            title: 'Family Package',
            price: '$29.99',
            description: 'Spacious and safe rides for your whole family.',
            image: 'https://shorturl.at/gANxY',
        },
        {
            title: 'Adventure Pro',
            price: '$49.99',
            description: 'For continuous road trips and off-road journeys.',
            image: 'https://shorturl.at/JXyev',
        },
        {
            title: 'Business Elite',
            price: 'Custom',
            description: 'Tailored plans for corporate clients and executives.',
            image: 'https://shorturl.at/middU',
        },
    ];
    return (

        <Fade>
            <div className='max-w-[1920px] mx-auto px-4 lg:px-10 my-20'>
                <h1 className='text-center text-4xl font-bold mb-10'>Special Offers</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
                    {offers.map((offer, index) => <SpecialOffersCard key={index} offer={offer} index={index}></SpecialOffersCard>)}
                </div>
            </div>
        </Fade>
    );
};

export default SpecialOffers;