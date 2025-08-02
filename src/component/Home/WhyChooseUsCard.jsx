import React from 'react';

const WhyChooseUsCard = ({ feature }) => {
    const { icon, title, description } = feature
    return (
        <div className="flex flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800 hover:shadow-xl hover:scale-105 transition duration-300" bis_skin_checked="1">
            <div className='flex flex-col items-center justify-center w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square'>
                {icon}
            </div>
            <div className="space-y-4 text-center divide-y dark:divide-gray-300" bis_skin_checked="1">
                <div className="my-2 space-y-1" bis_skin_checked="1">
                    <h2 className="text-xl font-semibold sm:text-2xl border-b border-gray-300 pb-2">{title}</h2>
                    <p className="px-5 text-xs sm:text-base dark:text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUsCard;