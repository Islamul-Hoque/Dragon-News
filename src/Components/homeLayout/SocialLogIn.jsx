import React, { use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import {  useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const SocialLogIn = () => {
    const { user, setUser, googleSignIn, GitHubSignIn } = use(AuthContext)
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user)
                toast.success('Google login successful')
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const handleGithubSignIn = () => {
        GitHubSignIn()
            .then(result => {
                setUser(result.user)
                navigate('/')
                toast.success('Github log in successful');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    if (user) return null;
    return (
        <div>
            <h3 className='font-semibold'>Log in with</h3>
            <div className='space-y-3 mt-3'>
                {/* Google */}
                <button onClick={handleGoogleSignIn} className="btn w-full bg-white text-black border-[#e5e5e5] flex items-center justify-center gap-2"> <FcGoogle size={18}/>Login with Google</button>

                {/* GitHub */}
                <button onClick={handleGithubSignIn} className="btn w-full bg-black text-white border-black flex items-center justify-center gap-2"> <FaGithub size={18} />  Login with GitHub </button>

            </div>
        </div>
    );
};

export default SocialLogIn;