import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3 text-[1.2rem] text-primary'>Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn join-item bg-white justify-start gap-2 text-accent"> <FaFacebookF className="bg-base-300 p-1 text-[1.6rem] rounded-full text-blue-600" />  Facebook</button>
                <button className="btn join-item bg-white justify-start gap-2 text-accent"> <FaTwitter   className="bg-base-300 p-1 text-[1.6rem] rounded-full text-sky-500" />   Twitter</button>
                <button className="btn join-item bg-white justify-start gap-2 text-accent"> <FaInstagram className="bg-base-300 p-1 text-[1.6rem] rounded-full text-pink-500" />  Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;

//size={24}