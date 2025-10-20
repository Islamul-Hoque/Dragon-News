import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIMG from '../assets/user.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
const Navbar = () => {
    const { user, signOutUser } = use(AuthContext)
    // console.log(user);

    const handleLogOut = ()=> {
        signOutUser()
            .then(() => { 
                toast.success('Log-out successful')
            })
            .catch((error) => {
                toast.error(error.code)
            });
    }
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 justify-between items-center'>
            <div className="hidden md:block"> { user && user.email } </div>
            <div className="flex gap-5 justify-center items-center text-accent ">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="flex items-center justify-end">
                <img className='w-[2.5rem] rounded-full ' src={user ? user?.photoURL : userIMG } alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn btn-primary text-white px-8 ml-2'>Log out</button> : <Link to='/auth/login' className='btn btn-primary text-white px-8 ml-2'>Log-in</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;