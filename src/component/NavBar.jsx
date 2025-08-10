import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';
import { context } from '../layout/RootLayout';
import LoadingSpinner from './LoadingSpinner';

const Navbar = () => {
    const contextData = useContext(context);

    const [theme, setTheme] = useState('light');

    // Apply theme to <html>
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    if (!contextData || !contextData.handleSignUp) {
        return <LoadingSpinner />;
    }
    const { user, handleSignOut } = contextData || {};

    const handleSubmit = () => {
        handleSignOut();
    };

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="px-4 lg:px-10 navbar bg-base-100 border-b border-base-300 shadow-sm fixed top-0 left-0 right-0 z-50">
            <div className="navbar-start">
                {/* Drop Down For Small Devices */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-base-300 btn-sm lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ''}>Home</NavLink></li>
                        <li><NavLink to="/AvailableCars" className={({ isActive }) => isActive ? "text-primary" : ''}>Available Cars</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-primary" : ''}>About</NavLink></li>
                        {user && (
                            <>
                                <li><NavLink to="/AddCar" className={({ isActive }) => isActive ? "text-primary" : ''}>Add Car</NavLink></li>
                                <li><NavLink to="/MyCars" className={({ isActive }) => isActive ? "text-primary" : ''}>My Cars</NavLink></li>
                                <li><NavLink to="/MyBookings" className={({ isActive }) => isActive ? "text-primary" : ''}>My Bookings</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>
                {/* Logo */}
                <Link to="/" className='cursor-pointer ml-2 lg:ml-0 flex items-center gap-1 size-20'>
                    <img src={logo} alt="logo.png" />
                </Link>
            </div>

            {/* Navbar center links */}
            <div className="navbar-center hidden lg:flex xl:text-xl">
                <ul className="flex gap-5 px-1">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ''}>Home</NavLink></li>
                    <li><NavLink to="/AvailableCars" className={({ isActive }) => isActive ? "text-primary" : ''}>Available Cars</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-primary" : ''}>About</NavLink></li>
                    {user && (
                        <>
                            <li><NavLink to="/AddCar" className={({ isActive }) => isActive ? "text-primary" : ''}>Add Car</NavLink></li>
                            <li><NavLink to="/MyCars" className={({ isActive }) => isActive ? "text-primary" : ''}>My Cars</NavLink></li>
                            <li><NavLink to="/MyBookings" className={({ isActive }) => isActive ? "text-primary" : ''}>My Bookings</NavLink></li>
                        </>
                    )}
                </ul>
            </div>

            {/* Navbar end */}
            <div className="navbar-end gap-5 xl:text-xl">
                {/* Theme toggle button */}
                <button className="btn btn-ghost btn-circle" onClick={handleThemeToggle}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>

                {!user ? (
                    <NavLink to="/signin" className={({ isActive }) => isActive ? "text-primary" : 'hover:text-primary'}>
                        SignIn
                    </NavLink>
                ) : (
                    <a onClick={handleSubmit} className="cursor-pointer hover:text-primary">
                        SignOut
                    </a>
                )}

                {user && (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="" src={user?.photoURL} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
