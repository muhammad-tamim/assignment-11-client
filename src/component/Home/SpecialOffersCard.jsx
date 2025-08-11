import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import { Link } from 'react-router';

const SpecialOffersCard = ({ offer }) => {
    const { title, price, description, image } = offer;

    // Map titles to their routes
    const routeMap = {
        'Economy Drive': '/economyDrive',
        'Business Elite': '/businessElite',
        'Family Package': '/familyPackage',
        'Adventure Pro': '/adventurePro',
    };

    return (
        <div className="flex flex-col flex-grow p-6 space-y-6 rounded-xl shadow-md sm:p-8 
                        dark:bg-gray-50 dark:text-gray-800 transform transition-transform 
                        duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="space-y-2">
                <h4 className="text-2xl font-bold">{title}</h4>
                <span className="text-6xl font-bold">{price}</span>
            </div>
            <p className="leading-relaxed dark:text-gray-600">{description}</p>
            <div>
                <img
                    src={image}
                    alt={`${title} Offer`}
                    className="rounded-lg shadow-md w-full object-cover"
                />
            </div>
            <Link to={routeMap[title]}>
                <button className="btn btn-primary">Learn More</button>
            </Link>
        </div>
    );
};

export default SpecialOffersCard;
