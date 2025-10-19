import React from 'react';
import { Link, Links } from 'react-router';


const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
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

                                {/* Photo URL */}
                                <label className="label">Photo URL</label>
                                <input name='photo' type="text" className="input w-full" placeholder="Enter your password" />

                                {/* Email */}
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input w-full" placeholder="Enter your email address" />

                                {/* Password */}
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input w-full" placeholder="Enter your password" />

                                <label className="label mt-2 flex items-center"> <input type="checkbox" className="checkbox text-gray-500" /> Accept <span className='font-semibold'>Term & Conditions</span> </label>

                                <button className="btn btn-primary mt-4">Register</button>
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