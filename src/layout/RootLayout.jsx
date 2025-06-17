import React, { createContext, useEffect, useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import Navbar from '../component/Navbar';
import { auth } from '../firebase/firebase.config';
import { provider } from '../firebase/GoogleAuthProvider';
import Footer from '../component/Footer';
import axios from 'axios';

export const context = createContext();

const RootLayout = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [paidBills, setPaidBills] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            if (currentUser?.email) {
                const userData = { email: currentUser.email }
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, userData, {
                    withCredentials: true
                })
                    .then(res => console.log(res.data))
                    .catch(error => console.log(error))
            }
            console.log("user int he rootLayout", currentUser)
        })
        return () => unsubscribe()
    }, [])

    const handleSignUp = (email, password, url, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async () => {
                await updateProfile(auth.currentUser, {
                    photoURL: url,
                    displayName: name,
                })
                await signOut(auth);
                toast.success('SignUp SuccessFully!');
                navigate("/signin")
            })
            .catch((error) => {
                toast.error(`${error.message}`);
            })
    }

    const handleSignIn = (email, password, onSuccess) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast.success('SignIn SuccessFully!');
                setUser(userCredential.user);
                if (onSuccess) onSuccess()
            })
            .catch((error) => {
                toast.error(`${error.message}`);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success('SignOut SuccessFully!');
                navigate("/")
            })
            .catch((error) => {
                toast.error(`${error.message}`);
            })
    }

    const handleGoogleSignIn = (onSuccess) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                toast.success('SignIn SuccessFully with google!');
                setUser(result.user)
                if (onSuccess) onSuccess()
            })
            .catch((error) => {
                toast.error(`${error.message}`);
            })
    }

    const handleUpdateProfile = (name, url) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
        })
            .then(() => {
                toast.success('Update Profile Successfully');
                navigate('/profile')
            })
            .catch((error) => {
                toast.error(`${error.message}`);
            })
    }

    const contextValue = {
        user,
        loading,
        paidBills,
        setPaidBills,
        setUser,
        handleSignUp,
        handleSignIn,
        handleSignOut,
        handleGoogleSignIn,
        handleUpdateProfile
    }
    return (
        <div>
            < Toaster position='top-right' />
            <context.Provider value={contextValue}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </context.Provider>
        </div>
    );
};

export default RootLayout;