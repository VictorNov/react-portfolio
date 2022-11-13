import React from 'react'
import { Link } from 'react-router-dom'

import './MobileMenu.scss'

const MobileMenu = ({isToggle, handleClick}) => {
  return (
    <nav className={`app__mobile-menu${isToggle ? ' toggle' : ''}`}>
      <ul className="app__mobile-menu-links">
        <li>
          <Link
            to={'/'}
            className='app__mobile-menu-link'
            key='home'
            onClick={() => handleClick(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={'/portfolio'}
            className='app__mobile-menu-link'
            key='portfolio'
            onClick={() => handleClick(false)}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to={'/contact'}
            className='app__mobile-menu-link'
            key='contact'
            onClick={() => handleClick(false)}
          >
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileMenu