import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Home from '../component/Home/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AvailableCars from '../pages/AvailableCars';
import AddCar from '../pages/AddCar';
import MyCars from '../pages/MyCars';
import MyBookings from '../pages/MyBookings';

const Router = createBrowserRouter([
    {
        path: '*',
        // error page
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
                path: '/AddCar',
                Component: AddCar
            },
            {
                path: '/MyCars',
                Component: MyCars
            },
            {
                path: '/MyBookings',
                Component: MyBookings
            },

        ]
    }
])

export default Router;