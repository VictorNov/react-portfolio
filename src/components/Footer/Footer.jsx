import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const randomImage = 'https://source.unsplash.com/1600x400/?technology';
const randomImageMobile = 'https://source.unsplash.com/768x500/?technology';

const Footer = ({
                    contacts,
                    page,
                    socialLinks,
                }) => {
    return (
        <footer className="app__footer">
            {page !== '/contact' && (
                <div className="footer__contact-me-block">
                    <img
                        src={window.innerWidth < 768 ? randomImageMobile : randomImage}
                        alt=""
                        className="footer__contact-me-img"
                    />

                    <p className="footer__contact-me-text">
                        Let's work together to make your next project a success.
                    </p>

                    <Link
                        to="/contact"
                        className="footer__contact-me-link"
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        Send Message
                    </Link>
                </div>
            )}

            <div className="footer__main">
                <div className="footer__info">
                    <div className="footer__contacts">
                        <h3>
                            Contact me:
                        </h3>
                        <ul className="footer__contact-links">
                            {contacts.map((contact, index) => (
                                <li key={`footer-contact-${index}`}>
                                    <a
                                        className="footer__contact-link"
                                        href={contact.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className={contact.icon}/>
                                        {contact.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer__social">
                        <h3>
                            My social networks:
                        </h3>
                        <ul className="footer__social-links">
                            {socialLinks.map((link, index) => (
                                <li key={`footer-social-link-${index}`}>
                                    <a href={link.link}
                                       className="footer__social-link"
                                       rel="noreferrer"
                                       target="_blank"
                                       title={link.name}
                                    >
                                        <i className={link.icon}/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="app__footer-copy">
                    <p>
                        &copy; Victor Novokshenov 2022
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;