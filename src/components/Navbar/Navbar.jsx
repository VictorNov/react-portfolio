import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = ({
                    scroll,
                    isToggle,
                    setIsToggle,
                    handleMenuLinkClick,
                    navLinks,
                }) => {
    return (
        <nav className={`app__navbar${scroll ? ' app__navbar--scroll' : ''}`}>
            <Link
                to="/"
                className="app__navbar-logo"
                onClick={() => handleMenuLinkClick()}
            >
                <span>Victor.N</span>
            </Link>
            <ul className="app__navbar-links">
                {navLinks.map((link) => (
                    <li key={`Navbar-${link.label}`}>
                        <NavLink
                            to={link.to}
                            className={
                                ({ isActive }) =>
                                    isActive ? 'app__navbar-link active' : 'app__navbar-link'
                            }
                            onClick={() => handleMenuLinkClick()}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            {!isToggle ? (
                <button
                    className="app__navbar-toggle"
                    onClick={() => setIsToggle(true)}
                >
                    <i className="ri-menu-line"/>
                </button>
            ) : (
                <button
                    className="app__navbar-toggle"
                    onClick={() => setIsToggle(false)}
                >
                    <i className="ri-close-fill"/>
                </button>
            )}
        </nav>
    );
};

export default Navbar;