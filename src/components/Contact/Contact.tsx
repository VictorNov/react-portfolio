import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './Contact.scss';
import { ISocialLink, IContact } from "../../types";
import photo from '../../assets/img/about-photo.png';

const randomImage = 'https://source.unsplash.com/300x350/?dark-forest';
const randomImage2 = 'https://source.unsplash.com/450x320/?architecture,urban';


interface ContactProps {
    socialLinks: ISocialLink[];
    contacts: IContact[];
}

type FormValues = {
    'form-name': string;
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const Contact: React.FC<ContactProps> = ({ socialLinks, contacts }) => {
    function encode(data: FormValues) {
        return Object.keys(data)
            .map(
                (key: string) =>
                    encodeURIComponent(key) + '=' + encodeURIComponent(data[key as keyof FormValues])
            )
            .join('&');
    }

    return (
        <main className="contact">
            <h2 className="section-header">Contact me</h2>
            <div className="contact__wrapper">
                <div className="contact__block--1">
                    <img
                        src={randomImage}
                        alt=""
                        className="contact__block-img--1"
                        width={222}
                        height={259}
                        aria-roledescription="decorative"
                    />
                    <span className="contact__block-img--2">
                        <img
                            src={photo}
                            alt="Victor Novokshenov"
                            width={180}
                            height={180}
                            aria-label="Victor Novokshenov"
                        />
                      </span>
                </div>
                <div className="app__contacts-block2">
                    <Formik
                        initialValues={{ email: '', name: '', phone: '', message: '' }}
                        validate={values => {
                            const errors: FormValues = {
                                'form-name': 'contact',
                                name: '',
                                email: '',
                                phone: '',
                                message: '',
                            };
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
                            fetch('/', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                body: encode({ 'form-name': 'contact', ...values })
                            })
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
                                {!status ? (
                                    <Form className="contact__form">
                                        <input type="hidden" name="form-name" value="contact"/>

                                        <label htmlFor="name">
                                            <Field type="text" id="name" name="name"
                                                   placeholder="Name"
                                                   required/>
                                            <ErrorMessage name="name" component="div"/>
                                        </label>

                                        <label htmlFor="email">
                                            <Field type="email" id="email" name="email"
                                                   placeholder="Email"
                                                   required/>
                                            <ErrorMessage name="email" component="div"/>
                                        </label>

                                        <label htmlFor="phone">
                                            <Field type="tel" id="phone" name="phone"
                                                   placeholder="Phone"/>
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
                                        {status.success ? (
                                            <div className="app__contacts-form--success">
                                                <h3>Thank you for your message!</h3>
                                            </div>
                                        ) : (
                                            <div className="app__contacts-form--error">
                                                <h3>Something went wrong. Please try again
                                                    later.</h3>
                                            </div>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </Formik>
                </div>
                <div className="contact__block--3">
                    <h3>
                        Or contact me any other way:
                    </h3>
                    <ul className="contact__link-list">
                        {contacts.map((contact, index) => (
                            <li key={`contact-page-link-${index}`}>
                                <a
                                    className="contact__link"
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={contact.title}
                                >
                                    <i className={contact.icon}/>
                                    {contact.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="contact__social-links">
                        {socialLinks.map((socialLink, index) => (
                            <li key={`contact-page-social-link-${index}`}>
                                <a
                                    className="contact__social-link"
                                    href={socialLink.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={socialLink.name}
                                >
                                    <i className={socialLink.icon}/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="contact__block--4">
                    <img
                        src={randomImage2}
                        alt=""
                        width={318}
                        height={227}
                        aria-roledescription="decorative"
                    />
                </div>
            </div>
        </main>
    );
};