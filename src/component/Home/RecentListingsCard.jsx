import React from 'react';
import { Link } from 'react-router';

const RecentListingsCard = ({ car }) => {
    const { _id, imageUrl, carModel, description } = car;

    const shortDescription = description
        ? description.length > 70
            ? description.slice(0, 70) + '...'
            : description
        : 'No description available.';

    return (
        <div className="border border-white rounded-lg shadow-md p-4 max-w-xs mx-auto hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer">
            <img
                src={imageUrl}
                alt={carModel}
                className="w-full h-40 object-cover rounded-md mb-3"
                loading="lazy"
            />
            <h2 className="text-lg font-semibold mb-1 truncate">{carModel}</h2>
            <p className=" text-sm mb-4 leading-relaxed line-clamp-3">
                {shortDescription}
            </p>
            <Link to={`/carDetails/${car._id}`} className='btn btn-primary btn-sm' aria-label={`See more details about ${carModel}`}>
                See More
            </Link>
        </div>
    );
};

export default RecentListingsCard;
