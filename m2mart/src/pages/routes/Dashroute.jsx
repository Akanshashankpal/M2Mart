import React from 'react';
import Layout from '../Dashboard/Layout';
import { Route, Routes } from 'react-router-dom';
import NewDashborad from '../Dashboard/NewDashborad';

const Dashroute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<NewDashborad/>}/>
            </Routes>
        </div>
    );
}

export default Dashroute;
