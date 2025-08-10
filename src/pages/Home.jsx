import React from 'react';
import Hero from '../component/Home/Hero';
import WhyChooseUs from '../component/Home/WhyChooseUs';
import Review from '../component/Home/Review';
import SpecialOffers from '../component/Home/SpecialOffers';
import RecentListings from '../component/Home/RecentListings';
import Blog from '../component/Home/Blog';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <RecentListings></RecentListings>
            <SpecialOffers></SpecialOffers>
            <Review></Review>
            <Blog></Blog>
        </div>
    );
};

export default Home;