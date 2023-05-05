import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
// import bars from "../Assets/menu.png"
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        Umar's Code Corner
      </a>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
       {/* <div className="bars"><img src={bars} alt="" /></div>  */}
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            About
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Products
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            Contact
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link navbar-cart">
            <FaShoppingCart className="navbar-cart-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
