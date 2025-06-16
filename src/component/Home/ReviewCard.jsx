import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, time, img, feedbacks } = review
    return (
        <div className="shadow-md container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-xl dark:bg-gray-50 dark:text-gray-800 hover:shadow-xl hover:scale-105 transition duration-300">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={img} alt="Customer" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{name}</h4>
                        <span className="text-xs dark:text-gray-600">{time}</span>
                    </div>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                {feedbacks.map((feedback, index) => <p key={index}>{feedback}</p>)}
            </div>
        </div>
    );
};

export default ReviewCard;