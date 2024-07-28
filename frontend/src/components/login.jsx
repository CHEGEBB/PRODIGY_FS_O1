const LoginPage = () => {
    return ( 
        <div className="login">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <p>Don't have an account? <a href="/">Sign Up</a></p>
        </div>
     );
}
 
export default LoginPage;