import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import "../sass/Auth.scss";
import Vector1 from "../images/undraw_welcoming_re_x0qo (1).svg";
import Vector2  from "../images/undraw_happy_announcement_re_tsm0.svg";

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
                        <div className="facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                                </div>
                                <div className="google">
                                <FontAwesomeIcon icon={faGoogle} />
                                </div>
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
        </div>
    );
}

export default AuthPage;