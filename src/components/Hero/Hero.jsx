import React, { useEffect, useState, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';

import './Hero.scss';
import photo from '../../assets/img/hero-photo.png';

const Hero = ({ page, socialLinks }) => {
    const [ vantaEffect, setVantaEffect ] = useState(0);
    const [ vantaEffect2, setVantaEffect2 ] = useState(0);
    const backgroundAnimation = useRef(null);
    const backgroundAnimation2 = useRef(null);

    useEffect(() => {
        if ( !vantaEffect ) {
            setVantaEffect(BIRDS({
                el: backgroundAnimation.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color1: 0x275055,
                color2: 0x010404,
                quantity: 3.00,
                colorMode: 'lerpGradient',
                backgroundAlpha: 0.00
            }));
        }
        return () => {
            if ( vantaEffect ) vantaEffect.destroy();
        };
    }, [ vantaEffect ]);

    useEffect(() => {
        if ( !vantaEffect2 ) {
            setVantaEffect2(BIRDS({
                el: backgroundAnimation2.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                birdSize: 4.00,
                wingSpan: 40.00,
                color1: 0x275055,
                color2: 0x010404,
                quantity: 1.00,
                colorMode: 'lerpGradient',
                backgroundAlpha: 0.00
            }));
        }
        return () => {
            if ( vantaEffect2 ) vantaEffect2.destroy();
        };
    }, [ vantaEffect2 ]);

    return (
        <header className="app__hero">
            <div
                ref={backgroundAnimation}
                className="app__hero-birds"
            />
            <img
                src={photo}
                alt="Victor Novokshenov"
                className="app__hero-img"
            />
            <div className="app__hero-info">
                {page === '/' && (
                    <>
                        <h1 className="app__hero-title">
                            Victor<br/>
                            Novokshenov
                        </h1>
                        <p className="app__hero-subtitle">
                            Frontend Developer
                        </p>
                    </>
                ) || page === '/portfolio' && (
                    <h1 className="app__hero-title">Portfolio</h1>
                ) || page === '/contact' && (
                    <h1 className="app__hero-title">Contact me</h1>
                ) || (
                    <h1 className="app__hero-title">Page 404</h1>
                )}
            </div>
            <div className="app__hero-social">
                {socialLinks.map((link, index) => (
                    <a
                        className="app__hero-social-link"
                        key={`hero-social-link-${index}`}
                        href={link.link}
                        rel="noreferrer"
                        target="_blank"
                        title={link.name}
                    >
                        <i className={link.icon}/>
                    </a>
                ))}
            </div>
            <div
                ref={backgroundAnimation2}
                className="app__hero-birds"
            />
        </header>
    );
};

export default Hero;