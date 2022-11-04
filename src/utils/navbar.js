import React from "react";
import useId from '../hooks/useId';
import Home from "../pages/Home";
import Generic from "../pages/Generic";


export const navbar = [
    {
        id: useId,
        title: 'Home',
        path: '/home',
        Element: <Home/>,
        search: '?',
        hidden: false,
        private: false
    },
    {
        id: useId,
        title: 'Properties',
        path: '/properties',
        Element: <Generic/>,
        search: '?',
        hidden: false,
        private: false
    },
    {
        id: useId,
        title: 'Contacts',
        path: '/contacts',
        Element: <Generic/>,
        search: '?',
        hidden: false,
        private: false
    },
    {
        id: useId,
        title: 'SignIn',
        path: '/signin',
        Element: <Generic/>,
        search: '?',
        hidden: true,
        private: false
    },
    {
        id: useId,
        title: 'SignUp',
        path: '/signup',
        Element: <Generic/>,
        search: '?',
        hidden: true,
        private: false
    },
]