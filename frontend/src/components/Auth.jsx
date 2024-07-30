import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import "../sass/Auth.scss"
const AuthPage = () => {
    return ( 
        <div className="container">
            <div className="login-container">
                <h2>Login</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
                <div className="forgot-password">
                    <a href="/">Forgot Password?</a>
                </div>
                <div className="sign-up">
                    <span>Don't have an account?</span>
                    <a href="/">Sign Up</a>
                </div>
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
            </div>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Sign Up</button>
                <div className="have-account">
                    <span>Already have an account?</span>
                    <a href="/">Login</a>
                </div>
                <div className="terms-and-conditions">
                    <input type="checkbox" id="terms-conditions" />
                    <label htmlFor="terms-conditions">I agree to the Terms and Conditions</label>
                </div>
                <div className="social-media-signup">
                    <button className="facebook-btn">
                        <FontAwesomeIcon icon={faFacebook} />
                        Sign up with Facebook
                    </button>
                    <button className="google-btn"></button>
            </div>
            </div>
        </div>
        
     );
}
 
export default AuthPage;