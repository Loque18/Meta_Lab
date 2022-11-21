/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

import style from './contact.module.scss';

const { root, inputContainer, tAreaContainer, imgContainer } = style;

const ContactUs = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        },
        validationSchema: yup.object({
            name: yup.string().required('Name is required'),
            email: yup.string().email('Invalid email address').required('Email is required'),
            phone: yup.string().required('Phone is required'),
            subject: yup.string().required('Subject is required'),
            message: yup.string().required('Message is required'),
        }),
        onSubmit: values => {
            // send to db
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <section className={root}>
            <div className="container px-5 flex flex-row align-items-center" style={{ height: '100%' }}>
                <div className="columns is-vcentered">
                    <div className="column mb-6">
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
                                                    <label htmlFor="name">Name</label>
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
                                                    <label htmlFor="email">Email</label>
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
                                                    <label htmlFor="phone">Phone</label>
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
                            <div className="has-text-centered-mobile">
                                <button className="button is-transparent " type="submit">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="column">
                        <div className={imgContainer}>
                            <img src="/Media/desktopIcon.png" alt="icon.png" />
                        </div>
                    </div>
                </div>
                {/* <div className={Box}>
                    <div className={contentBoxContainer}></div>
                </div> */}
            </div>
            {/* <div className={contactContentDescription}>
                <h1 className={contactTitle}>Contact Us</h1>
                <h2 className={contactText}>
                    Feel free to contact us anytime. We will get <br /> back to you as soon as we can!
                </h2>
            </div> */}

            {/* <div className={contactInformation}>
                <h3 className={info}>
                    <i className="far fa-location" /> Location goes here
                </h3>
                <h3 className={info}>
                    <i className="far fa-envelope" /> info@metalab.business
                </h3>
                <h3 className={info}>
                    <i className="far fa-phone" /> 00 971 123 456 789
                </h3>
            </div> */}
        </section>
    );
};

ContactUs.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Contact Us');

export default ContactUs;