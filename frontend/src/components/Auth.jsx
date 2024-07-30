import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import "../sass/Auth.scss";

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleMode = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className={`auth-container ${isSignUp ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form">
                        <h2>Login</h2>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                        <div className="social-media-login">
                            <button className="facebook-btn">
                                <FontAwesomeIcon icon={faFacebook} />
                                Sign in with Facebook
                            </button>
                            <button className="google-btn">
                                <FontAwesomeIcon icon={faGoogle} />
                                Sign in with Google
                            </button>
                        </div>
                    </form>
                    <form className="sign-up-form">
                        <h2>Sign Up</h2>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button type="submit">Sign Up</button>
                        <div className="social-media-signup">
                            <button className="facebook-btn">
                                <FontAwesomeIcon icon={faFacebook} />
                                Sign up with Facebook
                            </button>
                            <button className="google-btn">
                                <FontAwesomeIcon icon={faGoogle} />
                                Sign up with Google
                            </button>
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
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h2>Hello, Friend!</h2>
                        <p>Don't have an account? Sign up here!</p>
                        <button className="ghost" onClick={toggleMode}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;