import React, { use, useState } from 'react';
import { Link, Links, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { User } from 'lucide-react';
import { sendEmailVerification } from 'firebase/auth';


const Register = () => {
    const { createUser, setUser,updateUser } = use(AuthContext)
    const [show, setShow] =useState(false)
    const [nameError, setNameError] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        setError('')
        const displayName = e.target.name.value
        const photoURL = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        const terms = e.target.terms.checked

        if (displayName.trim().length < 5) {
            return setNameError('Name must be at least 5 characters long.');
        } else {
            setNameError('');
        }

        // Check email, password, Error 
        if (!email) {
            return setError('Please enter your email address.');
        } 
        if (!password) {
            return setError('Please enter your password.');
        }
        if(!terms){
            return setError('Please accept our term and condition')
        }


        createUser( email, password)
            .then(result => {
                const user = result.user
                sendEmailVerification(result.user)
                    .then(()=> {
                        toast.info('Verification email sent! Please verify before logging in.')
                        navigate('/')
                    })

                updateUser({displayName, photoURL})
                    .then(()=> {
                        setUser({...user ,displayName, photoURL});
                        navigate('/')
                    })
                    .catch(error => {
                        toast.error(error.message)
                        setUser(user)
                    })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    setError('This email is already registered!');
                } 
                else if (error.code === 'auth/weak-password') {
                    setError('Password should be at least 6 characters.');
                } 
                else {
                    setError('Something went wrong. Please try again later.');
                }
            });
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
                                <input name='photo' type="text" className="input w-full" placeholder="Enter your photo URL" />

                                {/* Email */}
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input w-full" placeholder="Enter your email address" />

                                {/* Password */}
                                <div className='relative'>
                                    <label className="label">Password</label>
                                    <input name='password' type={ show ? "text" : "password" } className="input w-full" placeholder="Enter your password" required/>
                                    <span onClick={()=> setShow(!show) } className='absolute text-[1rem] right-[1rem] top-[2rem] cursor-pointer z-50 '> { show ? <FaEye/> : <IoEyeOff/> } </span>
                                </div>

                                <label className="label mt-2 flex items-center"> <input name="terms" type="checkbox" className="checkbox text-gray-500" /> Accept our <span className='font-semibold'>Term & Conditions</span> </label>

                                <button type='submit' className="btn btn-primary mt-4">Register</button>
                            </fieldset>
                        </form>
                        <p className='text-red-500 text-[0.8rem]'> {error} </p>
                        <p className='text-gray-500 text-center'>Already have an account? Please  <Link to='/auth/login'className='text-orange-400 hover:text-orange-500 hover:link font-semibold'>Log-in</Link>  </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;