import React from 'react';
import { Link } from 'react-router-dom';

import './MobileMenu.scss';

const MobileMenu = ({
                        isToggle,
                        handleMenuLinkClick,
                        navLinks,
                    }) => {
    return (
        <nav className={`app__mobile-menu${isToggle ? ' toggle' : ''}`}>
            <ul className="app__mobile-menu-links">
                {navLinks.map((link) => (
                    <li key={`MobileMenu-${link.label}`}>
                        <Link
                            to={link.to}
                            className="app__mobile-menu-link"
                            onClick={() => handleMenuLinkClick()}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MobileMenu;