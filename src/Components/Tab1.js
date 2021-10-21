import React from 'react'
import './assets/CSS/tab1.css'
import HelloImg from './assets/helloImg.png'
function Tab1() {
    return (
        <div className="containerTab">
            <div className='tab1cont'>
                <div className="tab1">
                    <div className="textCon">
                        <h1 className="helloTxt">Hello, Khushi</h1>
                        <p className="quoteTxt">Take a deep breath, and allow the music to flow through you. Revel in it, allow yourself to awe. When you play, allow the music to break your heart with its beauty.</p>
                    </div>
                    <img src={HelloImg} className='helloImg' />
                </div>
            </div>
        </div>
    )
}

export default Tab1
