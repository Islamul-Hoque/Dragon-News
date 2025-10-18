import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json())

const Category = () => {
    const categories = use(categoryPromise)
    // console.log(categories);

    return (
        <div>
            <h2 className='font-semibold text-primary'>All Category </h2>

            <div className='grid gap-2 mt-3  '>
                {
                    categories.map(category => <NavLink to={`/category/${category.id}`} className='text-accent btn bg-white font-semibold border-0 shadow-none hover:bg-base-200' key={category.id}> {category.name} </NavLink> )
                }
            </div>
        </div>
    );
};

export default Category;