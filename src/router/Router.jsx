import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Home from '../component/Home/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

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

        ]
    }
])

export default Router;