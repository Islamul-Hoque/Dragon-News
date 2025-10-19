import React from 'react';
import { Link,  } from 'react-router';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log( {email, password});
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
                            <input name='email' type="email" className="input w-full" placeholder="Enter your email address" />

                            <label className="label">Password</label>
                            <input name='password' type="password" className="input w-full" placeholder="Enter your password" />

                            <button className="btn btn-primary text-white mt-4">Login</button>
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