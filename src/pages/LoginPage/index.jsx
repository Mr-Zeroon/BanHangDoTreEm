import React from 'react'
import './login.scss'

const LoginPage = () => {
  return (
    <div className='content_login'>
        <div class="center">
            <h1>Login</h1>
            <form action="" method="post" class="js-login">
                <div class="form-user">
                    <input id="username" class="js-username" type="text" required/>
                    <span></span>
                    <label>User Name</label>
                </div>
                <div class="form-pass">
                    <input id="password" class="js-password" type="password" required/> 
                    <span></span>
                    <label>PassWord</label>
                </div>
                <div class="pass">Forgot PassWord? </div>
                <button class="Login" type="submit"> Login </button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage