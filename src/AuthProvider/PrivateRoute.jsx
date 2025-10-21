import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';
import { toast } from 'react-toastify';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log( location );
    const providerId = user?.providerData?.[0]?.providerId;
    const isThirdParty = providerId === 'google.com' || providerId === 'github.com';

    // ✅ Prevent duplicate toast
    const toastRef = useRef(false);

    // 🔥 Hook always top-level
    useEffect(() => {
        if (user && !user.emailVerified && !isThirdParty && !loading && !toastRef.current) {
            toast.warning('Please verify your email before accessing content.');
            toastRef.current = true;
        }
    }, [user, isThirdParty, loading]);

    // ✅ Conditional rendering
    if (loading) return <Loading />
    if (!user) return <Navigate to='/auth/login' state={{ from: location?.pathname }} />
    if (user.emailVerified || isThirdParty) return children;

    // 🔥 unverified user UI
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h2 className="text-2xl font-semibold text-red-500">Your email is not verified!</h2>
            <p className="text-gray-600 mt-2 w-[80%] "> Please check your inbox and verify your email to access this page. </p>
            <button onClick={() => (window.location.href = '/')} className="btn btn-primary text-white mt-4" > Go Back Home</button>
        </div>
    );
};

export default PrivateRoute;  