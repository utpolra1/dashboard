import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Router = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        
        </>
    );
};

export default Router;