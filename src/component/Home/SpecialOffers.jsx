import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';

const SpecialOffers = () => {
    return (
        <div className='max-w-screen-2xl mx-auto px-4 lg:px-10 my-20'>
            <h1 className='text-center text-4xl font-bold mb-10'>Special Offers</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>

                {/* Card 1 */}
                <div className="flex">
                    <div className="flex flex-col flex-grow p-6 space-y-6 rounded-xl shadow-md sm:p-8 dark:bg-gray-50 dark:text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                        <div className="space-y-2">
                            <h4 className="text-2xl font-bold">Economy Drive</h4>
                            <span className="text-6xl font-bold">Free</span>
                        </div>
                        <p className="leading-relaxed dark:text-gray-600">Perfect for quick trips and budget-friendly rides.</p>
                        <ul className="flex-1 mb-6 dark:text-gray-600">
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>1 Hour Free Ride</span></li>
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>Basic Insurance</span></li>
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>City Only</span></li>
                        </ul>
                        <button type="button" className="btn btn-primary">Learn More</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex">
                    <div className="flex flex-col flex-grow p-6 space-y-6 rounded-xl shadow-md sm:p-8 dark:bg-gray-50 dark:text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                        <div className="space-y-2">
                            <h4 className="text-2xl font-bold">Business Elite</h4>
                            <span className="text-6xl font-bold">Custom</span>
                        </div>
                        <p className="leading-relaxed dark:text-gray-600">Tailored plans for corporate clients and executives.</p>
                        <ul className="flex-1 mb-6 dark:text-gray-600">
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>Luxury Cars</span></li>
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>Chauffeur Service</span></li>
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>Flexible Billing</span></li>
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>24/7 Customer Support</span></li>
                        </ul>
                        <button type="button" className="btn btn-primary">Learn More</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex">
                    <div className="flex flex-col flex-grow p-6 space-y-6 rounded-xl shadow-md sm:p-8 dark:bg-gray-50 dark:text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                        <div className="space-y-2">
                            <h4 className="text-2xl font-bold">Family Package</h4>
                            <span className="text-6xl font-bold">$29.99</span>
                        </div>
                        <p className="leading-relaxed dark:text-gray-600">Spacious and safe rides for your whole family.</p>
                        <ul className="flex-1 mb-6 dark:text-gray-600">
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>Child Seats Included</span></li>
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>Weekend Deals</span></li>
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>Multi-day Discount</span></li>
                        </ul>
                        <button type="button" className="btn btn-primary">Learn More</button>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="flex">
                    <div className="flex flex-col flex-grow p-6 space-y-6 rounded-xl shadow-md sm:p-8 dark:bg-gray-50 dark:text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                        <div className="space-y-2">
                            <h4 className="text-2xl font-bold">Adventure Pro</h4>
                            <span className="text-6xl font-bold">$49.99</span>
                        </div>
                        <p className="leading-relaxed dark:text-gray-600">For road trips and off-road journeys.</p>
                        <ul className="flex-1 mb-6 dark:text-gray-600">
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>SUV & 4x4 Options</span></li>
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>Free GPS</span></li>
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>Unlimited Miles</span></li>
                            <li className="flex items-center mb-2 space-x-2"><HiCheckCircle className="text-green-600 w-5 h-5" /> <span>Off-Road Insurance</span></li>
                        </ul>
                        <button type="button" className="btn btn-primary">Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SpecialOffers;