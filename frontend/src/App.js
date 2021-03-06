import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import CreatePost from './components/CreatePost'
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import useToken from './components/App/useToken';
import EditPost from './components/EditPost';

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
            <h1 style='text-align:center'>Social Engagement!</h1>
            <a class='button' href='/Login' onClick={() => localStorage.clear('token')}>Logout</a>

            <BrowserRouter>

                <nav>
                    <ul>
                        <li><a href='/Homepage'>Homepage</a></li>
                        <li><a href='/Dashboard'>Dashboard</a></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/Homepage' element={<Homepage />} />
                    <Route path='/Dashboard' element={<Dashboard />} />
                    <Route path='/createPost' element={<CreatePost/>}/>
                    <Route path='/editPost' element={<EditPost/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
