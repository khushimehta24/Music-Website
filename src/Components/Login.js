import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './assets/CSS/Login.css'
import Bg from './assets/signInUpBg.png'
function Login() {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    return (
        <div class="container">
            <img src={Bg} />
            <div class="login">
                <h3 class="SignIn">Sign In</h3>
                <form class="SignInForm">
                    <div class="inputContainer">
                        <div class="input">
                            <label for="UserName">Username or Email</label>
                            <input type="text" id="UserName" value={UserName} onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div class="input">
                            <label for="PassWord">Password</label>
                            <input type="password" id="PassWord" value={Password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div class="btnContainer">
                        <button class="forgotPwdBtn">Forgotten Password?</button>
                        <Link to={(UserName && Password) ? '/main' : '/'}>
                            <button class="LoginBtn">Login</button>
                        </Link>
                    </div>
                </form>
                <p class="createAcc">Don’t have an account? <Link to='/SignUp'><span class="createAccTxt">Create an account</span></Link></p>
            </div>
            <div class="wrapper">
                <div class="typewriter">
                    Where words fail, music speaks.
                </div>
            </div>
        </div>
    )
}

export default Login
