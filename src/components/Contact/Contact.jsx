import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './Contact.scss';
import photo from '../../assets/img/about-photo.png';

const randomImage = 'https://source.unsplash.com/300x350/?interior';
const randomImage2 = 'https://source.unsplash.com/350x250/?architecture,urban';

const Contact = () => {
    return (
        <main className="app__contact">
            <h2 className="section-header">Contact me</h2>
            <div className="app__contacts-wrapper">
                <div className="app__contacts-block1">
                    <img
                        src={randomImage}
                        alt=""
                        className="images-block-photo-1"
                        width={222}
                        height={259}
                    />
                    <span className="images-block-photo-2">
                        <img
                            src={photo}
                            alt=""
                            width={180}
                            height={180}
                        />
                      </span>
                </div>
                <div className="app__contacts-block2">
                    <Formik
                        initialValues={{ email: '', name: '', phone: '', message: '' }}
                        validate={values => {
                            const errors = {};
                            if ( !values.name ) {
                                errors.name = 'Required field';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Incorrect email address';
                            } else if ( !values.email ) {
                                errors.email = 'Required field';
                            } else if ( !values.message ) {
                                errors.message = 'Required field';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting, setStatus }) => {
                            axios.post('https://raw.githubusercontent.com/VictorNov/react-portfolio/master/public/api/mail.php', values)
                                .then(() => {
                                    setSubmitting(false);
                                    setStatus({ success: true });
                                })
                                .catch(() => {
                                    setSubmitting(false);
                                    setStatus({ success: false });
                                });
                        }}
                    >
                        {({ isSubmitting, status }) => (
                            <>
                                { !status ? (
                                    <Form className="app__contacts-form">
                                        <label htmlFor="name">
                                            <Field type="text" id="name" name="name" placeholder="Name"
                                                   required/>
                                            <ErrorMessage name="name" component="div"/>
                                        </label>

                                        <label htmlFor="email">
                                            <Field type="email" id="email" name="email" placeholder="Email"
                                                   required/>
                                            <ErrorMessage name="email" component="div"/>
                                        </label>

                                        <label htmlFor="name">
                                            <Field type="tel" id="phone" name="phone" placeholder="Phone"/>
                                        </label>

                                        <label htmlFor="message">
                                            <Field as="textarea" id="message" name="message"
                                                   placeholder="Message" required/>
                                            <ErrorMessage name="message" component="div"/>
                                        </label>

                                        <button type="submit" disabled={isSubmitting}>
                                            Send message
                                        </button>
                                    </Form>
                                ) : (
                                    <>
                                        { status.success ? (
                                            <div className="app__contacts-form--success">
                                                <h3>Thank you for your message!</h3>
                                            </div>
                                        ) : (
                                            <div className="app__contacts-form--error">
                                                <h3>Something went wrong. Please try again later.</h3>
                                            </div>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </Formik>
                </div>
                <div className="app__contacts-block3">
                    <h3>
                        Or contact me any other way:
                    </h3>
                    <a href="tel:+38267841859">
                        <i className="ri-phone-line"/>
                        +382 (67) 841-859 (Montenegro)
                    </a>
                    <a href="mailto:victornov@bk.ru">
                        <i className="ri-mail-send-line"/>
                        victornov@bk.ru
                    </a>
                    <div className="app__contacts-social-links">
                        <a href="https://www.facebook.com/victor.nov.31/"
                           className="app__header-social-link"
                           rel="noreferrer"
                           target="_blank"
                        >
                            <i className="ri-facebook-line"/>
                        </a>
                        <a href="https://www.instagram.com/victor_nov/"
                           className="app__header-social-link"
                           rel="noreferrer"
                           target="_blank"
                        >
                            <i className="ri-instagram-line"/>
                        </a>
                        <a href="https://github.com/VictorNov"
                           className="app__header-social-link"
                           rel="noreferrer"
                           target="_blank"
                        >
                            <i className="ri-github-fill"/>
                        </a>
                    </div>
                </div>
                <div className="app__contacts-block4">
                    <img
                        src={randomImage2}
                        alt=""
                        width={318}
                        height={227}
                    />
                </div>
            </div>
        </main>
    );
};

export default Contact;