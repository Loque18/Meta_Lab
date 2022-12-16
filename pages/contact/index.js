/* eslint-disable no-unused-expressions */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { createRef, useEffect, useState } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';

import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import api from 'src/api';

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

import style from './contact.module.scss';
// import { toast } from 'react-toastify';

const { root, inputContainer, tAreaContainer, imgContainer, lastPart } = style;

// valid number regex, with country code
const validNumberRegex = /^(\+?)(\d{1,3})?[-. ]?(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/;

// const phoneRegExp =
//     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const recaptchaRef = createRef(null);

    useEffect(() => {
        const { body } = document;

        body.classList.remove('has-navbar-fixed-top');

        return () => {
            body.classList.add('has-navbar-fixed-top');
        };
    }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            recaptcha: '',
        },
        validationSchema: yup.object({
            name: yup.string().required('Name is required'),
            email: yup.string().email('Invalid email address').required('Email is required'),
            phone: yup.string().matches(validNumberRegex, 'Phone number is not valid'),
            subject: yup.string().required('Subject is required'),
            message: yup.string().max(500, 'Message must be less than 500 characters'),
            recaptcha: yup.string().required('Please verify that you are not a robot'),
        }),
        onSubmit: async values => {
            setLoading(true);
            const data = {
                name: values.name,
                email: values.email,
                subject: values.subject,
            };
            if (values.phone.length > 0) {
                data.phone = values.phone;
            }
            if (values.message.length > 0) {
                data.message = values.message;
            }
            try {
                const res = await api.contacts.post(data, values.recaptcha);
                if (res.data.status === 'success') {
                    toast.success('Message sent successfully');
                } else {
                    toast.error(res.data.data.message);
                }
                setSent(true);
            } catch (err) {
                if (err.response.status === 429) {
                    toast.error('Too many requests, please try again later');
                    return;
                }
                toast.error('an error has occurred, please try again later');
            }
            setLoading(false);
        },
    });

    const verifyCallback = value => {
        if (value) formik.setFieldValue('recaptcha', value);
    };

    return (
        <section className={`${root} has-bg-gra2`}>
            <div style={{ paddingTop: '6rem' }} />

            <div className="container px-5 py-6" style={{ height: '100%' }}>
                <div className="mb-8">
                    <h1 className="title has-text-lgrey is-1 has-text-centered ignore-font">Contact Us</h1>
                    <h2 className="has-text-lgrey has-text-centered ignore-font is-size-5">
                        Feel free to contact us anytime. We will get <br /> back to you as soon as we can!
                    </h2>
                </div>
                <div className="columns is-vcentered">
                    <div className="column mb-6">
                        <div className="box pt-6">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="columns">
                                    <div className="column">
                                        <div className="field">
                                            <div className="control">
                                                <div className={inputContainer}>
                                                    <span className="p-float-label">
                                                        <InputText
                                                            id="name"
                                                            name="name"
                                                            value={formik.values.name}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <label htmlFor="name">Name *</label>
                                                        {formik.touched.name && formik.errors.name ? (
                                                            <small id="username2-help" className="p-error">
                                                                {formik.errors.name}
                                                            </small>
                                                        ) : null}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <div className="control">
                                                <div className={inputContainer}>
                                                    <span className="p-float-label">
                                                        <InputText
                                                            id="email"
                                                            name="email"
                                                            value={formik.values.email}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <label htmlFor="email">Email *</label>
                                                        {formik.touched.email && formik.errors.email ? (
                                                            <small id="username2-help" className="p-error">
                                                                {formik.errors.email}
                                                            </small>
                                                        ) : null}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div className="field">
                                            <div className="control">
                                                <div className={inputContainer}>
                                                    <span className="p-float-label">
                                                        <InputText
                                                            id="phone"
                                                            name="phone"
                                                            value={formik.values.phone}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <label htmlFor="phone">Phone *</label>
                                                        {formik.touched.phone && formik.errors.phone ? (
                                                            <small id="username2-help" className="p-error">
                                                                {formik.errors.phone}
                                                            </small>
                                                        ) : null}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <div className="control">
                                                <div className={inputContainer}>
                                                    <span className="p-float-label">
                                                        <InputText
                                                            id="subject"
                                                            name="subject"
                                                            value={formik.values.subject}
                                                            onChange={formik.handleChange}
                                                        />
                                                        <label htmlFor="subject">Subject</label>
                                                        {formik.touched.subject && formik.errors.subject ? (
                                                            <small id="username2-help" className="p-error">
                                                                {formik.errors.subject}
                                                            </small>
                                                        ) : null}
                                                    </span>{' '}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <div className={tAreaContainer}>
                                            <span className="p-float-label">
                                                <InputTextarea
                                                    id="textarea"
                                                    rows={3}
                                                    name="message"
                                                    value={formik.values.message}
                                                    onChange={formik.handleChange}
                                                />
                                                <label htmlFor="textarea">How can we help?</label>
                                                {formik.touched.message && formik.errors.message ? (
                                                    <small id="username2-help" className="p-error">
                                                        {formik.errors.message}
                                                    </small>
                                                ) : null}
                                            </span>
                                        </div>{' '}
                                    </div>
                                </div>

                                <br />

                                <div className="field">
                                    <div className="control">
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey="6LdUL0MjAAAAALWSBq6EureJvvtCDw8OBnIn_jKy"
                                            size="normal"
                                            onChange={verifyCallback}
                                        />
                                        {formik.touched.recaptcha && formik.errors.recaptcha ? (
                                            <small id="username2-help" className="p-error">
                                                {formik.errors.recaptcha}
                                            </small>
                                        ) : null}
                                    </div>
                                </div>

                                <br />
                                <div className="has-text-centered-mobile">
                                    <button
                                        className={`button ${loading ? 'is-loading' : ''}`}
                                        type="submit"
                                        disabled={sent}
                                    >
                                        {sent ? 'Message Sent' : 'Send'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="column">
                        <div className={imgContainer}>
                            <img src="/Media/desktopIcon.webp" alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className={Box}>
                    <div className={contentBoxContainer}></div>
                </div> */}
                <div className={lastPart}>
                    <h3 className="has-text-lgrey">
                        <span className="icon">
                            <i className="far fa-location" />
                        </span>
                        Dubai - UAE
                    </h3>
                    <h3 className="has-text-lgrey">
                        <span className="icon">
                            <i className="far fa-envelope" />
                        </span>
                        info@metalab.business
                    </h3>
                    <h3 className="has-text-lgrey">
                        <span className="icon">
                            <i className="far fa-phone" />
                        </span>
                        <a href="tel:00971508068440" style={{ color: 'white' }}>
                            00971508068440
                        </a>
                    </h3>
                </div>
            </div>
        </section>
    );
};

ContactUs.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Contact Us');

export default ContactUs;
