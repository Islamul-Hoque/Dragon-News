import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homeLayout/LeftAside';
import RightAside from '../Components/homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header> 
                <Header/> 
                <section className='w-11/12 mx-auto'>
                    <LatestNews/>
                </section>
                <nav className='w-11/12 mx-auto'>
                    <Navbar/>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-4 '>  
                <aside className='col-span-3'> <LeftAside/> </aside>
                <section className='col-span-6'> <Outlet/> </section>
                <aside className='col-span-3'> <RightAside/> </aside>
            </main>
        </div>
    );
};

export default HomeLayout;

//*:border