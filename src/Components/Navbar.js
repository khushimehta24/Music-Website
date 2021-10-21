import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/CSS/Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <span className="playIn">
                            Play In <span className="and">and</span> Tune Out
                        </span>
                    </a>
                    <div className="collapse Quotediv" id="navbarSupportedContent">
                        <span className='quote'>Where words leave music begins</span>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
