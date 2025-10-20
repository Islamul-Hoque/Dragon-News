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
import Loading from '../Pages/Loading';


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: '',
                Component: Home
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: ()=> fetch('/news.json'),
                hydrateFallbackElement: <Loading></Loading>
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
        element: <PrivateRoute> <NewsDetails/> </PrivateRoute>,
        loader: ()=> fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>
    },
]);

export default router;
