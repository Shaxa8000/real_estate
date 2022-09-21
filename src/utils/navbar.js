import React from "react";
import Home from "../pages/Home";


export const navbar = [
    {
        id: 1,
        title: 'Home',
        path: './home',
        Element: <Home/>,
        search: '?',
        hidden: false,
        private: false
    },
     {
        id: 2,
        title: 'Properties',
        path: './properties',
        Element: <div/>,
        search: '?',
        hidden: false,
        private: false
    },
     {
        id: 3,
        title: 'Contacts',
        path: './contacts',
        Element: <div/>,
        search: '?',
        hidden: false,
        private: false
    },
     {
        id: 4,
        title: 'SignIn',
        path: './signin',
        Element: <div/>,
        search: '?',
        hidden: true,
        private: false
    },
     {
        id: 5,
        title: 'SignUp',
        path: './signup',
        Element: <div/>,
        search: '?',
        hidden: true,
        private: false
    },
    
]