import React, { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { context } from '../layout/RootLayout';
import LoadingSpinner from '../component/LoadingSpinner';


const SignIn = () => {
    const contextData = useContext(context);
    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef();

    if (!contextData || !contextData.handleSignUp) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    const { handleSignIn, handleGoogleSignIn } = contextData || {};
    const from = location.state?.from || "/";
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleSignIn(email, password, () => {
            navigate(from)
        });
    }
    const handleGoogleSubmit = () => {
        handleGoogleSignIn(() => {
            navigate(from)
        })
    }

    return (
        <div className="my-10 w-full max-w-md  space-y-3  mt-40 border border-white rounded-lg shadow-md p-4  mx-auto hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer">
            <h1 className="text-2xl font-bold text-center">SignIn</h1>
            <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block">Email</label>
                    <input type="email" ref={emailRef} name="email" id="username" placeholder="Email" className="outline w-full px-4 py-3 rounded-md" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block">Password</label>
                    <input type="text" name="password" id="password" placeholder="Password" className="outline w-full px-4 py-3 rounded-md" />
                    <div className="flex justify-end text-xs">
                        <a className='cursor-pointer hover:underline'>
                            Forgot Password?
                        </a>

                    </div>
                </div>
                <button type='submit' className="btn bg-primary w-full">Sign In</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16"></div>
                <p className="px-3 text-sm">SignIn with Google</p>
                <div className="flex-1 h-px sm:w-16 "></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button onClick={() => handleGoogleSubmit()} aria-label="Log in with Google" className="cursor-pointer hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current hover:text-primary">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
            </div>
            <p className="text-xs text-center sm:px-6">Don't have an account?
                <Link to="/signup" rel="noopener noreferrer" href="#" className="underline ml-1 hover:text-primary">Sign Up</Link>
            </p>
        </div>
    );
};

export default SignIn;