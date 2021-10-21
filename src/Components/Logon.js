import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './assets/CSS/Logon.css'
import Bg from './assets/signInUpBg.png'

function Logon() {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    return (
        <div class="container">
            <img src={Bg} />
            <div class="logon">
                <h3 class="SignUp">Sign Up</h3>
                <form class="SignUpForm">
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
                        <Link to={(UserName && Password) ? '/main' : '/SignUp'}>
                            <button class="LogonBtn">Create Account</button>
                        </Link>
                    </div>
                </form>
                <div class="anotherMethods">
                    <div class="or">
                        --------------------------------OR--------------------------------
                    </div>
                    <div class="socials">
                        Sign Up with
                        <div class="socialIcon">
                            <i class="fa fa-google"></i>
                        </div>
                        <div class="socialIcon">
                            <i class="fa fa-facebook"></i>
                        </div>
                        <div class="socialIcon">
                            <i class="fa fa-twitter"></i>
                        </div>
                    </div>
                </div>
                <p class="SignInAcc">Already have an account? <Link to='/'><span class="SignInAccTxt">Sign In</span></Link></p>
            </div>
            <div class="wrapper">
                <div class="typewriter">
                    Where words fail, music speaks.
                </div>
            </div>
        </div>
    )
}

export default Logon
