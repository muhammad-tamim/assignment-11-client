import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';
import { context } from '../layout/RootLayout';

const Footer = () => {
    const { user } = useContext(context);

    return (
        <footer className="px-4 py-10 lg:px-10 bg-base-100 border-t border-base-300 shadow-sm">
            {/* Main grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                {/* Logo */}
                <div className="flex justify-center lg:justify-start">
                    <Link to="/" className="cursor-pointer flex items-center gap-2 text-2xl xl:text-4xl">
                        <img src={logo} alt="Logo" className="max-h-12" />
                    </Link>
                </div>

                {/* Pages */}
                <div className="text-center lg:text-left">
                    <h1 className="footer-title">Pages:</h1>
                    <ul className="flex flex-col gap-1">
                        <li className="hover:text-primary">
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ''}>Home</NavLink>
                        </li>
                        <li className="hover:text-primary">
                            <NavLink to="/AvailableCars" className={({ isActive }) => isActive ? "text-primary" : ''}>Available Cars</NavLink>
                        </li>
                        {user && (
                            <>
                                <li className="hover:text-primary">
                                    <NavLink to="/AddCar" className={({ isActive }) => isActive ? "text-primary" : ''}>Add Car</NavLink>
                                </li>
                                <li className="hover:text-primary">
                                    <NavLink to="/MyCars" className={({ isActive }) => isActive ? "text-primary" : ''}>My Cars</NavLink>
                                </li>
                                <li className="hover:text-primary">
                                    <NavLink to="/MyBookings" className={({ isActive }) => isActive ? "text-primary" : ''}>My Bookings</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Legal */}
                <div className="text-center lg:text-left">
                    <h6 className="footer-title">Legal</h6>
                    <ul className="flex flex-col gap-1">
                        <li><a href="#" className="hover:text-primary">Terms of use</a></li>
                        <li><a href="#" className="hover:text-primary">Privacy policy</a></li>
                        <li><a href="#" className="hover:text-primary">Cookie policy</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="text-center lg:text-left">
                    <h1 className="footer-title">Contact Info:</h1>
                    <ul className="flex flex-col gap-1">
                        <li>Email: <a href="mailto:support@repidride.com" className="hover:text-primary">support@repidride.com</a></li>
                        <li>Phone: <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a></li>
                        <li>Address: 123 Main St, Ride City, FL 12345</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="text-center lg:text-left">
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="w-full max-w-xs mx-auto lg:mx-0">
                            <label className="text-sm">Enter your email address</label>
                            <div className="join mt-2">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item w-full" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </section>

            {/* Copyright */}
            <h1 className="text-center pt-10 text-sm lg:text-lg font-semibold">
                © {new Date().getFullYear()} Rapid Ride Ltd. All rights reserved.
            </h1>

            {/* Social Icons */}
            <div className="flex justify-center gap-5 pt-5">
                <a href='https://twitter.com/'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current hover:text-primary">
                        <path
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                </a>
                <a href='https://www.youtube.com/'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current hover:text-primary">
                        <path
                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                </a>
                <a href='https://www.facebook.com/'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current hover:text-primary">
                        <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
