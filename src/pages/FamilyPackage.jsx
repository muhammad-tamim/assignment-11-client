import React, { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const FamilyPackage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const features = [
        "Extra legroom",
        "Child safety seats",
        "Rear-seat entertainment",
        "Large storage space",
        "Climate control",
    ];

    const faqs = [
        {
            question: "Are child safety seats included?",
            answer:
                "Yes, child safety seats are available and properly installed for your child’s safety during the trip.",
        },
        {
            question: "How many passengers can the vehicle accommodate?",
            answer:
                "Our Family Package vehicles can comfortably seat 5 to 7 passengers depending on the model.",
        },
        {
            question: "Is there entertainment for kids on board?",
            answer:
                "Rear-seat entertainment systems are included to keep your family entertained on long drives.",
        },
    ];

    return (
        <div className="mt-40 dark:bg-gray-900 min-h-screen py-12 px-6">
            <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                    Family Package
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-4 max-w-3xl mx-auto">
                    Spacious, safe, and comfortable vehicles tailored for your family trips.
                    Enjoy ample legroom, advanced safety features, and entertainment options to
                    make every journey enjoyable for everyone.
                </p>

                {/* Rating */}
                <div className="flex justify-center mb-8">
                    {[...Array(4)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 w-6 h-6" />
                    ))}
                    <FaRegStar className="text-yellow-400 w-6 h-6" />
                    <span className="ml-2 text-gray-600 dark:text-gray-400">(198 reviews)</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <img
                            src="https://shorturl.at/gANxY"
                            alt="Family Package"
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
                                    <HiCheckCircle className="w-6 h-6 mr-2 animate-pulse" />
                                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <Link to="/availableCars">
                                <button className="btn btn-primary ">
                                    See Available Cars
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
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

export default FamilyPackage;
