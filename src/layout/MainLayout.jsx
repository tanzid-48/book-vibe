import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div  className="w-11/12 md:w-10/12 mx-auto">
           <Navbar></Navbar> 
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;