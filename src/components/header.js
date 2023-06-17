import React, { useState } from 'react'
import { LOGO_URL, LOGO_URL_ALT } from '../utils/contents';
import { useState } from 'react';

const Header = () => {
    const [btnName, setBtnName] = useState("login");
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL} alt={LOGO_URL_ALT} />
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnName === "login" ? setBtnName("logout") : setBtnName("login");
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
