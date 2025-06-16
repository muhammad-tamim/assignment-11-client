import React from 'react';
import ReviewCard from './ReviewCard';

const Review = () => {
    const reviews = [
        {
            name: "Muhammad Tamim",
            time: "2 days ago",
            img: "https://i.ibb.co/0R6CRJCN/myImage.jpg",
            feedbacks: [
                "Absolutely loved the experience! The interface was clean and the process was very smooth.",
                "I’ll definitely recommend this to my friends and family. Excellent customer support as well!"
            ]
        },
        {
            name: "Sara Thompson",
            time: "4 days ago",
            img: "https://i.ibb.co/JwWtRj3F/14860.jpg",
            feedbacks: [
                "I had a small issue while signing up, but it was resolved quickly. The team was super helpful.",
                "The platform is intuitive and works seamlessly across devices. Love it!"
            ]
        },
        {
            name: "James Miller",
            time: "1 week ago",
            img: "https://i.ibb.co/4wSxfg4r/17.jpg",
            feedbacks: [
                "At first, I was skeptical, but after using the service for a few weeks, I’m genuinely impressed.",
                "They really care about feedback and constantly improve the platform. Highly recommended."
            ]
        },
        {
            name: "Aisha Rahman",
            time: "3 weeks ago",
            img: "https://i.ibb.co/TMGw6dwc/14848.jpg",
            feedbacks: [
                "The design is beautiful, and everything loads super fast. I appreciate how smooth everything feels.",
                "Keep up the great work! Looking forward to new features in the next update."
            ]
        },
    ];
    return (
        <div className='max-w-screen-2xl mx-auto px-4 lg:px-10 my-20'>
            <h1 className='text-center text-4xl mb-10'>Our Customers Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20'>
                {
                    reviews.map((review, index) => <ReviewCard key={index} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;
