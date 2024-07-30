const SignUpPage = () => {
    return ( 
        <div className="signup">
            <h1>Sign Up</h1>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Sign Up</button>
            <p>Already have an account? <a href="/">Login</a></p>
        </div>
     );
}
 
export default SignUpPage;