import React from "react";
import { HiCheckCircle } from "react-icons/hi";

const EconomyDrive = () => {
    return (
        <div className=" dark:bg-gray-900 min-h-screen py-12 px-6 pt-40">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                    Economy Drive
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
                    Perfect for budget-friendly, fuel-efficient city driving.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <img
                            src="https://shorturl.at/N2vfO"
                            alt="Economy Car"
                            className="rounded-lg shadow-md w-full object-cover"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            Features
                        </h2>
                        <ul className="space-y-2">
                            {[
                                "Affordable daily rates",
                                "Fuel efficient",
                                "Air conditioning",
                                "Automatic transmission",
                                "Unlimited mileage"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center">
                                    <HiCheckCircle className="text-green-500 w-5 h-5 mr-2" />
                                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary px-6 py-3 text-lg">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EconomyDrive;
