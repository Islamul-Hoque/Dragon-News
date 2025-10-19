import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Layouts/HomeLayout';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';
import Category from '../Components/homeLayout/Category';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AuthLayout from '../Layouts/AuthLayout';
import NewsDetails from '../Pages/NewsDetails';
import PrivateRoute from '../AuthProvider/PrivateRoute';


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
    {
        path: 'auth',
        Component: AuthLayout ,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
        ]
    },
    {
        path: 'news-details/:id',
        loader: ()=> fetch('/news.json'),
        element: <PrivateRoute> <NewsDetails/> </PrivateRoute>
    },
]);

export default router;
