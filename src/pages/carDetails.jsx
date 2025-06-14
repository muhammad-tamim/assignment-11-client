import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import LoadingSpinner from '../component/LoadingSpinner';
import toast, { Toaster } from 'react-hot-toast';

const carDetails = () => {
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
        fetch(`${import.meta.env.VITE_API_URL}/bookCar/${car._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                startDate,
                endDate,
                totalCost
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Car booked successfully!');
                    setCar(prev => ({
                        ...prev,
                        bookingCount: prev.bookingCount + 1,
                        startDate,
                        endDate,
                        totalCost
                    }));
                } else {
                    toast.error('Booking failed!');
                }
                setShowModal(false);
                setStartDate('');
                setEndDate('');
                setTotalCost(0);
            })
            .catch(error => {
                console.error('Booking error:', error);
                toast.error('Booking failed!');
                setShowModal(false);
            });
    };

    if (loading) return <LoadingSpinner></LoadingSpinner>;

    return (
        <>
            <Toaster position='top-right' />
            <div className="max-w-5xl mx-auto px-4 lg:px-10 my-20">
                <div className='dark:bg-gray-50 dark:text-gray-800 rounded-lg shadow-md p-4'>
                    <h1 className='text-center text-4xl mb-10'>Car Details</h1>
                    <img src={car.imageUrl} alt={car.carModel} className="w-full max-h-[400px] rounded mb-6" />
                    <h1 className="text-3xl font-bold mb-2">{car.carModel}</h1>
                    <p className="text-xl mb-2">Price per Day: ${car.rentalPrice}</p>
                    <p className="mb-2">
                        Availability:{' '}
                        <span className={car.availability === 'Available' ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                            {car.availability}
                        </span>
                    </p>
                    <p className="mb-2">Booking Count: {car.bookingCount}</p>
                    <p className="mb-2">Location: {car.location}</p>
                    <p className="mb-2 ">Description: {car.description}</p>
                    <p className="mb-2 ">Features: {car.features}</p>

                    <button onClick={() => setShowModal(true)} className="btn btn-primary">
                        Book Now
                    </button>

                    {/* Confirmation Modal */}
                    {showModal && car && (
                        <dialog open className="modal">
                            <div method="dialog" className="modal-box max-w-xl w-full">
                                <h3 className="font-bold text-center text-xl mb-4">Confirm Booking</h3>

                                <div className="mb-4 space-y-2">
                                    <p><strong>Model:</strong> {car.carModel}</p>
                                    <p><strong>Price per Day:</strong> ${car.rentalPrice}</p>
                                    <p><strong>Location:</strong> {car.location}</p>
                                    <p><strong>Current Bookings:</strong> {car.bookingCount || 0}</p>

                                    <label className="block">
                                        <span>Start Date:</span>
                                        <input
                                            type="date"
                                            className="input input-bordered w-full"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />
                                    </label>

                                    <label className="block">
                                        <span>End Date:</span>
                                        <input
                                            type="date"
                                            className="input input-bordered w-full"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                        />
                                    </label>

                                    <p><strong>Total Cost:</strong> ${totalCost || 0}</p>
                                </div>

                                <div className="modal-action">
                                    <button onClick={handleBooking} className="btn btn-primary">Confirm Booking</button>
                                    <button onClick={() => setShowModal(false)} className="btn">Cancel</button>
                                </div>
                            </div>
                        </dialog>
                    )}

                </div>
            </div>
        </>
    );
};

export default carDetails;