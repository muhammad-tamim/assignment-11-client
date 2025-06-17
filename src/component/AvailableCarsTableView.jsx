import React from 'react';
import { Link } from 'react-router';

const AvailableCarsTableView = ({ car }) => {
    return (
        <div className='flex flex-col md:flex-row items-center gap-4 bg-white dark:bg-gray-100 rounded-lg shadow-md p-4'
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
            <Link to={`/carDetails/${car._id}`} className='btn btn-sm btn-primary'>
                Book Now
            </Link>
        </div>
    );
};

export default AvailableCarsTableView;