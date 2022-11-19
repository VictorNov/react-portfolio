import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import {
    Navbar,
    Header,
    About,
    Portfolio,
    Contact,
    Footer,
    MobileMenu,
    ToTop
} from './components/components';
import './App.scss';

function App() {
    const [ isScroll, setIsScroll ] = useState(false);
    const [ isToggle, setIsToggle ] = useState(false);

    useEffect(() => {
        if ( isToggle ) {
            disablePageScroll();
        } else {
            enablePageScroll();
        }
    }, [ isToggle ]);

    const handleMenuLinkClick = (toggle) => {
        if ( !toggle ) {
            setIsToggle(false);
            window.scrollTo(0, 0);
        }
    };

    const detectScroll = () => {
        window.scrollY > 50 ? setIsScroll(true) : setIsScroll(false);
    };

    window.addEventListener('scroll', detectScroll);

    return (
        <div className="App">
            <Navbar scroll={isScroll} isToggle={isToggle} setIsToggle={setIsToggle}
                    handleClick={handleMenuLinkClick}/>
            {isToggle && (
                <MobileMenu isToggle={isToggle} handleMenuLinkClick={handleMenuLinkClick}/>
            )}
            <Routes>
                <Route path="/*" element={(
                    <>
                        <Header page="about"/>
                        <About/>
                    </>
                )}/>
                <Route path="/portfolio" element={(
                    <>
                        <Header page="portfolio"/>
                        <Portfolio/>
                    </>
                )}/>
                <Route path="/contact" element={(
                    <>
                        <Header page="contact"/>
                        <Contact/>
                    </>
                )}/>
            </Routes>
            <Footer/>
            {isScroll && <ToTop/>}
        </div>
    );
}

export default App;
