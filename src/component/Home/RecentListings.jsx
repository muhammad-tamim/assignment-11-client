import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';

const RecentListings = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_URL}/cars`)
            .then((res) => res.json())
            .then((data) => {
                const sorted = data.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
                setCars(sorted.slice(0, 6));
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <LoadingSpinner></LoadingSpinner>
            </div>
        );
    }

    const getTimeAgo = (date) => {
        const posted = new Date(date);
        const now = new Date();

        const diffMs = now - posted;
        const diffSeconds = Math.floor(diffMs / 1000);
        const diffMinutes = Math.floor(diffSeconds / 60);
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);
        const diffMonths = Math.floor(diffDays / 30);
        const diffYears = Math.floor(diffDays / 365);

        if (diffYears > 0) return `Added ${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
        if (diffMonths > 0) return `Added ${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
        if (diffDays > 0) return `Added ${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
        if (diffHours > 0) return `Added ${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        if (diffMinutes > 0) return `Added ${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
        return "Added just now";
    };

    return (
        <div className='max-w-screen-2xl mx-auto px-4 lg:px-10 my-20'>
            <h1 className='text-center text-4xl mb-10'>Recent Listings</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20'>

                {cars.map((car) => (
                    <div
                        key={car._id}
                        className='dark:bg-gray-50 dark:text-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300'
                    >
                        <img src={car.imageUrl} alt={car.carModel} className='w-full h-48 rounded mb-4' />
                        <h2 className='text-xl font-semibold'>{car.carModel}</h2>
                        <p className='text-gray-600'>${car.rentalPrice}/day</p>
                        <p>
                            Availability:{' '}
                            <span
                                className={`font-medium ${car.availability === 'Available' ? 'text-green-600' : 'text-red-600'
                                    }`}
                            >
                                {car.availability}
                            </span>
                        </p>
                        <p>Booking Count: {car.bookingCount}</p>
                        <p className='text-sm text-gray-500'>{getTimeAgo(car.postedDate)}</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default RecentListings;