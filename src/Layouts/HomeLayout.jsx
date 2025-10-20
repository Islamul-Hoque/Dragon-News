import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homeLayout/LeftAside';
import RightAside from '../Components/homeLayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const { state } =useNavigation()
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
                <aside className='col-span-3 sticky top-4 h-fit'> <LeftAside/> </aside>
                <section className='col-span-6'> 
                    { state == "loading" ? <Loading/> : <Outlet/> } 
                </section>
                <aside className='col-span-3 sticky top-4 h-fit'> <RightAside/> </aside>
            </main>
        </div>
    );
};

export default HomeLayout;

//*:border