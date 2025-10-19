import React, { use, useState } from 'react';
import { Link, Links } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { toast } from 'react-toastify';


const Register = () => {
    const { createUser, setUser } = use(AuthContext)
    const [show, setShow] =useState(false)
    const [nameError, setNameError] = useState('')

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        if(name.length < 5){
            return setNameError('Name should be more then 5 character')
        } else{
            setNameError('')
        }

        createUser( name, photo, email, password)
        .then(result => {
            setUser(result.user);
            toast.success('Register successful');
        })
        .catch(error => {
            toast.error(error.code);
            console.log(error.message);
        })
    }

    return (
        <>
        <title>The Dragon News - Register</title>
        <div className="hero -mt-15 min-h-screen">
            <div className="w-[40%] rounded-[0.7rem] bg-white overflow-hidden shadow ">
                <div>
                    <h1 className="text-3xl text-center pt-6 font-bold text-primary">Register your account</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                {/* Name */}
                                <label className="label">Your Name</label>
                                <input name='name' type="text" className="input w-full" placeholder="Enter your name" />
                                { nameError && <p className='text-red-500 text-[0.8rem]'> {nameError} </p> }

                                {/* Photo URL */}
                                <label className="label">Photo URL</label>
                                <input name='photo' type="text" className="input w-full" placeholder="Enter your password" />

                                {/* Email */}
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input w-full" placeholder="Enter your email address" />

                                {/* Password */}
                                <div className='relative'>
                                    <label className="label">Password</label>
                                    <input name='password' type={ show ? "text" : "password" } className="input w-full" placeholder="Enter your password" required/>
                                    <span onClick={()=> setShow(!show) } className='absolute text-[1rem] right-[1rem] top-[2rem] cursor-pointer z-50 '> { show ? <FaEye/> : <IoEyeOff/> } </span>
                                </div>

                                <label className="label mt-2 flex items-center"> <input type="checkbox" className="checkbox text-gray-500" /> Accept <span className='font-semibold'>Term & Conditions</span> </label>

                                <button type='submit' className="btn btn-primary mt-4">Register</button>
                            </fieldset>
                        </form>
                        <p className='text-gray-500 text-center'>Already have an account? Please  <Link to='/auth/login'className='text-orange-400 hover:text-orange-500 hover:link font-semibold'>Log-in</Link>  </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;