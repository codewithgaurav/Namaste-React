import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useOnlineStatus } from '../../utils/useOnlineStatus';
import { LOGO_URL, LOGO_URL_ALT } from '../../utils/contents';
import './Header.css';

const Header = () => {
    const [btnName, setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();

    return (
        <nav className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL} alt={LOGO_URL_ALT} />
            </div>
            <div className="navItems">
                <ul >
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/" style={{ textDecoration: "inherit" }}>Home</Link></li>
                    <li><Link to='/about' style={{ textDecoration: 'inherit' }}>About Us </Link></li>
                    <li><Link to="/contact" style={{ textDecoration: 'inherit' }}>Contact Us</Link></li>
                    <li><Link to="/Grocery" style={{ textDecoration: 'inherit' }}>Grocery</Link></li>
                    <li><Link to="/Cart" style={{ textDecoration: 'inherit' }}>Cart</Link></li>
                    <button className="login-btn" onClick={() => {
                        btnName === "login" ? setBtnName("logout") : setBtnName("login");
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </nav >
    )
}

export default Header;
