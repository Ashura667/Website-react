import React from "react";
import logo from ".././logo.svg";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar_class">
      <div className="logo">
        <img src={logo} alt="test" />
      </div>
      <ul className="navbar_signup">
        <li className="sigin">SIGN IN</li>
        <li className="signup">SIGN UP</li>
      </ul>
    </nav>
  );
}

export default Navbar;
