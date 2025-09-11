import React, { useState } from 'react';
import "../css/Navbar.css"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="/" className="nav-logo">
                    <img src="logo192.png" width={100} height={100} alt='logo'/>
                </a>
                
               
                
                <button 
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                  
                   
                    <li><a href="/about" className="nav-link">About</a></li>
                    <li><a href="/services" className="nav-link">Services</a></li>
                    <li><a href="/contact" className="nav-link">Contact</a></li>
                </ul>
                
               
            </div>
        </nav>
    );
};

export default Navbar;