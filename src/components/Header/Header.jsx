import React, { useEffect, useState, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'

import './Header.scss'
import photo from '../../assets/img/header-photo.png'

const Header = ({page}) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
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
        colorMode: "lerpGradient",
        backgroundAlpha: 0.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <header className="app__header">
      <div ref={myRef} className="app__header-birds" />
      <img src={photo} alt="Виктор" className='app__header-img'/>
      <div className="app__header-info">
        {page === 'about' && (
          <>
            <h1 className="app__header-title">
              Victor<br />
              Novokshenov
            </h1>
            <p className="app__header-subtitle">
              Frontend Developer
            </p>
          </>
        )}
        {page === 'portfolio' && (
          <h1 className="app__header-title">Portfolio</h1>
        )}
        {page === 'contact' && (
          <h1 className="app__header-title">Contacts</h1>
        )}
      </div>
      <div className="app__header-social">
        <a href="https://www.facebook.com/victor.nov.31/"
           className="app__header-social-link"
           rel="noreferrer"
           target="_blank"
        >
          <i className="ri-facebook-line" />
        </a>
        <a href="https://www.instagram.com/victor_nov/"
           className="app__header-social-link"
           rel="noreferrer"
           target="_blank"
        >
          <i className="ri-instagram-line" />
        </a>
        <a href="https://github.com/VictorNov"
           className="app__header-social-link"
           rel="noreferrer"
           target="_blank"
        >
          <i className="ri-github-fill" />
        </a>
      </div>
    </header>
  )
}

export default Header