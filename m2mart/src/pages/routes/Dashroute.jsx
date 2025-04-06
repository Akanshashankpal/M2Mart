import React from 'react';
import Layout from '../Dashboard/Layout';
import { Route, Routes } from 'react-router-dom';
import NewDashborad from '../Dashboard/NewDashborad';
import Home from '../main/Home';
import APIcall from '../main/APIcall';
import APIcall1 from '../main/APIcall1';
import APIcall2 from '../main/APIcall2';
import Aboutus from '../main/Aboutus';
import Contactus from '../main/Contactus';
import Services from '../main/Services';
import ContactUs from '../main/Contactus';
import Cart from '../Dashboard/Cart';
import Checkout from '../Dashboard/Checkout';

const Dashroute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<NewDashborad/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/fruit/:slug' element={<APIcall/>}/>
                <Route path='/dairy/:slug' element={<APIcall1/>}/>
                <Route path='/vegetable/:slug' element={<APIcall2/>}/>
                {/* <Route  path='/about' element={<Aboutus/>}/>
                <Route  path='/contact' element={<Contactus/>}/>
                <Route  path='/services' element={<Services/>}/> */}
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                


            </Routes>
        </div>
    );
}

export default Dashroute;
