import React from 'react';
import Layout from '../Dashboard/Layout';
import { Route, Routes } from 'react-router-dom';
import NewDashborad from '../Dashboard/NewDashborad';
import Home from '../main/Home';

const Dashroute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<NewDashborad/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default Dashroute;
