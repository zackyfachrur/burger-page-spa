import './Footer.css'
import React from 'react'

export default function Footers() {
  return(
    <div className="Footers">
      <div className="Footers-container">
        <div className="Footers-item">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
          <h2>Masakan Maman</h2>
        </div>
      </div>
      <ul className='Nav-footer-list'>
        <li><a href="/" >Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/food">Menu</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}