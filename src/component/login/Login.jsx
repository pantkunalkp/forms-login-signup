import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className = "login-form">
        <form className = "login-form-main">
            
            <input type = "text" placeholder = "username"  required/> <br/>
            
            <input type = "password" placeholder = "password" required /> <br/>
            <button>Login</button>
            <p>Not Registered? <span>Create an account</span></p>
        </form>
        
            
        </div>
    )
}

export default Login
