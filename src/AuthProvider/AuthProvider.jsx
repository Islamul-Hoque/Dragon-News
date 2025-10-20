import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const GitHubProvider = new GithubAuthProvider()

const AuthProvider = ( {children} ) => {
    const [ user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user, loading);

    // Create user with email & password
    const createUser = ( email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }

    // Sign in with Email & password 
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Update Profile
    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    //Sign out 
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // Sign in with Google
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup( auth, googleProvider )
    }

    // Sign in with GitHub
    const GitHubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, GitHubProvider )
    }

    // Forgot password
    const ForgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // Get current user info
    useEffect(()=> {
        // set the observer 
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
            const email = currentUser.email || currentUser.providerData?.[0]?.email;
                setUser({ ...currentUser, email });
            } else {
                setUser(null);
            }
            console.log(currentUser);
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
        updateUser,
        googleSignIn,
        GitHubSignIn,
        signOutUser,
        ForgotPassword
    }

    return (
        <AuthContext value={userInfo}> 
            {children}
        </AuthContext>
    );
};

export default AuthProvider;