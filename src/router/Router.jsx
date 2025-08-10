import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AvailableCars from '../pages/AvailableCars';
import AddCar from '../pages/AddCar';
import MyCars from '../pages/MyCars';
import MyBookings from '../pages/MyBookings';
import ErrorPage from '../component/ErrorPage';
import PrivateRouter from './PrivateRouter';
import Home from '../pages/Home';
import CarDetails from '../pages/CarDetails';
import LoadingSpinner from '../component/LoadingSpinner';
import About from '../pages/About';

const Router = createBrowserRouter([
    {
        path: '*',
        Component: ErrorPage
    },
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/signIn',
                Component: SignIn
            },
            {
                path: '/signUp',
                Component: SignUp
            },
            {
                path: '/AvailableCars',
                Component: AvailableCars
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/CarDetails/:id',
                Component: CarDetails,
            },
            {
                path: '/AddCar',
                element: (
                    <PrivateRouter>
                        <AddCar></AddCar>
                    </PrivateRouter>
                )
            },
            {
                path: '/MyCars',
                element: (
                    <PrivateRouter>
                        <MyCars></MyCars>
                    </PrivateRouter>
                )
            },
            {
                path: '/MyBookings',
                element: (
                    <PrivateRouter>
                        <MyBookings></MyBookings>
                    </PrivateRouter>
                )
            },

        ]
    }
])

export default Router;