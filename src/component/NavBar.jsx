import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import { context } from '../layout/RootLayout';
import LoadingSpinner from './LoadingSpinner';

const Navbar = () => {
    const contextData = useContext(context);

    if (!contextData || !contextData.handleSignUp) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    const { user, handleSignOut } = contextData || {};

    const handleSubmit = () => {
        handleSignOut()
    }
    return (
        <div className="navbar px-4 lg:px-10 shadow">
            <div className="navbar-start">
                {/* Drop Down For Small Devices */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100  z-1 mt-3 w-52 p-2 shadow text-primary">
                        <li className='hover:text-primary'>
                            <NavLink to="/bills" className={({ isActive }) => isActive && "text-primary"}>Home</NavLink>
                        </li>
                        <li className='hover:text-primary'>
                            <NavLink to="/bills" className={({ isActive }) => isActive && "text-primary"}>Available Cars</NavLink>
                        </li>
                        {
                            !user ? (
                                <li className='hover:text-primary'>
                                    <NavLink
                                        to="/signin"
                                        className={({ isActive }) =>
                                            isActive
                                            && "text-primary"
                                        }
                                    >
                                        SignIn
                                    </NavLink>
                                </li>
                            )
                                :
                                <ul className="">
                                    <li className='hover:text-primary'>
                                        <NavLink to="/profile" className={({ isActive }) => isActive && "text-primary"}>Add Car</NavLink>
                                    </li>
                                    <li className='hover:text-primary'>
                                        <NavLink to="/profile" className={({ isActive }) => isActive && "text-primary"}>My Cars</NavLink>
                                    </li>
                                    <li className='hover:text-primary'>
                                        <NavLink to="/profile" className={({ isActive }) => isActive && "text-primary"}>My Bookings</NavLink>
                                    </li>
                                    <li className=' hover:text-primary'>
                                        <NavLink to="/profile" className={({ isActive }) => isActive && "text-primary"}>Available Cars</NavLink>
                                    </li>
                                    <li className='hover:text-primary'>
                                        <a onClick={() => handleSubmit()} className='cursor-pointer'>SignOut</a>
                                    </li>
                                </ul>
                        }
                    </ul>
                </div>
                {/* Logo */}
                <Link to="/" className='cursor-pointer flex items-center gap-1 size-20'><img src={logo} alt="logo.png" /></Link>
            </div>

            {/* Bills and Profile */}
            <div className="navbar-center hidden lg:flex xl:text-xl">
                <ul className="flex gap-5 px-1">
                    <li className='hover:text-primary'>
                        <NavLink to="/bills" className={({ isActive }) => isActive && "text-primary"}>Home</NavLink>
                    </li>
                    <li className='hover:text-primary'>
                        <NavLink to="/bills" className={({ isActive }) => isActive && "text-primary"}>Available Cars</NavLink>
                    </li>

                    {
                        !user ? (
                            <li className='hover:text-primary'>

                                <NavLink
                                    to="/signin"
                                    className={({ isActive }) =>
                                        isActive
                                        && "text-primary"
                                    }
                                >
                                    SignIn
                                </NavLink>
                            </li>
                        )
                            :
                            <ul className="flex gap-5 px-1">
                                <li className='hover:text-primary'>
                                    <NavLink to="/profile" className={({ isActive }) => isActive && "text-primary"}>Add Car</NavLink>
                                </li>
                                <li className='hover:text-primary'>
                                    <NavLink to="/profile" className={({ isActive }) => isActive && "text-primary"}>My Cars</NavLink>
                                </li>
                                <li className='hover:text-primary'>
                                    <NavLink to="/profile" className={({ isActive }) => isActive && "text-primary"}>My Bookings</NavLink>
                                </li>
                                <li className=' hover:text-primary'>
                                    <NavLink to="/profile" className={({ isActive }) => isActive && "text-primary"}>Available Cars</NavLink>
                                </li>
                                <li className='hover:text-primary'>
                                    <a onClick={() => handleSubmit()} className='cursor-pointer'>SignOut</a>
                                </li>
                            </ul>
                    }
                </ul>
            </div>

            <div className="navbar-end gap-5 xl:text-xl">
                <label className="toggle text-base-content">
                    <input type="checkbox" value="dark" className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>
                {/* If logged in show profile info */}
                {
                    user &&
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt=""
                                    src={user?.photoURL} />
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>

    );
};

export default Navbar;