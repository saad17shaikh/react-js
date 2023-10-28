import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h3>
            <Link to="/">
            Saad <span>Shaikh</span>
            </Link>
          </h3>
        </div>
        <div className={showMenu ? " menu menu-mobile" : "menu"}>
          <ul className="menu-list">
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/Github">Github</NavLink>
            </li>
          </ul>
        </div>
        <div className="menu-icon">
          <p onClick={toggleMenu}>{showMenu ? <FiX /> : <FiMenu />}</p>
        </div>
      </nav>
    </>
  );
}
