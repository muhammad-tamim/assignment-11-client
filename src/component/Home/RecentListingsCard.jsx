import React from 'react';
import { useNavigate } from 'react-router';

const RecentListingsCard = ({ car }) => {
    const { _id, imageUrl, carModel, description } = car;
    const navigate = useNavigate();

    const shortDescription = description
        ? description.length > 70
            ? description.slice(0, 70) + '...'
            : description
        : 'No description available.';

    return (
        <div className="dark:bg-white dark:text-gray-900 rounded-lg shadow-md p-4 max-w-xs mx-auto hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer">
            <img
                src={imageUrl}
                alt={carModel}
                className="w-full h-40 object-cover rounded-md mb-3"
                loading="lazy"
            />
            <h2 className="text-lg font-semibold mb-1 truncate">{carModel}</h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                {shortDescription}
            </p>
            <button
                onClick={() => navigate(`/carDetails/${_id}`)}
                className="w-full bg-primary hover:bg-primary-focus text-white py-2 rounded-md text-sm font-medium transition-colors"
                aria-label={`See more details about ${carModel}`}
            >
                See More
            </button>
        </div>
    );
};

export default RecentListingsCard;
