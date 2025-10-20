import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate,  } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { toast } from 'react-toastify';

const Login = () => {
    const { signInUser, ForgotPassword } = use(AuthContext)
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const emailRef = useRef()

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);
    

    const handleLogin = e => {
        e.preventDefault()
        setError('');
        const email = e.target.email.value
        const password = e.target.password.value

        // Check email & password
        if (!email) {
            return setError('Please enter your email address.');
        } 
        if (!password) {
            return setError('Please enter your password.');
        }

        signInUser(email, password)
            .then(result => {
                setError('')
                toast.success('Sign in successful')
                navigate(location.state || '/')
            })
            .catch(error => {
                if (error.code === 'auth/invalid-credential') {
                    setError('Email or password did not match! Please try again.');
                } 
                else if (error.code === 'auth/invalid-email') {
                    setError('Please enter a valid email address.');
                }
                else if (error.code === 'auth/user-not-found') {
                    setError('No account found with this email.');
                }
                else {
                    setError('Something went wrong. Please try again later.');
                }
            });
    }

    const handleForgotPassword = () => {
        const email = emailRef.current.value
        if (!email) {
            return setError('Please enter your email to reset password.')
        }
        ForgotPassword(email)
        .then(()=> {
            toast.success('Password reset email sent! Please check your inbox.')
        })
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    setError('Please enter a valid email address.')
                } else if (error.code === 'auth/user-not-found') {
                    setError('No account found with this email.')
                } else {
                    setError('Something went wrong. Please try again later.')
                }
            })
    }

    return (
        <>
        <title>The Dragon News - Log in</title> 
        <div className="hero -mt-15 bg-base-200 min-h-screen">
            <div className="w-[40%] rounded-[0.7rem] bg-white overflow-hidden shadow">
                <h1 className="text-3xl text-center pt-6 font-bold text-primary">Login your account</h1>
                <div className="card-body">
                    <form onSubmit={ handleLogin }>
                        <fieldset className="fieldset">
                            <label className="label">Email address</label>
                            <input onChange={() => setError('')} ref={emailRef} name='email' type="email" className="input w-full" placeholder="Enter your email address" />

                            <div className='relative'>
                                <label className="label">Password</label>
                                <input onChange={() => setError('')} name='password' type={ show ? "text" : "password" } className="input w-full" placeholder="Enter your password" />
                                <span onClick={()=> setShow(!show) } className='absolute text-[1rem] right-[1rem] top-[2rem] cursor-pointer z-50 '> { show ? <FaEye/> : <IoEyeOff/> } </span>
                            </div>

                            { error && <p className='text-red-500 text-[0.8rem]'> {error} </p> }

                            <div onClick={handleForgotPassword} ><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-primary text-white mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className='text-gray-500 text-center'>Dont’t Have An Account ? <Link to='/auth/register' className='text-orange-400 hover:text-orange-500 hover:link font-semibold'>Register</Link>  </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;