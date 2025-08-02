import React from 'react';
import SpecialOffersCard from './SpecialOffersCard';
import { Slide } from 'react-awesome-reveal';

const SpecialOffers = () => {
    const offers = [
        {
            title: 'Economy Drive',
            price: 'Free',
            description: 'Perfect for quick trips and budget-friendly rides.',
            features: ['1 Hour Free Ride', 'Basic Insurance', 'City Only'],
        },
        {
            title: 'Business Elite',
            price: 'Custom',
            description: 'Tailored plans for corporate clients and executives.',
            features: ['Luxury Cars', 'Chauffeur Service', 'Flexible Billing', '24/7 Customer Support'],
        },
        {
            title: 'Family Package',
            price: '$29.99',
            description: 'Spacious and safe rides for your whole family.',
            features: ['Child Seats Included', 'Weekend Deals', 'Multi-day Discount'],
        },
        {
            title: 'Adventure Pro',
            price: '$49.99',
            description: 'For road trips and off-road journeys.',
            features: ['SUV & 4x4 Options', 'Free GPS', 'Unlimited Miles', 'Off-Road Insurance'],
        },
    ];
    return (
        <>
            <Slide>
                <div className='max-w-screen-2xl mx-auto px-4 lg:px-10 my-20'>
                    <h1 className='text-center text-4xl font-bold mb-10'>Special Offers</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
                        {offers.map((offer, index) => <SpecialOffersCard key={index} offer={offer} index={index}></SpecialOffersCard>)}
                    </div>
                </div>
            </Slide>
        </>
    );
};

export default SpecialOffers;