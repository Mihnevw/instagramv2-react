import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import * as AuthService from '../services/AuthService';

import './Register.css';

function Register() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const registerSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return; //Тук return-ваме, за да не продължи кода и да се логнем макар че паролите не съвпадат
        }

        setTimeout(() => {
            AuthService.register(email, password, confirmPassword)
                .then((data) => {
                    login(data);
                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')
                    navigate('/')
                })
                .catch((err) => {
                    setError(err.message)
                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')
                })
        }, 1000)
    }

    return (
        <div className="register">
            <form onSubmit={registerSubmit} style={formStyle} method="POST">
                <h1>Register</h1>
                {error && <div style={errorStyle}>{error}</div>}
                <div className="email_register">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password_register" style={inputGroupStyle}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="confirmpass_register" style={inputGroupStyle}>
                    <label htmlFor="password">Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button type="submit" style={buttonStyle}>Register</button>
            </form>
        </div>
    )
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
};

const inputGroupStyle = {
    marginBottom: '15px',
}

const buttonStyle = {
    padding: '10px',
    backgroundColor: 'purple',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};


const errorStyle = {
    color: '#D8000C',
    backgroundColor: '#FFBABA',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '15px',
    textAlign: 'center',
};


export default Register;