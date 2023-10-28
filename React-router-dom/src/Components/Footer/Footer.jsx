import React from "react";
import { Link ,NavLink} from "react-router-dom";
import { FaFacebook, FaInstagram,FaTwitter} from "react-icons/fa6";
import "./Foote.css"

export default function Footer() {
  return (
    <>
      <div className="footer-area">
        <div className="foot-logo">
            <Link to="/">
                <h2>Saad Shaikh</h2>
            </Link>
        </div>
        <div className="pages">
        <ul className="menu-items">
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
        <div className="social-media">
            <div className="facebook">
            <FaFacebook/>
            </div>
            <div className="instagram">
            <FaInstagram/>
            </div>
            <div className="twitter">
            <FaTwitter/>
            </div>
        </div>
      </div>
    </>
  );
}
