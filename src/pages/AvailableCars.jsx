import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LoadingSpinner from '../component/LoadingSpinner';
import { Link } from 'react-router';
import AvailableCarsGridView from '../component/AvailableCarsGridView';
import AvailableCarsTableView from '../component/AvailableCarsTableView';

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

    if (loading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div className='max-w-[1920px] mx-auto px-4 lg:px-10 my-20 mt-40'>
            <h1 className='text-center text-4xl font-bold mb-10'>Available Cars</h1>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-4 mb-8'>
                <input
                    type='text'
                    placeholder='Search by model, brand, or location...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='input input-bordered w-full lg:max-w-sm border-primary'
                />

                <div className='flex gap-4'>
                    <select
                        className='select select-bordered border-primary'
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {sortedCars.map(car => <AvailableCarsGridView key={car._id} car={car}></AvailableCarsGridView>)}
                </div>
            ) : (
                <div className='space-y-4'>
                    {sortedCars.map((car) => <AvailableCarsTableView key={car._id} car={car}></AvailableCarsTableView>)}
                </div>
            )}
        </div>
    );
};

export default AvailableCars;