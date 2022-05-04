import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Navbar, Header, About, Portfolio, Contact, Footer, MobileMenu, ToTop } from './components/components'
import './App.scss';

function App() {
  const [isScroll, setIsScroll] = useState(false)
  const [isToggle, setIsToggle] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (isToggle) {
      setTimeout(() => {
        setScrollY(window.scrollY)
        document.body.style.position = 'fixed'
        document.body.style.scrollBehavior = 'auto'
      }, 500)
    } else {
      document.body.style.position = 'static'
      window.scrollTo(0, scrollY)
      document.body.style.scrollBehavior = 'smooth'
    }
  }, [isToggle])

  const handleClick = (toggle) => {
    if (!toggle) {
      setScrollY(0)
      setIsToggle(false)
      window.scrollTo(0, scrollY)
    }
  }

  const detectScroll = () => {
    window.scrollY > 50 ? setIsScroll(true) : setIsScroll(false)
  }

  window.addEventListener('scroll', detectScroll)

  return (
    <div className="App">
      <Navbar scroll={isScroll} isToggle={isToggle} setIsToggle={setIsToggle} handleClick={handleClick} />
      {isToggle && (<MobileMenu isToggle={isToggle} handleClick={handleClick} />)}
      <Routes>
        <Route path='/*' element={(
          <>
            <Header page='about' />
            <About />
          </>
        )} />
        <Route path='/portfolio' element={(
          <>
            <Header page='portfolio' />
            <Portfolio />
          </>
        )} />
        <Route path='/contact' element={(
          <>
            <Header page='contact' />
            <Contact />
          </>
        )} />
      </Routes>
      <Footer />
      {isScroll && (<ToTop />)}
    </div>
  );
}

export default App;
