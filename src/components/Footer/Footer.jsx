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
          Let's work together to make your next project a success.
        </p>

        <Link
          to='/contact'
          className="app__send-message-link"
          onClick={() => {window.scrollTo(0, 0)}}
        >
          Send Message
        </Link>
      </div>

      <div className="app__footer-main">
        <div className="app__footer-info">
          <div className="app__footer-contacts">
            <h3>
              Contact me:
            </h3>
            <a href="tel:+77750344636">
              <i className="ri-phone-line" />
              +7 (775) 034-46-36 (Kazakhstan)
            </a>
            <a href="tel:+38267841859">
              <i className="ri-phone-line" />
              +382 (67) 841-859 (Montenegro)
            </a>
            <a href="mailto:victornov@bk.ru">
              <i className="ri-mail-send-line" />
              victornov@bk.ru
            </a>
          </div>
          <div className="app__footer-social">
            <h3>
              My social networks:
            </h3>
            <div className="app__footer-social-links">
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
          </div>
        </div>
        <div className="app__footer-copy">
          <p>
            &copy; Victor Novokshenov 2022
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer