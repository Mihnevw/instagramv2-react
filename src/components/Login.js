import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import * as AuthService from '../services/AuthService';
import './Login.css';

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            AuthService.login(email, password)
                .then((data) => {
                    login(data);
                    setSuccess('Successful login')
                    setError('')

                    navigate('/')
                })
                .catch((err) => {
                    setSuccess('')
                    setError('Invalid email or password')
                    setEmail('')
                    setPassword('')
                })
        }, 1000)
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit} method="POST">
                <h1>Login</h1>
                {error && <div style={errorStyle}>{error}</div>}

                {success && <div style={successStyle}>{success}</div>}
                <div className="email_login">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password_login">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" style={buttonStyle}>Login</button>
            </form>
        </div>
    )
}


const errorStyle = {
    color: '#D8000C',
    backgroundColor: '#FFBABA',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '15px',
    textAlign: 'center',
};

const successStyle = {
    color: '#4F8A10',
    backgroundColor: '#DFF2BF',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '15px',
    textAlign: 'center',
};

const buttonStyle = {
    padding: '10px',
    backgroundColor: 'purple',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};



export default Login;