import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/XfWqFdTr/error-Page-Image.jpg')] bg-no-repeat bg-cover h-screen flex flex-col items-center justify-center text-center p-5">
            <div className='max-w-xl'>

                <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-2xl font-medium mb-6">
                    Oops! Looks like our cars hasn't come this page yet. Let’s drive back to the home page.
                </p>
            </div>
            <Link
                to="/"
                className="btn btn-primary">
                Home
            </Link>
        </div>
    );
};

export default ErrorPage;