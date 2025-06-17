import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const SpecialOffersCard = ({ offer, index }) => {
    const { title, price, description, features } = offer;

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex"
        >
            <div className="flex flex-col flex-grow p-6 space-y-6 rounded-xl shadow-md sm:p-8 dark:bg-gray-50 dark:text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="space-y-2">
                    <h4 className="text-2xl font-bold">{title}</h4>
                    <span className="text-6xl font-bold">{price}</span>
                </div>
                <p className="leading-relaxed dark:text-gray-600">{description}</p>
                <ul className="flex-1 mb-6 dark:text-gray-600">
                    {features.map((feature, i) => (
                        <li className="flex items-center mb-2 space-x-2" key={i}>
                            <HiCheckCircle className="text-green-600 w-5 h-5" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <button type="button" className="btn btn-primary">Learn More</button>
            </div>
        </motion.div>
    );
};

export default SpecialOffersCard;
