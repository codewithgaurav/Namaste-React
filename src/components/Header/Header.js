import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { useOnlineStatus } from '../../utils/useOnlineStatus';
import { LOGO_URL, LOGO_URL_ALT } from '../../utils/contents';
import UserContext from '../../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnName, setBtnName] = useState("login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    // Subscribing to the store using Selector.
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);

    return (
        <nav className="flex w-full justify-between items-center overflow-y-hidden sticky top-0 z-50 bg-gradient-to-br from-blue-900 via-red-500 to-orange-300 shadow-lg shadow-[ 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)] ">
            <div className="logo-container p-1">
                <Link to="/" >
                    <div className="logoContainer">
                        <img className="w-[120px] object-cover rounded-[200px] " src={LOGO_URL} alt={LOGO_URL_ALT} />
                    </div>
                </Link>
            </div>
            <div className="navItems">
                <ul className="flex ">
                    <li className="px-4 hover:text-white duration-300 decoration-inherit text-xl ">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="px-4 hover:text-white duration-300 decoration-inherit text-xl">
                        <Link to='/about' style={{ textDecoration: 'inherit' }}>About Us </Link>
                    </li>
                    <li className="px-4 hover:text-white duration-300 decoration-inherit text-xl">
                        <Link to="/contact" style={{ textDecoration: 'inherit' }}>Contact Us</Link>
                    </li>
                    <li className="px-4 hover:text-white duration-300 decoration-inherit text-xl">
                        <Link to="/Grocery" style={{ textDecoration: 'inherit' }}>Grocery</Link>
                    </li>
                    <li className="px-4 hover:text-white duration-300 decoration-inherit text-xl">
                        <Link to="/Cart" style={{ textDecoration: 'inherit' }}>Cart({cartItems.length})</Link>
                    </li>

                    <button className="login-btn mx-5 font-semibold rounded-3xl cursor-pointer hover:text-white duration-100 bg-sky-600 w-20 h-7"
                        onClick={() => {
                            btnName === "login" ? setBtnName("logout") : setBtnName("login");
                        }}>
                        {btnName}
                    </button>
                    <li className="font-semibold px-4" >
                        <h4>User: {loggedInUser}</h4>
                    </li>
                    <li className="text-lg">
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>

                </ul>
            </div>
        </nav >
    )
}

export default Header;
