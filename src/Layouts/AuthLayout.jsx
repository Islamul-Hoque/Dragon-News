import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className=' bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-5'> <Navbar/> </header>
            <main className='w-11/12 mx-auto'> <Outlet/> </main>
        </div>
    );
};

export default AuthLayout;