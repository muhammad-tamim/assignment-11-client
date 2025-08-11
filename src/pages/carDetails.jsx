import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import LoadingSpinner from '../component/LoadingSpinner';
import toast, { Toaster } from 'react-hot-toast';
import { context } from '../layout/RootLayout';
import { useContext } from 'react';

const carDetails = () => {
    const contextData = useContext(context);

    if (!contextData || !contextData.handleSignUp) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    const { user } = contextData || {};

    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalCost, setTotalCost] = useState(0);

    // get specific id data form the server
    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_API_URL}/carDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setCar(data);
                setLoading(false);
            });
    }, [id]);

    // calculate total price
    useEffect(() => {
        if (startDate && endDate && car?.rentalPrice) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
            if (diffInDays > 0) {
                setTotalCost(diffInDays * car.rentalPrice);
            } else {
                setTotalCost(0);
            }
        }
    }, [startDate, endDate, car?.rentalPrice]);

    // send updated booked data to the server
    const handleBooking = () => {
        const bookingData = {
            userEmail: contextData?.user?.email,
            carId: car._id,
            carModel: car.carModel,
            carImage: car.imageUrl,
            location: car.location,
            rentalPrice: car.rentalPrice,
            startDate,
            endDate,
            totalCost,
            bookingStatus: 'booked',
            createdAt: new Date().toISOString()
        };

        // send booking data to the server
        fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // 2. Update car booking count
                    return fetch(`${import.meta.env.VITE_API_URL}/bookCar/${car._id}`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({})
                    });
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Car booked successfully!');
                    setCar(prev => ({
                        ...prev,
                        bookingCount: prev.bookingCount + 1
                    }));
                }
                setShowModal(false);
                setStartDate('');
                setEndDate('');
                setTotalCost(0);
            })
    };


    if (loading)
        return (
            <div className="flex items-center justify-center min-h-screen">
                <LoadingSpinner />
            </div>
        );
    return (
        <>
            <Toaster position="top-right" />
            <main className="max-w-6xl mt-40 mx-auto p-6 lg:p-12 my-12 border border-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold mb-8 text-center ">{car.carModel}</h1>
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Image */}
                    <img
                        src={car.imageUrl}
                        alt={car.carModel}
                        className="w-full lg:w-1/2 rounded-lg object-cover max-h-[400px]"
                        loading="lazy"
                    />

                    {/* Details */}
                    <section className="flex flex-col justify-between lg:w-1/2 space-y-6 ">
                        <div className="space-y-3">
                            <p className="text-lg">
                                <span className="font-semibold">Price per Day:</span> ${car.rentalPrice}
                            </p>

                            <p className="text-lg">
                                <span className="font-semibold">Availability:</span>{' '}
                                <span
                                    className={
                                        car.availability === 'Available'
                                            ? 'text-green-600 font-semibold'
                                            : 'text-red-600 font-semibold'
                                    }
                                >
                                    {car.availability}
                                </span>
                            </p>

                            <p className="text-lg">
                                <span className="font-semibold">Booking Count:</span> {car.bookingCount}
                            </p>

                            <p className="text-lg">
                                <span className="font-semibold">Location:</span> {car.location}
                            </p>

                            <div>
                                <h2 className="font-semibold text-xl mb-1">Description:</h2>
                                <p >{car.description || 'No description available.'}</p>
                            </div>

                            <div>
                                <h2 className="font-semibold text-xl mb-1">Features:</h2>
                                <p >{car.features || 'No features listed.'}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowModal(true)}
                            className="btn btn-primary"
                            aria-label={`Book ${car.carModel}`}
                        >
                            Book Now
                        </button>
                    </section>
                </div>

                {/* Booking Modal */}
                {showModal && (
                    <dialog open className="modal bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-50">
                        <form
                            method="dialog"
                            className="modal-box  p-6 rounded-lg max-w-md w-full"
                            onSubmit={e => {
                                e.preventDefault();
                                handleBooking();
                            }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-center">Confirm Booking</h3>

                            <div className="space-y-4 mb-6 ">
                                <p>
                                    <strong>Model:</strong> {car.carModel}
                                </p>
                                <p>
                                    <strong>Price per Day:</strong> ${car.rentalPrice}
                                </p>
                                <p>
                                    <strong>Location:</strong> {car.location}
                                </p>
                                <p>
                                    <strong>Current Bookings:</strong> {car.bookingCount || 0}
                                </p>

                                <label className="block">
                                    <span className="font-medium mb-1 block">Start Date:</span>
                                    <input
                                        type="date"
                                        required
                                        className="input input-bordered w-full"
                                        value={startDate}
                                        onChange={e => setStartDate(e.target.value)}
                                    />
                                </label>

                                <label className="block">
                                    <span className="font-medium mb-1 block">End Date:</span>
                                    <input
                                        type="date"
                                        required
                                        className="input input-bordered w-full"
                                        value={endDate}
                                        onChange={e => setEndDate(e.target.value)}
                                    />
                                </label>

                                <p>
                                    <strong>Total Cost:</strong> ${totalCost || 0}
                                </p>
                            </div>

                            <div className="modal-action flex justify-end gap-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={!startDate || !endDate || totalCost <= 0}
                                >
                                    Confirm Booking
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-error"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </dialog>
                )}
            </main>
        </>
    );
};

export default carDetails;