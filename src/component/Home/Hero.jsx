import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div
            className="hero min-h-[70vh] max-w-screen-2xl mx-auto my-5"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co/DPzLwHjC/hero.png)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Drive Your Dreams Today!</h1>
                    <Link to="/AvailableCars"><button className="btn btn-primary">View Available Cars</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;