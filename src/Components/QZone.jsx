import React from 'react';
import ClassImg from  '../../src/assets/class.png'
import PlaygroundImg from  '../../src/assets/playground.png'
import SwimmingImg from  '../../src/assets/swimming.png'
import BgImg from  '../../src/assets/bg.png'
const QZone = () => {
    return (
        <>
            <div className='bg-base-300 p-4 rounded-[0.6rem]'>
                <h2 className='text-primary font-semibold my-3 text-[1.2rem]'>Q-Zone</h2>

                <div className='space-y-6 flex flex-col justify-center'>
                    <img src={ClassImg} alt="" />
                    <img src={PlaygroundImg} alt="" />
                    <img src={SwimmingImg} alt="" />
                </div>
            </div>
            <div>
                {/* <img className='mt-5' src={BgImg} alt="" /> */}
            </div>
        </>
    );
};

export default QZone;