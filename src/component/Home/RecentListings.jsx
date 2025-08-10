import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import { formatDistanceToNow } from 'date-fns';
import RecentListingsCard from './RecentListingsCard';

const RecentListings = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_URL}/cars`)
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <LoadingSpinner></LoadingSpinner>

    const getTimeAgo = (date) => {
        return `Added ${formatDistanceToNow(new Date(date), { addSuffix: true })}`;
    };

    return (
        <div className='max-w-[1920px] mx-auto px-4 lg:px-10 my-20'>
            <h1 className='text-center text-4xl font-bold mb-10'>Recent Listing</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20'>

                {cars.map((car) => <RecentListingsCard car={car} getTimeAgo={getTimeAgo} key={car._id}></RecentListingsCard>)}

            </div>
        </div>
    );
};

export default RecentListings;