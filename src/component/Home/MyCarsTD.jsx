import React from 'react';

const MyCarsTD = ({ car, setSelectedCar, handleDelete, handleUpdate }) => {
    const { _id, imageUrl, carModel, rentalPrice, bookingCount, availability, postedDate } = car;

    const openModal = () => {
        setSelectedCar(car);
        document.getElementById(`update_modal_${_id}`).showModal();
    };

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
                        className='btn btn-sm btn-primary '
                        onClick={openModal}
                    >
                        Update
                    </button>
                    <button
                        className='btn btn-sm btn-error'
                        onClick={() => handleDelete(_id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>

            {/* DaisyUI modal */}
            <dialog id={`update_modal_${_id}`} className="modal">
                <div className="modal-box max-w-xl max-h-5/6 mt-30">
                    <h3 className="font-bold text-center text-xl mb-4">Update Car</h3>

                    <form method="dialog" onSubmit={(e) => handleUpdate(e, _id)}>
                        {/* Car Model */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Car Model</label>
                            <input type="text" name="carModel" defaultValue={carModel} className="w-full input input-bordered" required />
                        </div>

                        {/* Daily Rental Price */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Daily Rental Price ($)</label>
                            <input type="number" name="rentalPrice" defaultValue={rentalPrice} className="w-full input input-bordered" required />
                        </div>

                        {/* Availability */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Availability</label>
                            <select name="availability" defaultValue={availability} className="w-full select select-bordered" required>
                                <option value="">Select availability</option>
                                <option value="Available">Available</option>
                                <option value="Unavailable">Unavailable</option>
                            </select>
                        </div>

                        {/* Vehicle Registration Number */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Vehicle Registration Number</label>
                            <input type="text" name="registrationNumber" defaultValue={car.registrationNumber} className="w-full input input-bordered" required />
                        </div>

                        {/* Features */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Features</label>
                            <input type="text" name="features" defaultValue={car.features} className="w-full input input-bordered" placeholder="GPS, AC, Bluetooth..." />
                        </div>

                        {/* Description */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Description</label>
                            <textarea name="description" defaultValue={car.description} rows="3" className="w-full textarea textarea-bordered" required></textarea>
                        </div>

                        {/* Booking Count */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Booking Count</label>
                            <input type="number" name="bookingCount" defaultValue={bookingCount || 0} className="w-full input input-bordered" readOnly />
                        </div>

                        {/* Image URL */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Image URL</label>
                            <input type="url" name="imageUrl" defaultValue={imageUrl} className="w-full input input-bordered" required />
                        </div>

                        {/* Location */}
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Location</label>
                            <input type="text" name="location" defaultValue={car.location} className="w-full input input-bordered" required />
                        </div>

                        {/* Buttons */}
                        <div className="modal-action">
                            <button type="submit" className="btn btn-sm btn-primary">Update</button>
                            <button type="button" className="btn btn-sm btn-error" onClick={() => document.getElementById(`update_modal_${_id}`).close()}>Cancel</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default MyCarsTD;
