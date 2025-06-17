import React from 'react';
import { useContext } from 'react';
import { context } from '../layout/RootLayout';
import LoadingSpinner from '../component/LoadingSpinner';
import toast, { Toaster } from 'react-hot-toast';

const AddCar = () => {
    const contextData = useContext(context);

    if (!contextData || !contextData.handleSignUp) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    const { user } = contextData || {};

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const carData = Object.fromEntries(formData.entries());
        carData.bookingCount = 0;
        carData.userEmail = user?.email;
        carData.postedDate = new Date().toISOString()
        carData.bookingStatus = 'not_booked';


        // Send data to server
        fetch(`${import.meta.env.VITE_API_URL}/addCar`, {
            credentials: 'include',
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        }, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Car added successfully!');
                    form.reset();
                }
            });
    };
    return (
        <>
            < Toaster position='top-right' />
            <div className='max-w-screen-2xl mx-auto px-4 lg:px-10 my-20'>
                <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded shadow-md max-w-xl mx-auto">
                    {/* Car Model */}
                    <div>
                        <label className="block mb-1 font-medium">Car Model</label>
                        <input type="text" name="carModel" className="w-full input input-bordered" required />
                    </div>

                    {/* Daily Rental Price */}
                    <div>
                        <label className="block mb-1 font-medium">Daily Rental Price ($)</label>
                        <input type="number" name="rentalPrice" className="w-full input input-bordered" required />
                    </div>

                    {/* Availability */}
                    <div>
                        <label className="block mb-1 font-medium">Availability</label>
                        <select name="availability" className="w-full select select-bordered" required>
                            <option value="">Select availability</option>
                            <option value="Available">Available</option>
                            <option value="Unavailable">Unavailable</option>
                        </select>
                    </div>

                    {/* Vehicle Registration Number */}
                    <div>
                        <label className="block mb-1 font-medium">Vehicle Registration Number</label>
                        <input type="text" name="registrationNumber" className="w-full input input-bordered" required />
                    </div>

                    {/* Features */}
                    <div>
                        <label className="block mb-1 font-medium">Features</label>
                        <input type="text" name="features" placeholder="GPS, AC, Bluetooth..." className="w-full input input-bordered" />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-1 font-medium">Description</label>
                        <textarea name="description" rows="4" className="w-full textarea textarea-bordered" required></textarea>
                    </div>

                    {/* Booking Count (Default 0) */}
                    <div>
                        <label className="block mb-1 font-medium">Booking Count</label>
                        <input type="number" name="bookingCount" className="w-full input input-bordered" defaultValue={0} readOnly />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-1 font-medium">Image URL</label>
                        <input type="url" name="imageUrl" className="w-full input input-bordered" required />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-1 font-medium">Location</label>
                        <input type="text" name="location" className="w-full input input-bordered" required />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit" className="btn btn-primary w-full">Add Car</button>
                    </div>
                </form>

            </div>
        </>
    );
};

export default AddCar;