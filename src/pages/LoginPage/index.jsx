import React from 'react'
import { Link } from 'react-router-dom'
import './login.scss'

const LoginPage = () => {
  return (
    <div className='body_login'>
        <div class="center_login">
            <h1>Login</h1>
            <form method="post">
                <div class="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Username</label>
                </div>
                <div class="txt_field">
                    <input type="password" required/>
                    <span></span>
                    <label>Password</label>
                </div>
                <div class="pass">Forgot Password?</div>
                <input type="submit" value="Login"/>
                <div class="signup_link">
                    Not a member? <Link to={'/register'}>Signup</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage