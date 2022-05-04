import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

const randomImage = 'https://source.unsplash.com/1600x400/?technology'
const randomImageMobile = 'https://source.unsplash.com/768x500/?technology'

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__send-message">
        <img
          src={window.innerWidth < 768 ? randomImageMobile : randomImage}
          alt=""
          className="app__send-message-img"
        />

        <p className="app__send-message-text">
          Буду рад познакомиться!
        </p>

        <Link
          to='/contact'
          className="app__send-message-link"
          onClick={() => {window.scrollTo(0, 0)}}
        >
          Отправить сообщение
        </Link>
      </div>

      <div className="app__footer-main">
        <div className="app__footer-info">
          <div className="app__footer-contacts">
            <h3>Связаться со мной:</h3>
            <a href="tel:+79995669267">
              <i className="ri-phone-line" />
              +7 (999) 566-92-67
            </a>
            <a href="mailto:victornov@bk.ru">
              <i className="ri-mail-send-line" />
              victornov@bk.ru
            </a>
          </div>
          <div className="app__footer-social">
            <h3>Мои соцсети:</h3>
            <div className="app__footer-social-links">
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
          </div>
        </div>
        <div className="app__footer-copy">
          <p>
            &copy; Victor Nov 2022
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer