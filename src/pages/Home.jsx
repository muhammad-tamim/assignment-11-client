import React from 'react';
import Hero from '../component/Home/Hero';
import WhyChooseUs from '../component/Home/WhyChooseUs';
import Review from '../component/Home/Review';
import SpecialOffers from '../component/Home/SpecialOffers';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <WhyChooseUs></WhyChooseUs>
            <Review></Review>
            <SpecialOffers></SpecialOffers>
        </div>
    );
};

export default Home;