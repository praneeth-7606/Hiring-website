import React from 'react';
// import './Navbar.css';
import myimage  from "./logowebsite.png"

function Mybar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Insert your logo here */}
        {/* Logo */}
        <img src={myimage} alt="myimage" width="60%" height="60%"/>
      </div>
      <div className="navbar-items">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <div className="navbar-buttons">
        <button>Login</button>
        <button>Sign Up</button>
        <button>Book a demo</button>
      </div>
    </nav>
  );
}

export default Mybar;
