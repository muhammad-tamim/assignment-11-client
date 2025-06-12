import React from 'react';

const SpecialOffers = () => {
    return (
        <div className='max-w-screen-2xl mx-auto px-4 lg:px-10 my-20'>
            <h1 className='text-center text-4xl mb-10'>Special Offers</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
                <div className="flex mb-8 sm:px-4 lg:mb-0" bis_skin_checked="1">
                    <div className="transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 flex flex-grow flex-col p-6 space-y-6 rounded-xl shadow-md sm:p-8 dark:bg-gray-50 dark:text-gray-800" bis_skin_checked="1">
                        <div className="space-y-2" bis_skin_checked="1">
                            <h4 className="text-2xl font-bold">Economy Drive</h4>
                            <span className="text-6xl font-bold">Free</span>
                        </div>
                        <p className="mt-3 leading-relaxed dark:text-gray-600">Perfect for quick trips and budget-friendly rides.</p>
                        <ul className="flex-1 mb-6 dark:text-gray-600">
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>1 Hour Free Ride</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Basic Insurance</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>City Only</span>
                            </li>
                        </ul>
                        <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50 cursor-pointer">Learn More</button>
                    </div>
                </div>
                <div className="flex mb-8 sm:px-4 lg:mb-0" bis_skin_checked="1">
                    <div className="transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 flex flex-grow flex-col p-6 space-y-6 rounded-xl shadow-md sm:p-8 dark:bg-violet-600 dark:text-gray-50" bis_skin_checked="1">
                        <div className="space-y-2" bis_skin_checked="1">
                            <h4 className="text-2xl font-bold">Standard Ride</h4>
                            <span className="text-6xl font-bold">$24
                                <span className="text-sm tracking-wide">/day</span>
                            </span>
                        </div>
                        <p className="leading-relaxed">Best for daily commutes and comfortable travel.</p>
                        <ul className="flex-1 space-y-2">
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Unlimited Kilometers</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Full Insurance</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Fuel Included</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Roadside Assistance</span>
                            </li>
                        </ul>
                        <a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100 dark:text-violet-600">Learn More</a>
                    </div>
                </div>
                <div className="flex mb-8 sm:px-4 lg:mb-0" bis_skin_checked="1">
                    <div className="transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 flex flex-grow flex-col p-6 space-y-6 rounded-xl shadow-md sm:p-8 dark:bg-violet-600 dark:text-gray-50" bis_skin_checked="1">
                        <div className="space-y-2" bis_skin_checked="1">
                            <h4 className="text-2xl font-bold">Family Trip</h4>
                            <span className="text-6xl font-bold">$49
                                <span className="text-sm tracking-wide">/day</span>
                            </span>
                        </div>
                        <p className="leading-relaxed">Ideal for weekend getaways and family outings.</p>
                        <ul className="flex-1 space-y-2">
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>7-Seater SUV</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Child Seat Included</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Multiple Drivers</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Outstation Allowed</span>
                            </li>
                        </ul>
                        <a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100 dark:text-violet-600">Learn More</a>
                    </div>
                </div>
                <div className="flex mb-8 sm:px-4 lg:mb-0" bis_skin_checked="1">
                    <div className="transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 flex flex-grow flex-col p-6 space-y-6 rounded-xl shadow-md sm:p-8 dark:bg-gray-50 dark:text-gray-800" bis_skin_checked="1">
                        <div className="space-y-2" bis_skin_checked="1">
                            <h4 className="text-2xl font-bold">Business Elite</h4>
                            <span className="text-6xl font-bold">Custom</span>
                        </div>
                        <p className="mt-3 leading-relaxed dark:text-gray-600">Tailored plans for corporate clients and executives.</p>
                        <ul className="flex-1 mb-6 dark:text-gray-600">
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Luxury Cars</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Chauffeur Service</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Flexible Billing</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>24/7 Customer Support</span>
                            </li>
                        </ul>
                        <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50 cursor-pointer">Learn More</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SpecialOffers;