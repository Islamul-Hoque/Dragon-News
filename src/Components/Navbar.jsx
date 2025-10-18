import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='grid grid-cols-3 justify-between items-center'>
            <div className="">  </div>
            <div className="flex gap-5 justify-center items-center text-accent ">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="flex items-center justify-end">
                <img src={user} alt="" />
                <button className='btn btn-primary px-8 ml-2'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;