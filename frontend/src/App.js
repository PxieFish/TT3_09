import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/dashboard';
import Preferences from './components/Preferences/preferences';
import useToken from './components/App/useToken';

function setToken(userToken) {
    localStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

function App() {

    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className='wrapper'>
            <h1>Application</h1>
            <a class='button' href='/Login' onClick={() => localStorage.clear('token')}>Logout</a>

            <BrowserRouter>

                <nav>
                    <ul>
                        <li><a href='/Dashboard'>Dashboard</a></li>
                        <li><a href='/Preferences'>Preferences</a></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/Dashboard' element={<Dashboard />} />
                    <Route path='/Preferences' element={<Preferences />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;