import React from 'react';
import { Link } from 'react-router';

const AvailableCarsGridView = ({ car }) => {
    return (
        <div className='dark:bg-gray-50 dark:text-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300'>
            <img src={car.imageUrl} alt={car.carModel} className='w-full h-48 object-cover rounded mb-4' />
            <h2 className='text-xl font-bold mb-1'>{car.carModel}</h2>
            <p className=' mb-1'>${car.rentalPrice}/day</p>
            <p className=' mb-1'>Location: {car.location}</p>
            <p className=' mb-1'>Booking Count: {car.bookingCount}</p>
            <p className='text-sm  mb-2'>
                Posted: {new Date(car.postedDate).toLocaleDateString()}
            </p>
            <Link to={`/carDetails/${car._id}`} className='btn btn-sm btn-primary'>
                Book Now
            </Link>
        </div>
    );
};

export default AvailableCarsGridView;