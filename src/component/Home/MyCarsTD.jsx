import React from 'react';

const MyCarsTD = ({ car, selectedCar, setSelectedCar, isModalOpen, setIsModalOpen, handleDelete, handleUpdate }) => {
    const { _id, imageUrl, carModel, rentalPrice, bookingCount, availability, postedDate } = car;

    return (
        <>

            <tr>
                <td><img src={imageUrl} alt={carModel} className='w-16 h-16 rounded' /></td>
                <td>{carModel}</td>
                <td>${rentalPrice}</td>
                <td>{bookingCount || 0}</td>
                <td>{availability}</td>
                <td>{new Date(postedDate).toLocaleDateString()}</td>
                <td className='mt-5 flex gap-2'>
                    <button
                        className='btn btn-xs btn-success mr-2'
                        onClick={() => { setSelectedCar(car); setIsModalOpen(true); }}
                    >
                        Update
                    </button>
                    <button
                        className='btn btn-xs btn-error'
                        onClick={() => handleDelete(_id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>

            {/* myCars data update modal */}
            {isModalOpen && selectedCar && (
                <dialog open className="modal">
                    <form method="dialog" onSubmit={handleUpdate} className="modal-box max-w-2xl w-full">
                        <h3 className="font-bold text-center text-xl mb-4">Update Car</h3>

                        {/* Car Model */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Car Model</label>
                            <input type="text" name="carModel" defaultValue={selectedCar.carModel} className="w-full input input-bordered" required />
                        </div>

                        {/* Daily Rental Price */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Daily Rental Price ($)</label>
                            <input type="number" name="rentalPrice" defaultValue={selectedCar.rentalPrice || selectedCar.dailyPrice} className="w-full input input-bordered" required />
                        </div>

                        {/* Availability */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Availability</label>
                            <select name="availability" defaultValue={selectedCar.availability} className="w-full select select-bordered" required>
                                <option value="">Select availability</option>
                                <option value="Available">Available</option>
                                <option value="Unavailable">Unavailable</option>
                            </select>
                        </div>

                        {/* Vehicle Registration Number */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Vehicle Registration Number</label>
                            <input type="text" name="registrationNumber" defaultValue={selectedCar.registrationNumber || selectedCar.registration} className="w-full input input-bordered" required />
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Features</label>
                            <input type="text" name="features" defaultValue={selectedCar.features} className="w-full input input-bordered" placeholder="GPS, AC, Bluetooth..." />
                        </div>

                        {/* Description */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Description</label>
                            <textarea name="description" defaultValue={selectedCar.description} rows="3" className="w-full textarea textarea-bordered" required></textarea>
                        </div>

                        {/* Booking Count */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Booking Count</label>
                            <input type="number" name="bookingCount" defaultValue={selectedCar.bookingCount || 0} className="w-full input input-bordered" readOnly />
                        </div>

                        {/* Image URL */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Image URL</label>
                            <input type="url" name="imageUrl" defaultValue={selectedCar.imageUrl || selectedCar.image} className="w-full input input-bordered" required />
                        </div>

                        {/* Location */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Location</label>
                            <input type="text" name="location" defaultValue={selectedCar.location} className="w-full input input-bordered" required />
                        </div>

                        {/* Buttons */}
                        <div className="modal-action">
                            <button type="submit" className="btn btn-success">Update</button>
                            <button type="button" onClick={() => setIsModalOpen(false)} className="btn">Cancel</button>
                        </div>
                    </form>
                </dialog>
            )}

        </>
    );
};

export default MyCarsTD;