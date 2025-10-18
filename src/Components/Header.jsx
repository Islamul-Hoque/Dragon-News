import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='mt-10 mb-4'><img className='w-[80%] mx-auto' src={logo} alt="" /></div>
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-medium mt-2'> { format(new Date(), "EEEE,") } <span className=' text-accent '>{ format(new Date(), "MMMM dd, yyyy") }</span></p>
        </div>
    );
};

export default Header;