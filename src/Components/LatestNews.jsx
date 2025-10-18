import React from 'react';
import Marquee from "react-fast-marquee";
const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 p-3 my-3 bg-base-200'>
            <p className='text-base-100 py-2 px-4 bg-secondary'>Latest</p>

            <Marquee className='flex gap-5' pauseOnHover={true} speed={50}>
                <span className='font-medium'> Lorem ipsum, dolor sit consectetur adipisicing elit.</span>
                <span className='font-medium'> Lorem ipsum, dolor sit consectetur adipisicing elit.</span>
                <span className='font-medium'> Lorem ipsum, dolor sit consectetur adipisicing elit.</span>
            </Marquee>
        </div>
    );
};

export default LatestNews;