import React from 'react';
import { Link } from 'react-router-dom';

import './MobileMenu.scss';
import { INavLink } from "../../types";

interface MobileMenuProps {
    navLinks: INavLink[];
    isToggle: boolean;
    handleMenuLinkClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
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