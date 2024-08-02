import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import "../sass/Auth.scss";
import Vector1 from "../images/undraw_welcoming_re_x0qo (1).svg";
import Vector2 from "../images/undraw_happy_announcement_re_tsm0.svg";
import axios from 'axios';

const AuthPage = ({ handleLogin }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();

    const toggleMode = () => {
        setIsSignUp(!isSignUp);
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            if (isSignUp) {
                if (password !== confirmPassword) {
                    setError('Passwords do not match');
                    setShowMessage(true);
                    setTimeout(() => {
                        setShowMessage(false);
                    }, 3000);
                    return;
                }
                const response = await axios.post('http://localhost:5000/api/auth/signup', {
                    username,
                    email,
                    password
                });
                console.log('Signup successful', response.data);
                setSuccess('Sign up successful! You can now log in.');
                setShowMessage(true);
                setTimeout(() => {
                    setShowMessage(false);
                    setIsSignUp(false);
                }, 3000);
            } else {
                const response = await axios.post('http://localhost:5000/api/auth/login', {
                    email,
                    password
                });
                console.log('Login successful', response.data);
                handleLogin();
                navigate('/dashboard');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }
    };

    return (
        <div className={`auth-container ${isSignUp ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                        <div className="social-media-login">
                            <div className="facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <div className="google">
                                <FontAwesomeIcon icon={faGoogle} />
                            </div>
                        </div>
                    </form>
                    <form className="sign-up-form" onSubmit={handleSubmit}>
                        <h2>Sign Up</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Sign Up</button>
                        <div className="social-media-signup">
                            <div className="facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <div className="google">
                                <FontAwesomeIcon icon={faGoogle} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h2>Welcome Back!</h2>
                        <p>Already have an account? Sign in here!</p>
                        <button className="ghost" onClick={toggleMode}>Sign In</button>
                        <div className="vectorleft">
                            <img src={Vector2} alt="vector" />
                        </div>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h2>Hello, Friend!</h2>
                        <p>Don't have an account? Sign up here!</p>
                        <button className="ghost" onClick={toggleMode}>Sign Up</button>
                        <div className="vector">
                            <img src={Vector1} alt="vector" />
                        </div>
                    </div>
                </div>
            </div>
            {error && <div className={`error-message ${showMessage ? '' : 'hidden'}`}>{error}</div>}
            {success && <div className={`success-message ${showMessage ? '' : 'hidden'}`}>{success}</div>}
        </div>
    );
}

export default AuthPage;