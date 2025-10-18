import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Layouts/HomeLayout';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';
import Category from '../Components/homeLayout/Category';


const router = createBrowserRouter([
    {
        path: "/",
        // HydrateFallback: <p>Loading</p>,
        Component: HomeLayout,
        children: [
            {
                path: '',
                Component: Home
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: ()=> fetch('/news.json')
            },
        ]
    },
]);

export default router;
