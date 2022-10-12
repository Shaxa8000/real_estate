import React from "react";
import Home from "../pages/Home";
import Generic from "../pages/Generic";


export const navbar = [
    {
        id: 1,
        title: 'Home',
        path: '/home',
        Element: <Home/>,
        search: '?',
        hidden: false,
        private: false
    },
    {
        id: 2,
        title: 'Properties',
        path: '/properties',
        Element: <Generic/>,
        search: '?',
        hidden: false,
        private: false
    },
    {
        id: 3,
        title: 'Contacts',
        path: '/contacts',
        Element: <Generic/>,
        search: '?',
        hidden: false,
        private: false
    },
    {
        id: 4,
        title: 'SignIn',
        path: '/signin',
        Element: <Generic/>,
        search: '?',
        hidden: true,
        private: false
    },
    {
        id: 5,
        title: 'SignUp',
        path: '/signup',
        Element: <Generic/>,
        search: '?',
        hidden: true,
        private: false
    },
]