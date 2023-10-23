import React, {useState} from "react";
import {FiMenu,FiX} from 'react-icons/fi'
import './navbar.css'

export default function Navbar() {

    const [showMenu,setShowMenu] = useState(false)

    const toggleMenu = () =>{
        setShowMenu(!showMenu)

    }
    

  return (
    <>
      <nav className="navbar">
        <div className="logo">
            <h3>Saad Shaikh</h3>
        </div>
        <div className={showMenu ? " menu menu-mobile" : "menu"}>
            <ul className="menu-list ">
                <li><a href="/">Home</a></li>
                <li><a href="/">Gallery</a></li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Services</a></li>
            </ul>
        </div>
        <div className="menu-icon">
        <p onClick={toggleMenu}>{showMenu ? <FiX/> : <FiMenu/>}</p>
        </div>
      </nav>
    </>
  );
}
