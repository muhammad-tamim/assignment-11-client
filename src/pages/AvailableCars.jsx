import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LoadingSpinner from '../component/LoadingSpinner';
import { Link } from 'react-router';

const AvailableCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isGridView, setIsGridView] = useState(true);
    const [sortBy, setSortBy] = useState('newest');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_URL}/availableCars`)
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    // searching
    const filteredCars = cars.filter((car) => {
        const term = searchTerm.toLowerCase();
        return (
            car.carModel?.toLowerCase().includes(term) ||
            car.brand?.toLowerCase().includes(term) ||
            car.Location?.toLowerCase().includes(term)
        );
    });

    // sorting
    const sortedCars = [...filteredCars].sort((a, b) => {
        if (sortBy === 'newest') {
            return new Date(b.postedDate) - new Date(a.postedDate);
        } else if (sortBy === 'oldest') {
            return new Date(a.postedDate) - new Date(b.postedDate);
        } else if (sortBy === 'lowest') {
            return parseFloat(a.rentalPrice) - parseFloat(b.rentalPrice);
        } else if (sortBy === 'highest') {
            return parseFloat(b.rentalPrice) - parseFloat(a.rentalPrice);
        }
        return 0;
    });
    return (
        <div className='max-w-screen-2xl mx-auto px-4 lg:px-10 my-20'>
            <h1 className='text-center text-4xl mb-10'>Available Cars</h1>

            <div className='flex flex-col lg:flex-row justify-between items-center gap-4 mb-8'>
                <input
                    type='text'
                    placeholder='Search by model, brand, or location...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='input input-bordered w-full lg:max-w-sm'
                />

                <div className='flex gap-4'>
                    <select
                        className='select select-bordered'
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value='newest'>Newest First</option>
                        <option value='oldest'>Oldest First</option>
                        <option value='lowest'>Price: Low to High</option>
                        <option value='highest'>Price: High to Low</option>
                    </select>

                    <button
                        onClick={() => setIsGridView(!isGridView)}
                        className='btn btn-outline btn-primary'
                    >
                        {isGridView ? 'List View' : 'Grid View'}
                    </button>
                </div>
            </div>


            {isGridView ? (
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {sortedCars.map((car) => (
                        <div
                            key={car._id}
                            className='dark:bg-gray-50 dark:text-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300'>
                            <img src={car.imageUrl} alt={car.carModel} className='w-full h-48 object-cover rounded mb-4' />
                            <h2 className='text-xl font-bold mb-1'>{car.carModel}</h2>
                            <p className=' mb-1'>${car.rentalPrice}/day</p>
                            <p className=' mb-1'>Location: {car.location}</p>
                            <p className=' mb-1'>Booking Count: {car.bookingCount}</p>
                            <p className='text-sm  mb-2'>
                                Posted: {new Date(car.postedDate).toLocaleDateString()}
                            </p>
                            <Link to={`/carDetails/${car._id}`} className='btn btn-sm btn-outline btn-primary'>
                                Book Now
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='space-y-4'>
                    {sortedCars.map((car) => (
                        <div
                            key={car._id}
                            className='flex flex-col md:flex-row items-center gap-4 bg-white dark:bg-gray-100 rounded-lg shadow-md p-4'
                        >
                            <img src={car.imageUrl} alt={car.carModel} className='w-full md:w-40 h-32 object-cover rounded' />
                            <div className='flex-1'>
                                <h2 className='text-xl font-bold mb-1'>{car.carModel}</h2>
                                <p className=' mb-1'>${car.rentalPrice}/day</p>
                                <p className=' mb-1'>Location: {car.Location}</p>
                                <p className=' mb-1'>Booking Count: {car.bookingCount}</p>
                                <p className='text-sm '>
                                    Posted: {new Date(car.postedDate).toLocaleDateString()}
                                </p>
                            </div>
                            <Link to={`/carDetails/${car._id}`} className='btn btn-sm btn-outline btn-primary'>
                                Book Now
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AvailableCars;