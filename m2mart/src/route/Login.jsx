import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPopup from './LoginPopup';

const Login = () => {
    return (
        <div>
            <Routes>
                <Route path='/*/login' element={<LoginPopup/>}/>
            </Routes>
        </div>
    );
}

export default Login;
