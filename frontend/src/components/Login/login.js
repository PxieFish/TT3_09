import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login.css';
import axios from "axios";

async function loginUser(credentials) {

    try {
        // return fetch('http://localhost:8080/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(credentials)
        // })
        //     .then(data => data.json())

        // let data = await fetch('http://localhost:8080/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(credentials)
        // })
        //
        //
        // data = data.json()



        // let data = await fetch('http://localhost:4000/users/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(credentials)
        // })

        let data = await axios.post('http://localhost:4000/users/login', credentials);


        // data = data.json()
        console.log("mm")
        console.log(data)
        console.log(data.data)

        if (data.data === 'Successful login') {
            return {
                token: data.data
            }
        }

        // return data;
    } catch (error) {
        console.log(error)
    }


}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });

        console.log("H")
        console.log(token)

        if (token !== undefined) {
            setToken(token);
        }

    }

    return(
        <div className='login-wrapper'>
            <h1>Welcome! Please log in.</h1><br/>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type='text' onChange={e => setUserName(e.target.value)} required/>
                </label><br/><br/>
                <label>
                    <p>Password</p>
                    <input type='password' onChange={e => setPassword(e.target.value)} required/>
                </label><br/><br/>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}