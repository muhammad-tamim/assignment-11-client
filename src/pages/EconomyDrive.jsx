import React, { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { FaStar, FaRegStar } from "react-icons/fa";

const EconomyDrive = () => {
    // FAQ toggle state
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const features = [
        "Affordable daily rates",
        "Fuel efficient",
        "Air conditioning",
        "Automatic transmission",
        "Unlimited mileage",
    ];

    const faqs = [
        {
            question: "Is unlimited mileage really unlimited?",
            answer:
                "Yes, you can drive as much as you want within the rental period without any extra charges.",
        },
        {
            question: "Are there any age restrictions?",
            answer:
                "Drivers must be at least 21 years old with a valid driving license to rent this vehicle.",
        },
        {
            question: "Can I add an additional driver?",
            answer:
                "Yes, additional drivers can be added for a small fee during the booking process.",
        },
    ];

    return (
        <div className="dark:bg-gray-900 min-h-screen py-12 px-6 pt-40">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                    Economy Drive
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-4 max-w-3xl mx-auto">
                    Perfect for budget-friendly, fuel-efficient city driving. Ideal for
                    daily commuting, errands, and quick getaways, our Economy Drive
                    package offers great value without compromising comfort or safety.
                </p>

                {/* Rating stars */}
                <div className="flex justify-center mb-8">
                    {[...Array(4)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 w-6 h-6" />
                    ))}
                    <FaRegStar className="text-yellow-400 w-6 h-6" />
                    <span className="ml-2 text-gray-600 dark:text-gray-400">(124 reviews)</span>
                </div>

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
                            {features.map((feature, i) => (
                                <li
                                    key={i}
                                    className="flex items-center transform transition duration-300 hover:scale-105"
                                >
                                    <HiCheckCircle className=" w-6 h-6 mr-2 animate-pulse" />
                                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* FAQ section */}
                <div className="mt-12 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                        Frequently Asked Questions
                    </h3>
                    <div className="space-y-4">
                        {faqs.map(({ question, answer }, index) => (
                            <div
                                key={index}
                                className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left px-6 py-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 flex justify-between items-center focus:outline-none"
                                >
                                    <span>{question}</span>
                                    <span className="text-xl font-bold">
                                        {openIndex === index ? "-" : "+"}
                                    </span>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300">
                                        {answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EconomyDrive;
