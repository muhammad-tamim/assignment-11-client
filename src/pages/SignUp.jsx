import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { context } from '../layout/RootLayout';
import LoadingSpinner from '../component/LoadingSpinner';


const SignUp = () => {
    const contextData = useContext(context);

    if (!contextData || !contextData.handleSignUp) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    const { handleSignUp, handleGoogleSignIn } = contextData || {};
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from || "/";

    const validatePassword = (password) => {
        if (password.length < 6) {
            return "Password must be at least 6 characters.";
        }
        if (!/[A-Z]/.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!/[a-z]/.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }
        return '';
    };
    const [passwordError, setPasswordError] = useState('')
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.url.value;
        const name = e.target.name.value;
        const passwordChecker = validatePassword(password);
        if (passwordChecker) {
            setPasswordError(passwordChecker)
            return;
        }
        setPasswordError('');
        setLoading(true)
        try {
            await handleSignUp(email, password, url, name);
            navigate('/signin')
        }
        catch (error) {
            toast.error(`${error.message}`);
        }
        finally {
            setLoading(false)
        }



    }
    const handleGoogleSubmit = () => {
        setLoading(true)
        handleGoogleSignIn(() => {
            setLoading(false)
            navigate(from)
        })
    }
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <>
            < Toaster position='top-right' />
            <div className="mx-auto bg-gray-700 my-10 w-full max-w-md p-8 text-white space-y-3 rounded-xl">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-white">Your Name</label>
                        <input type="text" name="name" required id="userName" placeholder="Name" className="outline outline-white w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-white">Photo URL</label>
                        <input type="url" name="url" required id="userUrl" placeholder="URL" className="outline outline-white w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-white">Email</label>
                        <input type="email" name="email" required id="userEmail" placeholder="Email" className="outline outline-white w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-white">Password</label>
                        <input type="text" name="password" required id="password" placeholder="Password" className="outline outline-white  w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        {passwordError && <p className="text-red-400 text-xs mt-1">{passwordError}</p>}
                        <small className="text-xs text-white">Password must contain at least 6 characters, 1 uppercase and 1 lowercase letter.</small>
                    </div>
                    <button type='submit' className="block btn bg-primary w-full">Sign Up</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm">SignUp with Google</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={() => handleGoogleSubmit()} aria-label="Log in with Google" className="p-3 rounded-sm cursor-pointer btn btn-ghost  hover:bg-white hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current hover:text-primary">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 text-white">Already have an account?
                    <Link to="/signin" rel="noopener noreferrer" href="#" className="underline ml-1 text-white">Sign In</Link>
                </p>
            </div>
        </>
    );
};

export default SignUp;