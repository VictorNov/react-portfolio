import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.scss';
import { INavLink } from "../../types";

interface NavbarProps {
    navLinks: INavLink[];
    scroll: boolean;
    isToggle: boolean;
    setIsToggle: (value: boolean) => void;
    handleMenuLinkClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
                    scroll,
                    isToggle,
                    setIsToggle,
                    handleMenuLinkClick,
                    navLinks,
                }) => {
    return (
        <nav className={`navbar${scroll ? ' navbar--scroll' : ''}`}>
            <Link
                to="/"
                className="navbar__logo"
                onClick={() => handleMenuLinkClick()}
            >
                <span>Victor.N</span>
            </Link>
            <ul className="navbar__links">
                {navLinks.map((link) => (
                    <li key={`Navbar-${link.label}`}>
                        <NavLink
                            to={link.to}
                            className={({ isActive}) => (
                                `navbar__link${isActive ? ' navbar__link--active' : ''}`
                            )}
                            onClick={() => handleMenuLinkClick()}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            {!isToggle ? (
                <button
                    className="navbar__toggle"
                    onClick={() => setIsToggle(true)}
                    type="button"
                    title="Open menu"
                    aria-label="Open menu"
                >
                    <i className="ri-menu-line"/>
                </button>
            ) : (
                <button
                    className="navbar__toggle"
                    onClick={() => setIsToggle(false)}
                    type="button"
                    title="Close menu"
                    aria-label="Close menu"
                >
                    <i className="ri-close-fill"/>
                </button>
            )}
        </nav>
    );
};