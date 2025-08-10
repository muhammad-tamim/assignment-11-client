import React from 'react';
import { Link } from 'react-router';

const AvailableCarsTableView = ({ car }) => {
    return (
        <tr className="bg-white dark:bg-gray-100 hover:bg-gray-50 dark:hover:bg-gray-200">
            <td className="p-2">
                <img
                    src={car.imageUrl}
                    alt={car.carModel}
                    className="w-24 h-16 object-cover rounded"
                />
            </td>
            <td className="p-2 font-semibold">{car.carModel}</td>
            <td className="p-2 text-gray-600 dark:text-gray-700 truncate max-w-xs">
                {car.description ? car.description.substring(0, 60) + '...' : 'No description'}
            </td>
            <td className="p-2">
                <Link to={`/carDetails/${car._id}`} className="btn btn-sm btn-primary">
                    Book Now
                </Link>
            </td>
        </tr>
    );
};

export default AvailableCarsTableView;
