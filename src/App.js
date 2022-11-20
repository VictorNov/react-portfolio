import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import {
    Navbar,
    Hero,
    About,
    Portfolio,
    Contact,
    Footer,
    MobileMenu,
    ToTop
} from './components/components';
import './App.scss';

const NAV_LINKS = [
    {
        to: '/',
        label: 'Home',
    },
    {
        to: '/portfolio',
        label: 'Portfolio',
    },
    {
        to: '/contact',
        label: 'Contact me',
    },
];

const SOCIAL_LINKS = [
    {
        name: 'facebook',
        link: 'https://www.facebook.com/victor.nov.31/',
        icon: 'ri-facebook-line',
    },
    {
        name: 'instagram',
        link: 'https://www.instagram.com/victor_nov/',
        icon: 'ri-instagram-line',
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/victor-novokshenov-479249255/',
        icon: 'ri-linkedin-line',
    },
    {
        name: 'github',
        link: 'https://github.com/VictorNov',
        icon: 'ri-github-fill',
    },
];

const CONTACTS = [
    {
        title: '+7 (775) 034-46-36 (Kazakhstan)',
        link: 'tel:+77750344636',
        icon: 'ri-phone-line',
    },
    {
        title: '+382 (67) 841-859 (Montenegro)',
        link: 'tel:+38267841859',
        icon: 'ri-phone-line',
    },
    {
        title: 'victornov@bk.ru',
        link: 'mailto:victornov@bk.ru',
        icon: 'ri-mail-send-line',
    },
];

function App() {
    const [ isScroll, setIsScroll ] = useState(false);
    const [ isToggle, setIsToggle ] = useState(false);
    const location = useLocation();

    const handleMenuLinkClick = () => {
        setIsToggle(false);
        window.scrollTo(0, 0);
    };

    const detectScroll = () => {
        window.scrollY > 50 ? setIsScroll(true) : setIsScroll(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', detectScroll);
        return () => window.removeEventListener('scroll', detectScroll);
    }, []);

    useEffect(() => {
        if ( isToggle ) {
            disablePageScroll();
        } else {
            enablePageScroll();
        }
        return () => enablePageScroll();
    }, [ isToggle ]);

    return (
        <div className="App">
            <Navbar
                scroll={isScroll}
                isToggle={isToggle}
                setIsToggle={setIsToggle}
                handleMenuLinkClick={handleMenuLinkClick}
                navLinks={NAV_LINKS}
            />
            {isToggle && (
                <MobileMenu
                    isToggle={isToggle}
                    handleMenuLinkClick={handleMenuLinkClick}
                    navLinks={NAV_LINKS}
                />
            )}
            <Hero
                page={location.pathname}
                socialLinks={SOCIAL_LINKS}
            />
            <Routes>
                <Route path="/" element={(
                    <About/>
                )}/>
                <Route path="/portfolio" element={(
                    <Portfolio/>
                )}/>
                <Route path="/contact" element={(
                    <Contact/>
                )}/>
                <Route path="*" element={(
                    <div>404</div>
                )}/>
            </Routes>
            <Footer
                page={location.pathname}
                socialLinks={SOCIAL_LINKS}
                contacts={CONTACTS}
            />
            {isScroll && <ToTop/>}
        </div>
    );
}

export default App;
