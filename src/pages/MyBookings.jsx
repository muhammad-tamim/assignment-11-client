import React from 'react';
import { useContext } from 'react';
import { context } from '../layout/RootLayout';
import { useState } from 'react';
import { useEffect } from 'react';
import LoadingSpinner from '../component/LoadingSpinner';
import { Toaster } from 'react-hot-toast';
import { FaCalendarAlt, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyBookings = () => {
    const { user } = useContext(context);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingBooking, setEditingBooking] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    // get my cars data in the server
    useEffect(() => {
        setLoading(true);
        if (user?.email) {
            fetch(`${import.meta.env.VITE_API_URL}/bookings/email/${user.email}`, {
                credentials: 'include',
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    setBookings(data)
                    setLoading(false);
                });
        }
    }, [user]);

    const formatDateTime = (isoDate) => {
        const date = new Date(isoDate);
        return `${date.toLocaleDateString('en-GB')} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    };


    const handleCancel = (id) => {
        Swal.fire({
            title: 'Are you sure you want to cancel this booking?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes executing the cancellation ',
            cancelButtonText: 'No closing the modal',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ bookingStatus: 'canceled' }),
                })
                    .then(res => res.json())
                    .then(() => {
                        const updated = bookings.map(b => b._id === id ? { ...b, bookingStatus: 'canceled' } : b);
                        setBookings(updated);
                        Swal.fire('Cancelled!', 'Booking has been canceled.', 'success');
                    });
            }
        });
    };

    const handleModify = (booking) => {
        setEditingBooking(booking);
        setStartDate(booking.startDate);
        setEndDate(booking.endDate);
    };

    const confirmModify = () => {
        fetch(`${import.meta.env.VITE_API_URL}/bookings/${editingBooking._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ startDate, endDate }),
        })
            .then(res => res.json())
            .then(() => {
                const start = new Date(startDate);
                const end = new Date(endDate);
                const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
                const updatedCost = days * editingBooking.rentalPrice;

                const updated = bookings.map(b =>
                    b._id === editingBooking._id
                        ? { ...b, startDate, endDate, totalCost: updatedCost }
                        : b
                );
                setBookings(updated);
                setEditingBooking(null);
                Swal.fire('Updated!', 'Booking dates and price have been modified.', 'success');
            });
    };

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    console.log(bookings)
    return (
        <>
            <Toaster position="top-right" />
            <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 my-20">
                <h1 className="text-center text-4xl mb-10">My Bookings</h1>
                <p className="text-sm text-gray-500 italic text-center mb-2 lg:hidden">
                    Scroll left/right to view the full table:
                </p>

                <div className="overflow-x-auto border rounded shadow">
                    <table className="table w-full text-sm">
                        <thead className="bg-gray-300 text-gray-700 font-semibold">
                            <tr>
                                <th>Car Image</th>
                                <th>Car Model</th>
                                <th>Booking Date</th>
                                <th>Total Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((b) => (
                                <tr
                                    key={b._id}
                                    className="dark:bg-gray-50 dark:text-gray-800 hover:bg-gray-300 transition duration-200"
                                >
                                    <td>
                                        <img src={b.carImage} alt="car" className="w-16 h-16 rounded object-cover" />
                                    </td>
                                    <td>{b.carModel}</td>
                                    <td>{formatDateTime(b.createdAt)}</td>
                                    <td>${b.totalCost}</td>
                                    <td>
                                        <span
                                            className={`badge text-white px-3 py-1 rounded ${b.bookingStatus === 'booked'
                                                ? 'bg-green-500'
                                                : b.bookingStatus === 'pending'
                                                    ? 'bg-yellow-500'
                                                    : 'bg-red-500'
                                                }`}
                                        >
                                            {b.bookingStatus}
                                        </span>
                                    </td>
                                    <td className="space-x-2 flex my-5 mr-5">
                                        <button
                                            className="btn btn-xs bg-blue-600 text-white hover:bg-blue-700"
                                            onClick={() => handleModify(b)}
                                        >
                                            <FaCalendarAlt className="inline mr-1" />
                                            Modify Date
                                        </button>
                                        <button
                                            className="btn btn-xs bg-red-600 text-white hover:bg-red-700"
                                            onClick={() => handleCancel(b._id)}
                                            disabled={b.bookingStatus === 'canceled'}
                                        >
                                            <FaTrash className="inline mr-1" />
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modify Booking Date Modal */}
            {editingBooking && (
                <dialog open className="modal">
                    <div className="modal-box">
                        <h2 className="text-lg font-semibold mb-4 text-center">Modify Booking Dates</h2>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="font-medium">Start Date:</label>
                                <input
                                    type="date"
                                    className="input input-bordered w-full mt-1"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="font-medium">End Date:</label>
                                <input
                                    type="date"
                                    className="input input-bordered w-full mt-1"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                            <div className="font-medium">
                                {(() => {
                                    const start = new Date(startDate);
                                    const end = new Date(endDate);
                                    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
                                    const price = days > 0 ? days * editingBooking.rentalPrice : editingBooking.totalCost;
                                    return `Price: $${price}`;
                                })()}
                            </div>
                            <div className="modal-action">
                                <button className="btn" onClick={() => setEditingBooking(null)}>Cancel</button>
                                <button
                                    className="btn btn-primary"
                                    onClick={confirmModify}
                                    disabled={!startDate || !endDate}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
};

export default MyBookings;