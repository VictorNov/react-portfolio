import React from 'react';
import { Link } from 'react-router-dom';

import './MobileMenu.scss';

const MobileMenu = ({
                        isToggle,
                        handleMenuLinkClick,
                        navLinks,
                    }) => {
    return (
        <nav className={`mobile-menu${isToggle ? ' toggle' : ''}`}>
            <ul className="mobile-menu__links">
                {navLinks.map((link) => (
                    <li key={`MobileMenu-${link.label}`}>
                        <Link
                            to={link.to}
                            className="mobile-menu__link"
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