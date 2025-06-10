import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';

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

            },
        ]
    }
])

export default Router;