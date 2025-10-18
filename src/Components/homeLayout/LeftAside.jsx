import React, { Suspense } from 'react';
import Category from './Category';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<div className="flex justify-center bg-[#f7f7f7] py-10"> <span className="loading loading-dots loading-xl"></span> </div>}>
                <Category/>
            </Suspense>
        </div>
    );
};

export default LeftAside;