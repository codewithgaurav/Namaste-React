import React, { useEffect, useState } from 'react'
import { LOGO_URL, LOGO_URL_ALT } from '../utils/contents';
import { Link } from "react-router-dom"

const Header = () => {
    const [btnName, setBtnName] = useState("login");

    /* 1. if no dependency array in a useEffect hook => useEffect will be called in every render.
       2. if dependency array is empty => useEffect is called on initial render and just once.  
       3. if dependecy array is [btnName] => called everytime [btnName] is updated.*/
    useEffect(() => {
        console.log("useEffect Called");
    }, [btnName])
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL} alt={LOGO_URL_ALT} />
            </div>
            <div className="navItems">
                <ul>
                    <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li><Link to='/about'>About Us </Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
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
