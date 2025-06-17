import React, { use } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { context } from '../layout/RootLayout';
import { useContext } from 'react';
import LoadingSpinner from '../component/LoadingSpinner';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import MyCarsTD from '../component/Home/MyCarsTD';

const MyCars = () => {
    const { user } = useContext(context);
    const [loading, setLoading] = useState(true);
    const [myCars, setMyCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // get my cars data in the server
    useEffect(() => {
        setLoading(true);
        if (user?.email) {
            fetch(`${import.meta.env.VITE_API_URL}/myCars/email/${user.email}`, {
                credentials: 'include',
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    setMyCars(data)
                    setLoading(false);
                });
        }
    }, [user]);

    // update my cars data and send them in the server
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCar = Object.fromEntries(formData.entries());

        fetch(`${import.meta.env.VITE_API_URL}/myCars/${selectedCar._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setMyCars(prev => prev.map(car => car._id === selectedCar._id ? { ...car, ...updatedCar } : car));
                    setIsModalOpen(false)
                    toast.success('Update car data Successfully');
                }
            });
    };

    // delete my cars data and send them in the server
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00BF83',
            cancelButtonColor: '#EB5971',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/myCars/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCarCount > 0) {
                            setMyCars(prev => prev.filter(car => car._id !== id));
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your car data has been deleted.',
                                icon: 'success'
                            });
                        }
                    });
            }
        });
    };

    // sorting
    const handleSort = (sortType) => {
        const sorted = [...myCars];

        if (sortType === "newest") {
            sorted.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
        } else if (sortType === "oldest") {
            sorted.sort((a, b) => new Date(a.postedDate) - new Date(b.postedDate));
        } else if (sortType === "low-price") {
            sorted.sort((a, b) => parseFloat(a.rentalPrice) - parseFloat(b.rentalPrice));
        } else if (sortType === "high-price") {
            sorted.sort((a, b) => parseFloat(b.rentalPrice) - parseFloat(a.rentalPrice));
        }

        setMyCars(sorted);
    };

    if (loading) return <LoadingSpinner></LoadingSpinner>

    return (
        <>
            <Toaster position='top-right' />

            <div className='max-w-screen-2xl mx-auto px-4 lg:px-10 my-20'>
                <h1 className='text-center text-4xl mb-10'>My Cars</h1>

                <div className="flex justify-center md:justify-end mb-6">
                    <select
                        onChange={(e) => handleSort(e.target.value)}
                        className="select select-bordered w-full max-w-xs"
                    >
                        <option value="">Sort by</option>
                        <option value="newest">Date Added (Newest First)</option>
                        <option value="oldest">Date Added (Oldest First)</option>
                        <option value="low-price">Price (Lowest First)</option>
                        <option value="high-price">Price (Highest First)</option>
                    </select>
                </div>

                {/* show all of my cars in table format */}
                {myCars.length === 0 ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">
                            Oops! No cars found.
                        </h2>
                        <p className="mb-6">
                            It looks like you haven’t added any cars yet. Click the button below to add cars.
                        </p>
                        <Link to="/addCar" className="btn btn-primary">
                            Add Car
                        </Link>
                    </div>
                ) : (
                    <>
                        <p className="text-sm text-gray-500 italic text-center mb-2 lg:hidden">
                            Scroll left/right to view the full table:
                        </p>

                        <div className='overflow-x-auto w-full rounded-md border border-gray-200'>
                            <table className='table w-full'>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Model</th>
                                        <th>Daily Price</th>
                                        <th>Booking Count</th>
                                        <th>Availability</th>
                                        <th>Date Added</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myCars.map(car => <MyCarsTD key={car._id} car={car} setSelectedCar={setSelectedCar} selectedCar={selectedCar} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleDelete={handleDelete} handleUpdate={handleUpdate}></MyCarsTD>)}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}

            </div>
        </>
    );
};

export default MyCars;