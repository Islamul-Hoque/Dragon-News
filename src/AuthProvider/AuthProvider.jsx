import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ( {children} ) => {
    const [ user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user, loading);
    
    //Create user with email & password
    const createUser = (name, photo, email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }

    // Sign in with Email & password 
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Sign out 
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // sign in with Google
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup( auth, googleProvider )
    }

    // Get current user info
    useEffect(()=> {
        // set the observer 
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        // Clear the observer on unmount
        return ()=> {
            unsubscribe()
        }
    }, [])

    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
    }

    return (
        <AuthContext value={userInfo}> 
            {children}
        </AuthContext>
    );
};

export default AuthProvider;