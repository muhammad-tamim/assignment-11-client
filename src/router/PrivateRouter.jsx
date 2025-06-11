import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { context } from '../layout/RootLayout';
import LoadingSpinner from '../component/LoadingSpinner';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(context)
    const location = useLocation()

    try {
        if (loading) {
            return <LoadingSpinner></LoadingSpinner>
        }
        if (!user) {
            return <Navigate to="/signin" state={{ from: location.pathname }} ></Navigate>
        }
        return children;
    }
    catch (error) {
        return <h1>{error}</h1>
    }
};

export default PrivateRouter;