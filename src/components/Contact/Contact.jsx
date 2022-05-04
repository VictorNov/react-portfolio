import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './Contact.scss'
import photo from '../../assets/img/about-photo.png'

const randomImage = 'https://source.unsplash.com/300x350/?interior'
const randomImage2 = 'https://source.unsplash.com/350x250/?architecture,urban'

const Contact = () => {
  return (
    <main className="app__contact">
      <h2 className="section-header">Контакты</h2>
      <div className="app__contacts-wrapper">
        <div className="app__contacts-block1">
          <img src={randomImage} alt="" className="images-block-photo-1"/>
          <span className="images-block-photo-2">
            <img src={photo} alt="" />
          </span>
        </div>
        <div className="app__contacts-block2">
          <Formik
            initialValues={{ email: '', name: '', phone: '', message: '' }}
            validate={values => {
              const errors = {};
              if (!values.name) {
                errors.name = 'Обязательное поле';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Некорректный адрес электронной почты';
              } else if (!values.email) {
                errors.email = 'Обязательное поле';
              } else if (!values.message) {
                errors.message = 'Обязательное поле';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="app__contacts-form">
                <label htmlFor="name">
                  <Field type="text" id="name" name="name" placeholder="Имя" required />
                  <ErrorMessage name="name" component="div" />
                </label>

                <label htmlFor="email">
                  <Field type="email" id="email" name="email" placeholder="Email" required />
                  <ErrorMessage name="email" component="div" />
                </label>

                <label htmlFor="name">
                  <Field type="tel" id="phone" name="phone" placeholder="Телефон" />
                </label>

                <label htmlFor="message">
                  <Field as="textarea" id="message" name="message" placeholder="Сообщение" required />
                  <ErrorMessage name="message" component="div" />
                </label>

                <button type="submit" disabled={isSubmitting}>
                  Отправить
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="app__contacts-block3">
          <h3>Свяжитесь со мной любым удобным способом</h3>
          <a href="tel:+79995669267">
            <i className="ri-phone-line" />
            +7 (999) 566-92-67
          </a>
          <a href="mailto:victornov@bk.ru">
            <i className="ri-mail-send-line" />
            victornov@bk.ru
          </a>
          <div className="app__contacts-social-links">
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
        <div className="app__contacts-block4">
          <img src={randomImage2} alt=""/>
        </div>
      </div>
    </main>
  )
}

export default Contact