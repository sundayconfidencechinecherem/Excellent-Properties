import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import "../css/Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isLoggedIn, user, logout, isLoading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
    }, [location]);

    const toggleMenu = () => {
        const newState = !isMenuOpen;
        setIsMenuOpen(newState);
        document.body.classList.toggle('menu-open', newState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
    };

    const handleLogout = () => {
        logout();
        closeMenu();
        navigate('/');
    };

    // Show loading state or nothing while checking auth status
    if (isLoading) {
        return (
            <nav className="navbar">
                <div className="nav-container">
                    <Link to="/" className="nav-logo">
                        <img src="/image/logo.png" alt="Nigerian Properties Logo" className="logo-image" />
                    </Link>
                </div>
            </nav>
        );
    }

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                <img src="../images/logo.png" alt="excellent property logo" className="logo-image" />
                </Link>
                
                <button 
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                 
                    <li>
                        <Link 
                            to="/about" 
                            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/services" 
                            className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                    
                    {isLoggedIn ? (
                        <>
                            {/* <li className="nav-user">
                                <span className="user-greeting">Hello, {user?.name || 'User'}</span>
                            </li> */}
                            
                            <li>
                                <Link 
                                    to="/favorites" 
                                    className={`nav-link ${location.pathname === '/favorites' ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    Favorites
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/profile" 
                                    className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                   <span className="user-greeting">Hello, {user?.name || 'User'}</span>
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="nav-link logout-btn">
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link 
                                    to="/login" 
                                    className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/register" 
                                    className="nav-link signup-btn"
                                    onClick={closeMenu}
                                >
                                    Sign Up
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;