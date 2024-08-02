import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import "../sass/Auth.scss";
import Vector1 from "../images/undraw_welcoming_re_x0qo (1).svg";
import Vector2 from "../images/undraw_happy_announcement_re_tsm0.svg";
import axios from 'axios';

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');

    const toggleMode = () => {
        setIsSignUp(!isSignUp);
        setError('');
        setSuccess('');
        setPassword('');
        setConfirmPassword('');
        setPasswordStrength('');
    };

    useEffect(() => {
        checkPasswordStrength(password);
    }, [password]);

    const checkPasswordStrength = (password) => {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

        if (strongRegex.test(password)) {
            setPasswordStrength('strong');
        } else if (mediumRegex.test(password)) {
            setPasswordStrength('medium');
        } else {
            setPasswordStrength('weak');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            if (isSignUp) {
                if (password !== confirmPassword) {
                    setError('Passwords do not match');
                    return;
                }
                if (passwordStrength !== 'strong') {
                    setError('Please use a stronger password');
                    return;
                }
                const response = await axios.post('http://localhost:5000/api/auth/signup', {
                    username,
                    email,
                    password
                });
                setSuccess('Signup successful! You can now log in.');
                console.log('Signup successful', response.data);
                // Handle successful signup (e.g., show success message, redirect)
            } else {
                const response = await axios.post('http://localhost:5000/api/auth/login', {
                    username,
                    password
                });
                setSuccess('Login successful!');
                console.log('Login successful', response.data);
                // Handle successful login (e.g., save token, redirect)
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className={`auth-container ${isSignUp ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordStrength && (
                            <div className={`password-strength ${passwordStrength}`}>
                                Password strength: {passwordStrength}
                            </div>
                        )}
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
        </div>
    );
}

export default AuthPage;