import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = ({scroll, isToggle, setIsToggle, handleClick}) => {
  return (
    <nav className={`app__navbar${scroll ? ' app__navbar--scroll' : ''}`}>
      <Link
        to='/'
        className='app__navbar-logo'
        onClick={() => handleClick(false)}
      >
        <span>В.Новокшенов</span>
      </Link>
      <ul className="app__navbar-links">
        <li>
          <NavLink to={'/'} className={({ isActive }) => isActive ? 'app__navbar-link active' : 'app__navbar-link' } key='home'>Главная</NavLink>
        </li>
        <li>
          <NavLink to={'/portfolio'} className={({ isActive }) => isActive ? 'app__navbar-link active' : 'app__navbar-link'} key='portfolio'>Портфолио</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'app__navbar-link active' : 'app__navbar-link'} key='contact'>Контакты</NavLink>
        </li>
      </ul>
      {!isToggle ? (
        <button
          className="app__navbar-toggle"
          onClick={() => setIsToggle(true)}
        >
          <i className="ri-menu-line" />
        </button>
      ) : (
        <button
          className="app__navbar-toggle"
          onClick={() => setIsToggle(false)}
        >
          <i className="ri-close-fill" />
        </button>
      )}
    </nav>
  )
}

export default Navbar