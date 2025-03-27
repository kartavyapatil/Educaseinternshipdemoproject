import { Component } from 'react';
import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
export const Router = createBrowserRouter([
    {
        path: '/',
        Component:App,
        children:[
            {
                path:'/',
                Component:Home
            } ,{
                path:'/dashboard',
                Component:Dashboard
            }
        ]
    },{
        path:'/login',
        Component:Login
    },{
        path:'/signup',
        Component:Signup
    }
]);