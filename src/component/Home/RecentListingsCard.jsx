import React from 'react';

const RecentListingsCard = ({ car, getTimeAgo }) => {
    const { imageUrl, carModel, rentalPrice, availability, bookingCount, postedDate } = car;
    return (
        <div className='dark:bg-gray-50 dark:text-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300'>
            <img src={imageUrl} alt={carModel} className='w-full rounded mb-4' />
            <h2 className='text-xl font-semibold'>{carModel}</h2>
            <p className='text-gray-600'>Rental Price: {rentalPrice}/day</p>
            <p>
                Availability:{' '}
                <span
                    className={`font-medium ${availability === 'Available' ? 'text-green-600' : 'text-red-600'
                        }`}
                >
                    {availability}
                </span>
            </p>
            <p>Booking Count: {bookingCount}</p>
            <p className='text-sm text-gray-500'>{getTimeAgo(postedDate)}</p>
        </div>
    );
};

export default RecentListingsCard;