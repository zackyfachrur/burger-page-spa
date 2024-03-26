import './Navbar.css'
import React, { useState } from 'react';


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navbar = {
    logoDesc: "Masakan Maman"
  }

  return(
    <nav className="navbar-nav">
      <h2 className="logo">{navbar.logoDesc}</h2>
      <ul className={`nav-list${navbarOpen ? ' hidden' : ''}`} id="nav-list">
        <li><a href="/" >Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/food">Food</a></li>
        <li><a href="#/">Contact</a></li>
      </ul>
        <div className="hamburger-menu" id="hamburger-menu" onClick={() => setNavbarOpen(!navbarOpen)}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
    </nav>
  );
}
