import React from 'react';
import Hero from '../component/Home/Hero';
import WhyChooseUs from '../component/Home/WhyChooseUs';
import Review from '../component/Home/Review';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <WhyChooseUs></WhyChooseUs>
            <Review></Review>
        </div>
    );
};

export default Home;