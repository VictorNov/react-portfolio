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
                <div className="app__send-message">
                    <img
                        src={window.innerWidth < 768 ? randomImageMobile : randomImage}
                        alt=""
                        className="app__send-message-img"
                    />

                    <p className="app__send-message-text">
                        Let's work together to make your next project a success.
                    </p>

                    <Link
                        to="/contact"
                        className="app__send-message-link"
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                    >
                        Send Message
                    </Link>
                </div>
            )}

            <div className="app__footer-main">
                <div className="app__footer-info">
                    <div className="app__footer-contacts">
                        <h3>
                            Contact me:
                        </h3>
                        <ul className="app__footer-contact-links">
                            {contacts.map((contact, index) => (
                                <li key={`footer-contact-${index}`}>
                                    <a
                                        className="app__footer-contact-link"
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
                    <div className="app__footer-social">
                        <h3>
                            My social networks:
                        </h3>
                        <ul className="app__footer-social-links">
                            {socialLinks.map((link, index) => (
                                <li key={`footer-social-link-${index}`}>
                                    <a href={link.link}
                                       className="app__footer-social-link"
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